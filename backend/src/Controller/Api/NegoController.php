<?php

namespace App\Controller\Api;

use App\Repository\NegotiationOfferRepository;
use App\Entity\NegotiationOffer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class NegoController extends AbstractController
{
    #[Route('/api/negotiation-offers', name: 'api_negotiation_offers_list', methods: ['GET'])]
    public function list(NegotiationOfferRepository $repo): JsonResponse
    {
        $negotiationOffers = $repo->findAll();

        // transforme l’entité en tableau simple
        $data = array_map(fn($offer) => [
            'id' => $offer->getId(),
            'title' => $offer->getTitle(),
            'description' => $offer->getDescription(),
            'price' => $offer->getPrice(),
            'createdAt' => $offer->getCreatedAt()->format('Y-m-d H:i:s'),
        ], $negotiationOffers);

        return new JsonResponse($data);
    }

    #[Route('/api/negotiation-offers/{id}', name: 'api_negotiation_offer_show', methods: ['GET'])]
    public function show(NegotiationOffer $offer): JsonResponse
    {
        $data = [
            'id' => $offer->getId(),
            'reservation' => [
                'id' => $offer->getReservation()->getId(),
                'user' => [
                    'id' => $offer->getReservation()->getUser()->getId(),
                    'username' => $offer->getReservation()->getUser()->getUsername(),
                ],
                'room' => [
                    'id' => $offer->getReservation()->getRoom()->getId(),
                    'hotel' => [
                        'id' => $offer->getReservation()->getRoom()->getHotel()->getId(),
                        'name' => $offer->getReservation()->getRoom()->getHotel()->getName(),
                        'description' => $offer->getReservation()->getRoom()->getHotel()->getDescription(),
                        'address' => $offer->getReservation()->getRoom()->getHotel()->getAddress(),
                        'city' => $offer->getReservation()->getRoom()->getHotel()->getCity(),
                        'postalCode' => $offer->getReservation()->getRoom()->getHotel()->getPostalCode(),
                        'country' => $offer->getReservation()->getRoom()->getHotel()->getCountry(),
                        'phoneNumber' => $offer->getReservation()->getRoom()->getHotel()->getPhoneNumber(),
                        'email' => $offer->getReservation()->getRoom()->getHotel()->getEmail(),
                        'starRating' => $offer->getReservation()->getRoom()->getHotel()->getStarRating(),
                        'amenities' => $offer->getReservation()->getRoom()->getHotel()->getAmenities(),
                        'images' => $offer->getReservation()->getRoom()->getHotel()->getImages(),
                        'createdAt' => $offer->getReservation()->getRoom()->getHotel()->getCreatedAt()->format('Y-m-d H:i:s'),
                        'updatedAt' => $offer->getReservation()->getRoom()->getHotel()->getUpdatedAt()->format('Y-m-d H:i:s')
                    ],
                    'roomNumber' => $offer->getReservation()->getRoom()->getRoomNumber(),
                    'roomType' => $offer->getReservation()->getRoom()->getRoomType(),
                    'description' => $offer->getReservation()->getRoom()->getDescription(),
                    'pricePerNight' => $offer->getReservation()->getRoom()->getPricePerNight(),
                    'capacity' => $offer->getReservation()->getRoom()->getCapacity(),
                    'amenities' => $offer->getReservation()->getRoom()->getAmenities(),
                    'isAvailable' => $offer->getReservation()->getRoom()->isAvailable(),
                    'createdAt' => $offer->getReservation()->getRoom()->getCreatedAt()->format('Y-m-d H:i:s'),
                    'updatedAt' => $offer->getReservation()->getRoom()->getUpdatedAt()->format('Y-m-d H:i:s')
                ],
                'checkIn' => $offer->getReservation()->getCheckIn()->format('d M Y'),
                'checkOut' => $offer->getReservation()->getCheckOut()->format('d M Y'),
                'totalPrice' => $offer->getReservation()->getTotalPrice(),
                'status' => $offer->getReservation()->getStatus(),
                'createdAt' => $offer->getReservation()->getCreatedAt()->format('Y-m-d H:i:s'),
                'updatedAt' => $offer->getReservation()->getUpdatedAt()->format('Y-m-d H:i:s')
            ],
            'sender' => $offer->getSender(),
            'proposedPrice' => $offer->getProposedPrice(),
            'bonusAmenities' => $offer->getBonusAmenities(),
            'createdAt' => $offer->getCreatedAt()->format('Y-m-d H:i:s'),
        ];

        return new JsonResponse($data);
    }
}