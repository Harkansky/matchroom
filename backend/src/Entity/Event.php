<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\Column(type: "string", length: 100)]
    private string $eventType;

    #[ORM\Column(type: "string", length: 100)]
    private string $relatedEntity;

    #[ORM\Column(type: "integer")]
    private int $relatedId;

    #[ORM\Column(type: "json")]
    private array $payload = [];

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $createdAt;

    public function getId(): ?int { return $this->id; }
    public function getEventType(): string { return $this->eventType; }
    public function setEventType(string $eventType): self { $this->eventType = $eventType; return $this; }
    public function getRelatedEntity(): string { return $this->relatedEntity; }
    public function setRelatedEntity(string $relatedEntity): self { $this->relatedEntity = $relatedEntity; return $this; }
    public function getRelatedId(): int { return $this->relatedId; }
    public function setRelatedId(int $relatedId): self { $this->relatedId = $relatedId; return $this; }
    public function getPayload(): array { return $this->payload; }
    public function setPayload(array $payload): self { $this->payload = $payload; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self { $this->createdAt = $createdAt; return $this; }
}
