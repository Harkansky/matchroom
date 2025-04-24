<?php

namespace ContainerHGXMaeg;
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Persistence/PurgerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Persistence/PurgerFactoryInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/nelmio/alice/src/IsAServiceTrait.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Bridge/Doctrine/Purger/Purger.php';

class PurgerGhost241d8c9 extends \Fidry\AliceDataFixtures\Bridge\Doctrine\Purger\Purger implements \Symfony\Component\VarExporter\LazyObjectInterface
{
    use \Symfony\Component\VarExporter\LazyGhostTrait;

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".parent::class."\0".'manager' => [parent::class, 'manager', null, 16],
        "\0".parent::class."\0".'purgeMode' => [parent::class, 'purgeMode', null, 16],
        "\0".parent::class."\0".'purger' => [parent::class, 'purger', null, 16],
        'manager' => [parent::class, 'manager', null, 16],
        'purgeMode' => [parent::class, 'purgeMode', null, 16],
        'purger' => [parent::class, 'purger', null, 16],
    ];
}

// Help opcache.preload discover always-needed symbols
class_exists(\Symfony\Component\VarExporter\Internal\Hydrator::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectRegistry::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectState::class);

if (!\class_exists('PurgerGhost241d8c9', false)) {
    \class_alias(__NAMESPACE__.'\\PurgerGhost241d8c9', 'PurgerGhost241d8c9', false);
}
