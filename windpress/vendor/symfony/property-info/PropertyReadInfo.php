<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace WindPressDeps\Symfony\Component\PropertyInfo;

/**
 * The property read info tells how a property can be read.
 *
 * @author Joel Wurtz <jwurtz@jolicode.com>
 *
 * @internal
 */
final class PropertyReadInfo
{
    public const TYPE_METHOD = 'method';
    public const TYPE_PROPERTY = 'property';
    public const VISIBILITY_PUBLIC = 'public';
    public const VISIBILITY_PROTECTED = 'protected';
    public const VISIBILITY_PRIVATE = 'private';
    private $type;
    private $name;
    private $visibility;
    private $static;
    private $byRef;
    public function __construct(string $type, string $name, string $visibility, bool $static, bool $byRef)
    {
        $this->type = $type;
        $this->name = $name;
        $this->visibility = $visibility;
        $this->static = $static;
        $this->byRef = $byRef;
    }
    /**
     * Get type of access.
     */
    public function getType(): string
    {
        return $this->type;
    }
    /**
     * Get name of the access, which can be a method name or a property name, depending on the type.
     */
    public function getName(): string
    {
        return $this->name;
    }
    public function getVisibility(): string
    {
        return $this->visibility;
    }
    public function isStatic(): bool
    {
        return $this->static;
    }
    /**
     * Whether this accessor can be accessed by reference.
     */
    public function canBeReference(): bool
    {
        return $this->byRef;
    }
}
