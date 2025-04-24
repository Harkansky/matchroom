<?php

namespace App\Entity;

use App\Repository\RoomRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoomRepository::class)]
class Room
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity:Hotel::class)]
    #[ORM\JoinColumn(nullable:false)]
    private Hotel $hotel;

    #[ORM\Column(type: "string", length: 50)]
    private string $roomNumber;

    #[ORM\Column(type: "string", length: 50)]
    private string $roomType;

    #[ORM\Column(type: "text")]
    private string $description;

    #[ORM\Column(type: "decimal", precision: 10, scale: 2)]
    private string $pricePerNight;

    #[ORM\Column(type: "integer")]
    private int $capacity;

    #[ORM\Column(type: "json")]
    private array $amenities = [];

    #[ORM\Column(type: "boolean")]
    private bool $isAvailable = true;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $updatedAt;

    public function getId(): ?int { return $this->id; }
    public function getHotel(): Hotel { return $this->hotel; }
    public function setHotel(Hotel $hotel): self { $this->hotel = $hotel; return $this; }
    public function getRoomNumber(): string { return $this->roomNumber; }
    public function setRoomNumber(string $roomNumber): self { $this->roomNumber = $roomNumber; return $this; }
    public function getRoomType(): string { return $this->roomType; }
    public function setRoomType(string $roomType): self { $this->roomType = $roomType; return $this; }
    public function getDescription(): string { return $this->description; }
    public function setDescription(string $description): self { $this->description = $description; return $this; }
    public function getPricePerNight(): string { return $this->pricePerNight; }
    public function setPricePerNight(string $pricePerNight): self { $this->pricePerNight = $pricePerNight; return $this; }
    public function getCapacity(): int { return $this->capacity; }
    public function setCapacity(int $capacity): self { $this->capacity = $capacity; return $this; }
    public function getAmenities(): array { return $this->amenities; }
    public function setAmenities(array $amenities): self { $this->amenities = $amenities; return $this; }
    public function isAvailable(): bool { return $this->isAvailable; }
    public function setIsAvailable(bool $isAvailable): self { $this->isAvailable = $isAvailable; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): \DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self { $this->updatedAt = $updatedAt; return $this; }
}
