<?php

namespace ContainerR2IbGgy;
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/LoaderInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Persistence/PersisterAwareInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/nelmio/alice/src/IsAServiceTrait.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Loader/PurgerLoader.php';

class PurgerLoaderGhostBac5ad0 extends \Fidry\AliceDataFixtures\Loader\PurgerLoader implements \Symfony\Component\VarExporter\LazyObjectInterface
{
    use \Symfony\Component\VarExporter\LazyGhostTrait;

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".parent::class."\0".'defaultPurgeMode' => [parent::class, 'defaultPurgeMode', null, 16],
        "\0".parent::class."\0".'loader' => [parent::class, 'loader', null, 16],
        "\0".parent::class."\0".'logger' => [parent::class, 'logger', null, 16],
        "\0".parent::class."\0".'purgerFactory' => [parent::class, 'purgerFactory', null, 16],
        'defaultPurgeMode' => [parent::class, 'defaultPurgeMode', null, 16],
        'loader' => [parent::class, 'loader', null, 16],
        'logger' => [parent::class, 'logger', null, 16],
        'purgerFactory' => [parent::class, 'purgerFactory', null, 16],
    ];
}

// Help opcache.preload discover always-needed symbols
class_exists(\Symfony\Component\VarExporter\Internal\Hydrator::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectRegistry::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectState::class);

if (!\class_exists('PurgerLoaderGhostBac5ad0', false)) {
    \class_alias(__NAMESPACE__.'\\PurgerLoaderGhostBac5ad0', 'PurgerLoaderGhostBac5ad0', false);
}
