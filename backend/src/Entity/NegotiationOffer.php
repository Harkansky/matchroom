<?php

namespace App\Entity;

use App\Repository\NegotiationOfferRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NegotiationOfferRepository::class)]
class NegotiationOffer
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Reservation::class)]
    #[ORM\JoinColumn(nullable: false)]
    private Reservation $reservation;

    #[ORM\Column(type: "string", length: 10)]
    private string $sender;

    #[ORM\Column(type: "decimal", precision: 10, scale: 2)]
    private string $proposedPrice;

    #[ORM\Column(type: "json")]
    private array $bonusAmenities = [];

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $createdAt;

    public function getId(): ?int { return $this->id; }
    public function getReservation(): Reservation { return $this->reservation; }
    public function setReservation(Reservation $reservation): self { $this->reservation = $reservation; return $this; }
    public function getSender(): string { return $this->sender; }
    public function setSender(string $sender): self { $this->sender = $sender; return $this; }
    public function getProposedPrice(): string { return $this->proposedPrice; }
    public function setProposedPrice(string $proposedPrice): self { $this->proposedPrice = $proposedPrice; return $this; }
    public function getBonusAmenities(): array { return $this->bonusAmenities; }
    public function setBonusAmenities(array $bonusAmenities): self { $this->bonusAmenities = $bonusAmenities; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self { $this->createdAt = $createdAt; return $this; }
}
