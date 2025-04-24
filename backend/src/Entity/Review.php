<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private User $authorUser;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $targetUser = null;

    #[ORM\ManyToOne(targetEntity: Hotel::class)]
    private ?Hotel $targetHotel = null;

    #[ORM\Column(type: "integer")]
    private int $rating;

    #[ORM\Column(type: "text")]
    private string $comment;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $createdAt;

    public function getId(): ?int { return $this->id; }
    public function getAuthorUser(): User { return $this->authorUser; }
    public function setAuthorUser(User $authorUser): self { $this->authorUser = $authorUser; return $this; }
    public function getTargetUser(): ?User { return $this->targetUser; }
    public function setTargetUser(?User $targetUser): self { $this->targetUser = $targetUser; return $this; }
    public function getTargetHotel(): ?Hotel { return $this->targetHotel; }
    public function setTargetHotel(?Hotel $targetHotel): self { $this->targetHotel = $targetHotel; return $this; }
    public function getRating(): int { return $this->rating; }
    public function setRating(int $rating): self { $this->rating = $rating; return $this; }
    public function getComment(): string { return $this->comment; }
    public function setComment(string $comment): self { $this->comment = $comment; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self { $this->createdAt = $createdAt; return $this; }
}
