<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfc0a371a73906f63c4303d06f616b2d1
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfc0a371a73906f63c4303d06f616b2d1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfc0a371a73906f63c4303d06f616b2d1::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
