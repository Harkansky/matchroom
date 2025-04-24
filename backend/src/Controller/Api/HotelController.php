<?php
// src/Controller/Api/HotelController.php
namespace App\Controller\Api;

use App\Repository\HotelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HotelController extends AbstractController
{
    #[Route('/api/hotels', name: 'api_hotels', methods: ['GET'])]
    public function list(HotelRepository $repo): JsonResponse
    {
        $hotels = $repo->findAll();

        $data = array_map(fn($h) => [
            'id'           => $h->getId(),
            'name'         => $h->getName(),
            'city'         => $h->getCity(),
            'starRating'   => $h->getStarRating(),
            'amenities'    => $h->getAmenities(),
        ], $hotels);

        return $this->json($data);
    }
}
