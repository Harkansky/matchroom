<?php

namespace ContainerR2IbGgy;
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Persistence/PersisterInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/nelmio/alice/src/IsAServiceTrait.php';
include_once \dirname(__DIR__, 4).'/vendor/theofidry/alice-data-fixtures/src/Bridge/Doctrine/Persister/ObjectManagerPersister.php';

class ObjectManagerPersisterGhost806b1fb extends \Fidry\AliceDataFixtures\Bridge\Doctrine\Persister\ObjectManagerPersister implements \Symfony\Component\VarExporter\LazyObjectInterface
{
    use \Symfony\Component\VarExporter\LazyGhostTrait;

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".parent::class."\0".'metadataToRestore' => [parent::class, 'metadataToRestore', null, 16],
        "\0".parent::class."\0".'objectChecked' => [parent::class, 'objectChecked', null, 16],
        "\0".parent::class."\0".'objectManager' => [parent::class, 'objectManager', null, 16],
        "\0".parent::class."\0".'persistableClasses' => [parent::class, 'persistableClasses', null, 16],
        "\0".parent::class."\0".'unitOfWorkPersistersReflection' => [parent::class, 'unitOfWorkPersistersReflection', null, 16],
        'metadataToRestore' => [parent::class, 'metadataToRestore', null, 16],
        'objectChecked' => [parent::class, 'objectChecked', null, 16],
        'objectManager' => [parent::class, 'objectManager', null, 16],
        'persistableClasses' => [parent::class, 'persistableClasses', null, 16],
        'unitOfWorkPersistersReflection' => [parent::class, 'unitOfWorkPersistersReflection', null, 16],
    ];
}

// Help opcache.preload discover always-needed symbols
class_exists(\Symfony\Component\VarExporter\Internal\Hydrator::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectRegistry::class);
class_exists(\Symfony\Component\VarExporter\Internal\LazyObjectState::class);

if (!\class_exists('ObjectManagerPersisterGhost806b1fb', false)) {
    \class_alias(__NAMESPACE__.'\\ObjectManagerPersisterGhost806b1fb', 'ObjectManagerPersisterGhost806b1fb', false);
}
