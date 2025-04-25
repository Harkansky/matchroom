<?php

// src/Controller/Api/ReservationController.php
namespace App\Controller\Api;

use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/reservations', name: 'api_reservations_')]
class ReservationController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(ReservationRepository $repo): JsonResponse
    {
        $qb = $repo->createQueryBuilder('r')
            ->where('r.status = :status')
            ->setParameter('status', 'confirmed')
            ->join('r.room', 'room')->addSelect('room')
            ->join('r.user', 'user')->addSelect('user');

        $reservations = $qb->getQuery()->getResult();

        $data = array_map(function ($r) {
            return [
                'id' => $r->getId(),
                'room' => [
                    'id' => $r->getRoom()->getId(),
                    'roomNumber' => $r->getRoom()->getRoomNumber(),
                ],
                'user' => [
                    'id' => $r->getUser()->getId(),
                    'firstName' => $r->getUser()->getFirstName(),
                ],
                'checkIn' => $r->getCheckIn()->format(\DateTime::ATOM),
                'checkOut' => $r->getCheckOut()->format(\DateTime::ATOM),
            ];
        }, $reservations);

        return $this->json($data);
    }

    #[Route('/detailed', name: 'detailed', methods: ['GET'])]
    public function detailedList(ReservationRepository $repo): JsonResponse
    {
        $reservations = $repo->createQueryBuilder('r')
            ->where('r.status = :status')
            ->setParameter('status', 'confirmed')
            ->join('r.room', 'room')->addSelect('room')
            ->join('room.hotel', 'hotel')->addSelect('hotel')
            ->join('r.user', 'user')->addSelect('user')
            ->getQuery()
            ->getResult();

        $data = array_map(function ($r) {
            $room = $r->getRoom();
            $hotel = $room->getHotel();
            $user = $r->getUser();

            return [
                'reservationId' => $r->getId(),
                'checkIn' => $r->getCheckIn()->format('Y-m-d'),
                'checkOut' => $r->getCheckOut()->format('Y-m-d'),
                'totalPrice' => $r->getTotalPrice(),
                'status' => $r->getStatus(),

                'room' => [
                    'number' => $room->getRoomNumber(),
                    'type' => $room->getRoomType(),
                    'pricePerNight' => $room->getPricePerNight(),
                ],

                'hotel' => [
                    'name' => $hotel->getName(),
                    'city' => $hotel->getCity(),
                ],

                'user' => [
                    'id' => $user->getId(),
                    'firstName' => $user->getFirstName(),
                ],
            ];
        }, $reservations);

        return $this->json(['data' => $data]);
    }

}
