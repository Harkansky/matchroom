<?php

namespace ContainerHGXMaeg;
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/LoaderInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Persistence/PersisterAwareInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/nelmio/alice/src/IsAServiceTrait.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Loader/PersisterLoader.php';

class PersisterLoaderGhostA96b06a extends \Fidry\AliceDataFixtures\Loader\PersisterLoader implements \Symfony\Component\VarExporter\LazyObjectInterface
{
    use \Symfony\Component\VarExporter\LazyGhostTrait;

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".parent::class."\0".'loader' => [parent::class, 'loader', null, 16],
        "\0".parent::class."\0".'logger' => [parent::class, 'logger', null, 16],
        "\0".parent::class."\0".'persister' => [parent::class, 'persister', null, 16],
        "\0".parent::class."\0".'processors' => [parent::class, 'processors', null, 16],
        'loader' => [parent::class, 'loader', null, 16],
        'logger' => [parent::class, 'logger', null, 16],
        'persister' => [parent::class, 'persister', null, 16],
        'processors' => [parent::class, 'processors', null, 16],
    ];
}

// Help opcache.preload discover always-needed symbols
class_exists(\Symfony\Component\VarExporter\Internal\Hydrator::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectRegistry::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectState::class);

if (!\class_exists('PersisterLoaderGhostA96b06a', false)) {
    \class_alias(__NAMESPACE__.'\\PersisterLoaderGhostA96b06a', 'PersisterLoaderGhostA96b06a', false);
}
