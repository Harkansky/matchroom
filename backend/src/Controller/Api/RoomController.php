<?php

namespace App\Controller\Api;

use App\Repository\RoomRepository;
use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/rooms', name: 'api_rooms_')]
class RoomController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(Request $request, RoomRepository $roomRepo, ReservationRepository $reservationRepo): JsonResponse
    {
        try {
            $keywordsRaw = $request->query->get('keywords', '');
            $minCap = (int) $request->query->get('minCapacity', 0);
            $startDate = $request->query->get('startDate');
            $endDate = $request->query->get('endDate');

            $keywords = is_array($keywordsRaw) ? $keywordsRaw : explode(',', $keywordsRaw);
            $hasKeywords = array_filter($keywords, fn($k) => trim($k) !== '');

            $rooms = $roomRepo->createQueryBuilder('r')
                ->join('r.hotel', 'h')
                ->addSelect('h')
                ->getQuery()
                ->getResult();

            $results = [];

            foreach ($rooms as $r) {
                $h = $r->getHotel();
                if ($minCap > 0 && $r->getCapacity() < $minCap) {
                    continue;
                }
                if (!empty($hasKeywords)) {
                    $match = false;

                    foreach ($keywords as $word) {
                        $word = strtolower(trim((string)$word));
                        if ($word === '') continue;

                        $fields = [
                            strtolower((string)$h->getName()),
                            strtolower((string)$h->getCity()),
                            strtolower((string)$r->getRoomNumber()),
                            strtolower((string)$r->getRoomType()),
                            strtolower((string)($r->getDescription() ?? '')),
                        ];

                        foreach ($fields as $field) {
                            if (levenshtein($word, $field) <= 3 || str_contains($field, $word)) {
                                $match = true;
                                break 2;
                            }
                        }
                    }

                    if (!$match) continue;
                }
                $isAvailable = true;

                if ($startDate && $endDate) {
                    $overlapping = $reservationRepo->createQueryBuilder('res')
                        ->select('count(res.id)')
                        ->where('res.room = :room')
                        ->andWhere('res.checkIn < :endDate AND res.checkOut > :startDate')
                        ->setParameter('room', $r)
                        ->setParameter('startDate', new \DateTime($startDate))
                        ->setParameter('endDate', new \DateTime($endDate))
                        ->getQuery()
                        ->getSingleScalarResult();

                    $isAvailable = $overlapping == 0;
                }

                $results[] = [
                    'roomId'      => $r->getId(),
                    'roomNumber'  => $r->getRoomNumber(),
                    'roomType'    => $r->getRoomType(),
                    'capacity'    => $r->getCapacity(),
                    'price'       => $r->getPricePerNight(),
                    'amenities'   => $r->getAmenities(),
                    'hotelName'   => $h->getName(),
                    'hotelCity'   => $h->getCity(),
                    'available'   => $isAvailable,
                ];
            }

            return $this->json(['data' => $results]);

        } catch (\Throwable $e) {
            return $this->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
