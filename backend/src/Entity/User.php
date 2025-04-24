<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: "app_user")]
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
