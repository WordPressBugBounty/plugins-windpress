<?php

/*
 * This file is part of the WindPress package.
 *
 * (c) Joshua Gugun Siagian <suabahasa@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare (strict_types=1);
namespace WindPress\WindPress\Integration\Timber;

use WindPress\WindPress\Integration\IntegrationInterface;
use WindPress\WindPress\Utils\Common;
use WindPress\WindPress\Utils\Config;
/**
 * @author Joshua Gugun Siagian <suabahasa@gmail.com>
 */
class Main implements IntegrationInterface
{
    public function __construct()
    {
        add_filter('f!windpress/core/cache:compile.providers', fn(array $providers): array => $this->register_provider($providers));
    }
    public function get_name(): string
    {
        return 'timber';
    }
    public function is_enabled(): bool
    {
        return (bool) apply_filters('f!windpress/integration/timber:enabled', Config::get(sprintf('integration.%s.enabled', $this->get_name()), \true));
    }
    public function register_provider(array $providers): array
    {
        $providers[] = ['id' => $this->get_name(), 'name' => __('Timber', 'windpress'), 'description' => __('Timber integration', 'windpress'), 'callback' => \WindPress\WindPress\Integration\Timber\Compile::class, 'enabled' => $this->is_enabled(), 'type' => 'plugin', 'homepage' => 'https://upstatement.com/timber/?ref=windpress', 'is_installed_active' => static function () {
            $is = -1;
            $is += Common::is_plugin_installed('Timber') ? 1 : 0;
            $is += Common::is_plugin_active_by_name('Timber') ? 1 : 0;
            return $is;
        }];
        return $providers;
    }
}
