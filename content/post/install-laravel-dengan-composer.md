---
title: "Install Laravel Dengan Laravel Installer"
date: 2019-07-25T09:39:01+07:00
draft: false
image: "img/post/php.png"
description: "cara install fraework laravel dengan laravel installer"
tags: ["php","laravel"]
---

install composer dan laravel installer

    sudo pacman -S composer
    composer global requiere laravel/installer
    
perintah diatas akan membuat folder <code>composer</code> directory <code>.config</code>.


export laravel ke zsh/bash agar bisa dieksekusi

    export PATH=$PATH:$HOME/.config/composer/vendor/bin

membuat project laravel

    laravel new project_laravel

