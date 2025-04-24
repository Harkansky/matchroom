<?php
// src/Controller/Api/UserController.php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/api/users', name: 'api_users_list', methods: ['GET'])]
    public function list(UserRepository $repo): JsonResponse
    {
        $users = $repo->findAll();

        // transforme l’entité en tableau simple
        $data = array_map(fn($u) => [
            'id'         => $u->getId(),
            'username'   => $u->getUsername(),
            'email'      => $u->getEmail(),
            'firstName'  => $u->getFirstName(),
            'lastName'   => $u->getLastName(),
        ], $users);

        return new JsonResponse($data);
    }
}
