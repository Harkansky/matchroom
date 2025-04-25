<?php

namespace App\Repository;

use App\Entity\Hotel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class HotelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Hotel::class);
    }

    /**
     * @param string[] $keywords
    */
    public function findByKeywords(array $keywords): array
    {
        $qb = $this->createQueryBuilder('h');
        $i = 0;
        foreach ($keywords as $term) {
            $param = "%{$term}%";
            $qb->andWhere(
                $qb->expr()->orX(
                    $qb->expr()->like('h.name', ":p{$i}"),
                    $qb->expr()->like('h.city', ":p{$i}"),
                    $qb->expr()->like('h.description', ":p{$i}"),
                    $qb->expr()->like('h.amenities', ":p{$i}")
                // si starRating numérique, on peut caster :
                // $qb->expr()->like("CAST(h.starRating AS string)", ":p{$i}")
                )
            )
                ->setParameter("p{$i}", $param);
            $i++;
        }
        return $qb
            ->orderBy('h.starRating','DESC')
            ->setMaxResults(50)
            ->getQuery()
            ->getResult()
            ;
    }
}
