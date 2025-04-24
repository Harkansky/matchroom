#!/usr/bin/env bash
set -euo pipefail

SRC=src/Entity
REPO=src/Repository
mkdir -p $SRC $REPO

###########################################
# 1) USER
###########################################
cat > $SRC/User.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\Column(type: "string", length: 180, unique: true)]
    private string $username;

    #[ORM\Column(type: "string", length: 180, unique: true)]
    private string $email;

    #[ORM\Column(type: "string")]
    private string $password;

    #[ORM\Column(type: "string", length: 100)]
    private string $firstName;

    #[ORM\Column(type: "string", length: 100)]
    private string $lastName;

    #[ORM\Column(type: "date")]
    private \DateTimeInterface $dateOfBirth;

    #[ORM\Column(type: "string", length: 20)]
    private string $phoneNumber;

    #[ORM\Column(type: "integer")]
    private int $reputationPoints = 0;

    #[ORM\Column(type: "json", nullable: true)]
    private array $badges = [];

    #[ORM\Column(type: "string", length: 255, nullable: true)]
    private ?string $profileImage = null;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $updatedAt;

    public function getId(): ?int { return $this->id; }
    public function getUsername(): string { return $this->username; }
    public function setUsername(string $username): self { $this->username = $username; return $this; }
    public function getEmail(): string { return $this->email; }
    public function setEmail(string $email): self { $this->email = $email; return $this; }
    public function getPassword(): string { return $this->password; }
    public function setPassword(string $password): self { $this->password = $password; return $this; }
    public function getFirstName(): string { return $this->firstName; }
    public function setFirstName(string $firstName): self { $this->firstName = $firstName; return $this; }
    public function getLastName(): string { return $this->lastName; }
    public function setLastName(string $lastName): self { $this->lastName = $lastName; return $this; }
    public function getDateOfBirth(): \DateTimeInterface { return $this->dateOfBirth; }
    public function setDateOfBirth(\DateTimeInterface $dateOfBirth): self { $this->dateOfBirth = $dateOfBirth; return $this; }
    public function getPhoneNumber(): string { return $this->phoneNumber; }
    public function setPhoneNumber(string $phoneNumber): self { $this->phoneNumber = $phoneNumber; return $this; }
    public function getReputationPoints(): int { return $this->reputationPoints; }
    public function setReputationPoints(int $reputationPoints): self { $this->reputationPoints = $reputationPoints; return $this; }
    public function getBadges(): array { return $this->badges; }
    public function setBadges(array $badges): self { $this->badges = $badges; return $this; }
    public function getProfileImage(): ?string { return $this->profileImage; }
    public function setProfileImage(?string $profileImage): self { $this->profileImage = $profileImage; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): \DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self { $this->updatedAt = $updatedAt; return $this; }
}
EOF

cat > $REPO/UserRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }
}
EOF

###########################################
# 2) HOTEL
###########################################
cat > $SRC/Hotel.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\HotelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HotelRepository::class)]
class Hotel
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\Column(type: "string", length: 255)]
    private string $name;

    #[ORM\Column(type: "text")]
    private string $description;

    #[ORM\Column(type: "string", length: 255)]
    private string $address;

    #[ORM\Column(type: "string", length: 100)]
    private string $city;

    #[ORM\Column(type: "string", length: 20)]
    private string $postalCode;

    #[ORM\Column(type: "string", length: 100)]
    private string $country;

    #[ORM\Column(type: "string", length: 30)]
    private string $phoneNumber;

    #[ORM\Column(type: "string", length: 180)]
    private string $email;

    #[ORM\Column(type: "integer")]
    private int $starRating;

    #[ORM\Column(type: "json")]
    private array $amenities = [];

    #[ORM\Column(type: "json", nullable: true)]
    private array $images = [];

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $updatedAt;

    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function setName(string $name): self { $this->name = $name; return $this; }
    public function getDescription(): string { return $this->description; }
    public function setDescription(string $description): self { $this->description = $description; return $this; }
    public function getAddress(): string { return $this->address; }
    public function setAddress(string $address): self { $this->address = $address; return $this; }
    public function getCity(): string { return $this->city; }
    public function setCity(string $city): self { $this->city = $city; return $this; }
    public function getPostalCode(): string { return $this->postalCode; }
    public function setPostalCode(string $postalCode): self { $this->postalCode = $postalCode; return $this; }
    public function getCountry(): string { return $this->country; }
    public function setCountry(string $country): self { $this->country = $country; return $this; }
    public function getPhoneNumber(): string { return $this->phoneNumber; }
    public function setPhoneNumber(string $phoneNumber): self { $this->phoneNumber = $phoneNumber; return $this; }
    public function getEmail(): string { return $this->email; }
    public function setEmail(string $email): self { $this->email = $email; return $this; }
    public function getStarRating(): int { return $this->starRating; }
    public function setStarRating(int $starRating): self { $this->starRating = $starRating; return $this; }
    public function getAmenities(): array { return $this->amenities; }
    public function setAmenities(array $amenities): self { $this->amenities = $amenities; return $this; }
    public function getImages(): array { return $this->images; }
    public function setImages(array $images): self { $this->images = $images; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self { $this->createdAt = $createdAt; return $this; }
    public function getUpdatedAt(): \DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self { $this->updatedAt = $updatedAt; return $this; }
}
EOF

cat > $REPO/HotelRepository.php << 'EOF'
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
}
EOF

###########################################
# 3) ROOM
###########################################
cat > $SRC/Room.php << 'EOF'
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
EOF

cat > $REPO/RoomRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\Room;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class RoomRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Room::class);
    }
}
EOF

###########################################
# 4) RESERVATION
###########################################
cat > $SRC/Reservation.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int \$id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private User \$user;

    #[ORM\ManyToOne(targetEntity: Room::class)]
    #[ORM\JoinColumn(nullable: false)]
    private Room \$room;

    #[ORM\Column(type: "date")]
    private \DateTimeInterface \$checkIn;

    #[ORM\Column(type: "date")]
    private \DateTimeInterface \$checkOut;

    #[ORM\Column(type: "decimal", precision: 10, scale: 2)]
    private string \$totalPrice;

    #[ORM\Column(type: "string", length: 30)]
    private string \$status;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable \$createdAt;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable \$updatedAt;

    public function getId(): ?int { return \$this->id; }
    public function getUser(): User { return \$this->user; }
    public function setUser(User \$user): self { \$this->user = \$user; return \$this; }
    public function getRoom(): Room { return \$this->room; }
    public function setRoom(Room \$room): self { \$this->room = \$room; return \$this; }
    public function getCheckIn(): \DateTimeInterface { return \$this->checkIn; }
    public function setCheckIn(\DateTimeInterface \$checkIn): self { \$this->checkIn = \$checkIn; return \$this; }
    public function getCheckOut(): \DateTimeInterface { return \$this->checkOut; }
    public function setCheckOut(\DateTimeInterface \$checkOut): self { \$this->checkOut = \$checkOut; return \$this; }
    public function getTotalPrice(): string { return \$this->totalPrice; }
    public function setTotalPrice(string \$totalPrice): self { \$this->totalPrice = \$totalPrice; return \$this; }
    public function getStatus(): string { return \$this->status; }
    public function setStatus(string \$status): self { \$this->status = \$status; return \$this; }
    public function getCreatedAt(): \DateTimeImmutable { return \$this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable \$createdAt): self { \$this->createdAt = \$createdAt; return \$this; }
    public function getUpdatedAt(): \DateTimeImmutable { return \$this->updatedAt; }
    public function setUpdatedAt(\DateTimeImmutable \$updatedAt): self { \$this->updatedAt = \$updatedAt; return \$this; }
}
EOF

cat > $REPO/ReservationRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\Reservation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ReservationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry \$registry)
    {
        parent::__construct(\$registry, Reservation::class);
    }
}
EOF

###########################################
# 5) NEGOTIATIONOFFER
###########################################
cat > $SRC/NegotiationOffer.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\NegotiationOfferRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NegotiationOfferRepository::class)]
class NegotiationOffer
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int \$id = null;

    #[ORM\ManyToOne(targetEntity: Reservation::class)]
    #[ORM\JoinColumn(nullable: false)]
    private Reservation \$reservation;

    #[ORM\Column(type: "string", length: 10)]
    private string \$sender;

    #[ORM\Column(type: "decimal", precision: 10, scale: 2)]
    private string \$proposedPrice;

    #[ORM\Column(type: "json")]
    private array \$bonusAmenities = [];

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable \$createdAt;

    public function getId(): ?int { return \$this->id; }
    public function getReservation(): Reservation { return \$this->reservation; }
    public function setReservation(Reservation \$reservation): self { \$this->reservation = \$reservation; return \$this; }
    public function getSender(): string { return \$this->sender; }
    public function setSender(string \$sender): self { \$this->sender = \$sender; return \$this; }
    public function getProposedPrice(): string { return \$this->proposedPrice; }
    public function setProposedPrice(string \$proposedPrice): self { \$this->proposedPrice = \$proposedPrice; return \$this; }
    public function getBonusAmenities(): array { return \$this->bonusAmenities; }
    public function setBonusAmenities(array \$bonusAmenities): self { \$this->bonusAmenities = \$bonusAmenities; return \$this; }
    public function getCreatedAt(): \DateTimeImmutable { return \$this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable \$createdAt): self { \$this->createdAt = \$createdAt; return \$this; }
}
EOF

cat > $REPO/NegotiationOfferRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\NegotiationOffer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class NegotiationOfferRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry \$registry)
    {
        parent::__construct(\$registry, NegotiationOffer::class);
    }
}
EOF

###########################################
# 6) REVIEW
###########################################
cat > $SRC/Review.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int \$id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private User \$authorUser;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User \$targetUser = null;

    #[ORM\ManyToOne(targetEntity: Hotel::class)]
    private ?Hotel \$targetHotel = null;

    #[ORM\Column(type: "integer")]
    private int \$rating;

    #[ORM\Column(type: "text")]
    private string \$comment;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable \$createdAt;

    public function getId(): ?int { return \$this->id; }
    public function getAuthorUser(): User { return \$this->authorUser; }
    public function setAuthorUser(User \$authorUser): self { \$this->authorUser = \$authorUser; return \$this; }
    public function getTargetUser(): ?User { return \$this->targetUser; }
    public function setTargetUser(?User \$targetUser): self { \$this->targetUser = \$targetUser; return \$this; }
    public function getTargetHotel(): ?Hotel { return \$this->targetHotel; }
    public function setTargetHotel(?Hotel \$targetHotel): self { \$this->targetHotel = \$targetHotel; return \$this; }
    public function getRating(): int { return \$this->rating; }
    public function setRating(int \$rating): self { \$this->rating = \$rating; return \$this; }
    public function getComment(): string { return \$this->comment; }
    public function setComment(string \$comment): self { \$this->comment = \$comment; return \$this; }
    public function getCreatedAt(): \DateTimeImmutable { return \$this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable \$createdAt): self { \$this->createdAt = \$createdAt; return \$this; }
}
EOF

cat > $REPO/ReviewRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\Review;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ReviewRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry \$registry)
    {
        parent::__construct(\$registry, Review::class);
    }
}
EOF

###########################################
# 7) BADGE
###########################################
cat > $SRC/Badge.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\BadgeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BadgeRepository::class)]
class Badge
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int \$id = null;

    #[ORM\Column(type: "string", length: 50)]
    private string \$name;

    #[ORM\Column(type: "text")]
    private string \$description;

    #[ORM\Column(type: "string", length: 100)]
    private string \$icon;

    public function getId(): ?int { return \$this->id; }
    public function getName(): string { return \$this->name; }
    public function setName(string \$name): self { \$this->name = \$name; return \$this; }
    public function getDescription(): string { return \$this->description; }
    public function setDescription(string \$description): self { \$this->description = \$description; return \$this; }
    public function getIcon(): string { return \$this->icon; }
    public function setIcon(string \$icon): self { \$this->icon = \$icon; return \$this; }
}
EOF

cat > $REPO/BadgeRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\Badge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class BadgeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry \$registry)
    {
        parent::__construct(\$registry, Badge::class);
    }
}
EOF

###########################################
# 8) EVENT
###########################################
cat > $SRC/Event.php << 'EOF'
<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int \$id = null;

    #[ORM\Column(type: "string", length: 100)]
    private string \$eventType;

    #[ORM\Column(type: "string", length: 100)]
    private string \$relatedEntity;

    #[ORM\Column(type: "integer")]
    private int \$relatedId;

    #[ORM\Column(type: "json")]
    private array \$payload = [];

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable \$createdAt;

    public function getId(): ?int { return \$this->id; }
    public function getEventType(): string { return \$this->eventType; }
    public function setEventType(string \$eventType): self { \$this->eventType = \$eventType; return \$this; }
    public function getRelatedEntity(): string { return \$this->relatedEntity; }
    public function setRelatedEntity(string \$relatedEntity): self { \$this->relatedEntity = \$relatedEntity; return \$this; }
    public function getRelatedId(): int { return \$this->relatedId; }
    public function setRelatedId(int \$relatedId): self { \$this->relatedId = \$relatedId; return \$this; }
    public function getPayload(): array { return \$this->payload; }
    public function setPayload(array \$payload): self { \$this->payload = \$payload; return \$this; }
    public function getCreatedAt(): \DateTimeImmutable { return \$this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable \$createdAt): self { \$this->createdAt = \$createdAt; return \$this; }
}
EOF

cat > $REPO/EventRepository.php << 'EOF'
<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry \$registry)
    {
        parent::__construct(\$registry, Event::class);
    }
}
EOF

echo "✅ Toutes les entités et repositories ont été générés dans src/Entity et src/Repository."
