<?php

// src/Controller/Api/ReservationController.php
namespace App\Controller\Api;

use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Reservation;
use App\Entity\Room;
use App\Entity\User;

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

    #[Route('/{username}', name: 'listByUsername', methods: ['GET'])]
public function listByUsername(ReservationRepository $repo, string $username): JsonResponse
{
    // 1) On ne récupère que les réservations dont le status = "confirmed" et dont le username correspond à l'utilisateur spécifié
    $qb = $repo->createQueryBuilder('r')
        // Filtrer les réservations par nom d'utilisateur
        ->join('r.user', 'user')
        ->andWhere('user.username = :username')
        ->setParameter('username', $username) 
        // On joint la room pour pouvoir renvoyer ses informations
        ->join('r.room', 'room')
        ->join('room.hotel', 'hotel')->addSelect('hotel') 
        ->addSelect('room');

    $reservations = $qb->getQuery()->getResult();

    // 2) Transform each entity into a simple array
    $data = array_map(function ($r) {
        return [
            'id' => $r->getId(),
            'room' => [
                'id' => $r->getRoom()->getId(),
                'roomNumber' => $r->getRoom()->getRoomNumber(),
                'hotel' => [
                    'id' => $r->getRoom()->getHotel()->getId(),
                    'name' => $r->getRoom()->getHotel()->getName(), // Remplacer par les champs du modèle Hotel
                ],
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

    #[Route('', name: 'create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $reservation = new Reservation();
        $reservation->setStatus('pending');
        $reservation->setTotalPrice($data['totalPrice']);
        $reservation->setCreatedAt(new \DateTimeImmutable($data['createdAt'] ?? 'now'));
        $reservation->setUpdatedAt(new \DateTimeImmutable($data['updatedAt'] ?? 'now'));
        
        // Set data from request
        if (isset($data['roomId'])) {
            $room = $entityManager->getRepository(Room::class)->find($data['roomId']);
            if (!$room) {
                return $this->json(['error' => 'Room not found'], 404);
            }
            $reservation->setRoom($room);
        }
        
        if (isset($data['userId'])) {
            $user = $entityManager->getRepository(User::class)->find($data['userId']);
            if (!$user) {
                return $this->json(['error' => 'User not found'], 404);
            }
            $reservation->setUser($user);
        }
        
        if (isset($data['checkIn'])) {
            $reservation->setCheckIn(new \DateTime($data['checkIn']));
        }
        
        if (isset($data['checkOut'])) {
            $reservation->setCheckOut(new \DateTime($data['checkOut']));
        }
        
        $entityManager->persist($reservation);
        $entityManager->flush();
        
        return $this->json([
            'id' => $reservation->getId(),
            'status' => $reservation->getStatus(),
            'message' => 'Reservation created successfully'
        ], 201);
    }
    
}
