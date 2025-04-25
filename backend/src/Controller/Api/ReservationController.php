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
        // 1) On ne récupère que les réservations dont le status = "confirmed"
        $qb = $repo->createQueryBuilder('r')
            ->where('r.status = :status')
            ->setParameter('status', 'confirmed')
            // on joint la room et l'user pour pouvoir renvoyer leurs IDs
            ->join('r.room', 'room')->addSelect('room')
            ->join('r.user', 'user')->addSelect('user');

        $reservations = $qb->getQuery()->getResult();

        // 2) On transforme chaque entité en tableau simple
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
}
