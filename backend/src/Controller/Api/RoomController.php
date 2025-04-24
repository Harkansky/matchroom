<?php
namespace App\Controller\Api;

use App\Repository\RoomRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/rooms', name: 'api_rooms_')]
class RoomController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(Request $request, RoomRepository $repo): JsonResponse
    {
        $qb = $repo->createQueryBuilder('r')
            ->join('r.hotel','h')
            ->addSelect('h');
        if ($kw = $request->query->get('keywords')) {
            $words = explode(',', $kw);
            foreach ($words as $i => $word) {
                $param = "kw{$i}";
                $qb->andWhere(
                    $qb->expr()->orX(
                        "LOWER(h.name)        LIKE :{$param}",
                        "LOWER(h.city)        LIKE :{$param}",
                        "LOWER(r.roomNumber)  LIKE :{$param}",
                        "LOWER(r.roomType)    LIKE :{$param}",
                        "LOWER(r.description) LIKE :{$param}"
                    )
                )
                    ->setParameter($param, '%'.strtolower($word).'%');
            }
        }
        if ($minCap = (int)$request->query->get('minCapacity', 0)) {
            $qb->andWhere('r.capacity >= :minCap')
                ->setParameter('minCap', $minCap);
        }

        $rooms = $qb->getQuery()->getResult();

        $out = [];
        foreach ($rooms as $r) {
            $h = $r->getHotel();
            $out[] = [
                'roomId'      => $r->getId(),
                'roomNumber'  => $r->getRoomNumber(),
                'roomType'    => $r->getRoomType(),
                'capacity'    => $r->getCapacity(),
                'price'       => $r->getPricePerNight(),
                'amenities'   => $r->getAmenities(),
                'hotelName'   => $h->getName(),
                'hotelCity'   => $h->getCity(),
            ];
        }

        return $this->json(['data' => $out]);
    }
}
