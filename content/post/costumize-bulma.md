---
title: "Costumize Bulma denagn sass-cli"
date: 2019-08-03T21:38:01+07:00
draft: false
tags: ["bulma","sass"]
image: /img/post/sagiri.png
description: "memodifikasi tampilan bulma menggunakan sass-cli"
---
buat folder tempat kita mengcostumize bulma

    $ mkdir mybulma

download bulma terlebih dahulu di https://bulma.io, unzip lalu letakan folder bulmanya ke <code> mybulma</code>.

#### # buat folder css dan sass

    $ cd mybulma
    ~/mybulma $ mkdir sass css

css akan kita gunakan unutk menaruh hasil compile dari sass, sedangkan sass tempat kita mengcostumize elemen/variable dari bulma.

#### # buat file scss
buat sass file dengan nama <code>mystyle.scss</code> di dalam folder <code>sass</code>

mystyle.scss

    @charset "utf-8";
    @import "../bulma-0.7.5/bulma.sass";

pastikan path yang menuju ke file <code>bulma.sass</code> sudah sesuai

#### # membuat halaman html

    ~/mybulma $ touch mypage.html

mypage.html

    <!doctype html>
    <html lang="en">
    <head>
    <title>my custom bulma website</title>
    <link rel="stylesheet" href="css/mybulma.css">
    </head>
    <body class=>
    <h1 class="title">
    bulma
    </h1>
    <p class="subtitle">
    modern css framework
    </p>
    <div class="field">
    <div class="control">
    <input class="input" type="text" placeholder="input">
    </div>
    </div>

    <div class="field">
    <p class="control">
    <span class="select">
    <select>
    <option>select dropdown</option>
    </select>
    </span>
    </p>
    </div>

    <div class="buttons">
    <a class="is-primary button">Primary</a>
    <a class="button is-link">Link</a>
    </div>
    </body>
    </html>

sekarang buka file diatas menggunakan browser, seharusnya tampilanya masih polos, itu dikarenakan <code><link rel="stylesheet" href="css/mybulma.css"></code> belum di dibuat.

#### # membuat css file
sekarang kita akan memanggil bulma yang ada di folder <code>bulma-0.7.5/css/bulma.css</code> ke <code>css/mybulma.css</code>

    ~/mybulma $ sass --sourcemap=none sass/mystyle.sass:css/mystyle.css

sekarang coba refresh <code>mypage.html</code>

<center>
<img src="/img/post/costumize-bulma.png">
</center>


yapp itu adalah tampilan default dari bulma sekarang kita modifikasi tampilanya

buat folder <code>mystyle.scss</code> pada folder <code>sass</code>.

mystyle.scss

    $ungu:#81358A;
    $primary:$ungu;

    @import "../bulma-0.7.5/sass/utilities/_all.sass";
    @import "../bulma-0.7.5/sass/base/_all.sass";
    @import "../bulma-0.7.5/sass/components/_all.sass";
    @import "../bulma-0.7.5/sass/layout/_all.sass";
    @import "../bulma-0.7.5/sass/form/_all.sass";
    @import "../bulma-0.7.5/sass/grid/_all.sass";
    @import "../bulma-0.7.5/sass/elements/_all.sass";

jalankan perintah perintah berikut ini :

    ~/mybulma $ sass --sourcemap=none sass/mystyle.sass:css/mystyle.css

sekarang refresh <code>mypage.html</code>, seharusnya tombol primary akan berwarna ungu karena kita tadi sudah merubahnya <code>$primary:$ungu;</code>.

itu baru 1 variabe sekarang kita akan membuat beberapa variabel, untuk referensi variabel pada bulma kita bisa melihatnya disini <span class="break">https://bulma.io/documentationcostumize/variabel.</span>


    $grey-lighter: #ffffff;
    $grey-light:   #BFBDD6;
    $grey:         #C0BDC0;
    $grey-alt:     #395369;
    $grey-dark:    #011627;
    $grey-darker:  #01121F;

    $orange       : #B87736;
    $yellow       : #AFB736;
    $green        : #6DB736;
    $cyan         : #36B1B7;
    $blue         : #2D85C3;
    $purple       : #5A3E8D;
    $red          : #B73652;
    $black-bis: rgb(41, 43, 49);

    $primary: $purple !default;
    $warning: $orange;
    $info: $blue;
    $danger: $red;
    $success: $green;
    $yellow-invert: #fff;
    $light: $grey-lighter;
    $dark : darken($grey-darker, 3);

    $radius-small: 3px;
    $radius: .4em;
    $radius-large: 8px;

    $body-size: 15px;
    $size-7: .85em;

    $title-weight: 500;
    $subtitle-weight: 400;
    $subtitle-color: $grey-dark;

    $border-width: 2px;
    $border: $grey-dark;

    $body-background-color: $grey-darker;
    $background: $grey-darker;
    $footer-background-color: $background;

    $title-color: $grey;
    $subtitle-color: $grey-alt;
    $subtitle-strong-color: $grey-light;

    $text       : $grey;
    $text-light : lighten($text, 10);
    $text-strong: darken($text, 5);

    $box-shadow: none;
    $box-background-color: $grey-dark;

    $card-shadow: none;
    $card-background-color: $grey-darker;
    $card-header-box-shadow: none;
    $card-header-background-color: rgba($black-bis, 0.2);
    $card-footer-background-color: rgba($black-bis, 0.2);

    $link             : $purple;
    $link-hover       : $grey-light;
    $link-hover-border: $grey-light;
    $link-focus       : darken($grey-light, 10);
    $link-focus-border: $grey-light;
    $link-active      : darken($grey-light, 10);

    $button-color: $grey;
    $button-background-color: $background;
    $button-border-color: $grey;

    $input-color: $grey;
    $input-icon-color: darken($grey-light, 10);
    $input-background-color: $grey-lighter;
    $input-border-color: darken($grey-light, 10);
    $input-hover-color: $grey-light;
    $input-disabled-background-color: $grey-dark;
    $input-disabled-border-color: $grey-dark;

    $table-color: $text;
    $table-head-color: $grey-lighter;
    $table-background-color: $grey-dark;
    $table-cell-border: 1px solid $grey;

    $table-row-hover-background-color: $grey-darker;
    $table-striped-row-even-background-color: $grey-darker;
    $table-striped-row-even-hover-background-color: lighten($grey-darker, 4);

    $pagination-border-color: $border;

    $navbar-background-color: $grey-dark;
    $navbar-item-color: $grey;
    $navbar-item-hover-color: $grey;
    $navbar-item-active-color: $grey-lighter;
    $navbar-item-active-background-color: transparent;
    $navbar-item-hover-background-color: transparent;
    $navbar-dropdown-border-top: 1px solid $grey-darker;
    $navbar-divider-background-color: $grey-darker;
    $navbar-dropdown-arrow: $grey;
    $navbar-dropdown-background-color: $grey-dark;
    $navbar-dropdown-item-hover-color: $grey-lighter;
    $navbar-dropdown-item-hover-background-color: lighten($grey-darker, 4);
    $navbar-dropdown-item-active-background-color: lighten($grey-darker, 4);
    $navbar-dropdown-item-active-color: $grey-lighter;

    $dropdown-content-background-color: $background;
    $dropdown-item-color: $text;
    $dropdown-item-hover-color: $link-hover;

    $bulmaswatch-import-font: true !default;

    @import "../bulma-0.7.5/sass/utilities/_all.sass";
    @import "../bulma-0.7.5/sass/base/_all.sass";
    @import "../bulma-0.7.5/sass/components/_all.sass";
    @import "../bulma-0.7.5/sass/layout/_all.sass";
    @import "../bulma-0.7.5/sass/form/_all.sass";
    @import "../bulma-0.7.5/sass/grid/_all.sass";
    @import "../bulma-0.7.5/sass/elements/_all.sass";


sekarang jalankan perintah ini lagi

     ~/mybulma $ sass --sourcemap=none sass/mystyle.sass:css/mystyle.css

refresh <code>mypage.html</code>

<center>
<div class="card">
<img src="/img/post/costumize-bulma-2.png">
</div>
</center>