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
namespace WindPress\WindPress\Core;

use WIND_PRESS;
use WindPress\WindPress\Utils\Cache as UtilsCache;
use WindPress\WindPress\Utils\Common;
/**
 * @since 3.0.0
 */
class Cache
{
    /**
     * @var string
     */
    public const CSS_CACHE_FILE = 'tailwind.css';
    public static function get_providers(): array
    {
        /**
         * Register cache providers.
         * @param array $providers The list of cache providers. Each provider should have `id`, `name`, `description`, and `callback` keys.
         */
        return apply_filters('f!windpress/core/cache:compile.providers', []);
    }
    public static function get_cache_path(string $file_path = ''): string
    {
        return wp_upload_dir()['basedir'] . WIND_PRESS::CACHE_DIR . $file_path;
    }
    public static function get_cache_url(string $file_path = ''): string
    {
        return wp_upload_dir()['baseurl'] . WIND_PRESS::CACHE_DIR . $file_path;
    }
    public static function save_cache(string $payload)
    {
        try {
            Common::save_file($payload, self::get_cache_path(self::CSS_CACHE_FILE));
        } catch (\Throwable $throwable) {
            throw $throwable;
        }
        do_action('a!windpress/core/cache:save_cache.after', $payload);
        UtilsCache::flush_cache_plugin();
    }
    public static function fetch_contents($callback, $metadata = [])
    {
        // if class has an "__invoke" method.
        if (is_string($callback) && class_exists($callback) && method_exists($callback, '__invoke')) {
            $callback = new $callback();
        }
        try {
            $result = call_user_func($callback, $metadata);
            if (!is_array($result)) {
                throw new \Exception(__('The callback should return an array', 'windpress'));
            }
            $_metadata = array_key_exists('metadata', $result) ? $result['metadata'] : [];
            $_contents = array_key_exists('contents', $result) ? $result['contents'] : $result;
            $_contents = array_map(static function ($content) {
                if (is_array($content['content']) || is_object($content['content'])) {
                    $content['content'] = wp_json_encode($content['content']);
                    $content['type'] = 'json';
                }
                $content['content'] = is_string($content['content']) ? base64_encode($content['content']) : null;
                return $content;
            }, $_contents);
        } catch (\Throwable $throwable) {
            throw $throwable;
        }
        return ['metadata' => $_metadata, 'contents' => $_contents];
    }
}
