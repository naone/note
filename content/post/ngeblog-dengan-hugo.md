---
title: "#1 Hugo : membuat blog menggunkan Hugo + github page"
date: 2019-07-01T20:03:00+07:00
draft: false
tags: ["Hugo","github","blog"]
image: /img/post/cute.webp
---

### Intro

dunia website terus berkembang, banyak banyak sekali frameeork dan tools-tools baru bermunculkan yang menawarkan banyak fitur serta kemudahan, salah satunya yaitu SSG ( static site generator ), sepeti namanya SSG digunakan unutk meng generate web static, nah hugo adalah salah satu dari sekian banyak static site generator.

### List Static Site Generator

<ul>
<li>Hexo</li>
<li>Gatsby</li>
<li>Pelican</li>
<li>Jekyll</li>
<li>Vuepress</li>
<li>Elevnty</li>
<li>Hugo</li>
<li>Etc.</li>
</ul>

menurut klaim hugo, hugo adalah framework tercepat unutuk membuat website. hugo sendiri dibuat oleh <a href="https://twitter.com/bepsays/">Bjorn Erik Pederson</a>(biasa disapa Bep) dengan menggunkan bahasa Golang ( Go ). jika kalian yang belum bisa bahasa go tapi ingin menngunakan hugo, tenang saya juga tidak bisa bahasa go kok 😄. yap solusiya tinggal sering-seringlah meminta wejangan dari mbah google. Di website resminya hugo sendiri dokumentasinya cukup lengkap, kalian juga bisa gabung ke grub diskusi hugo di discourse.goghugo.io. atau join ke grub telegram <a href="t.me/gohugoid">Hugo indonesia</a>.


<div class="no-border">
linuxisekai juga dibuat menggunakan hugo loh 😁
</div>

### Instalasi

##### Arch Linux

    $ sudo pacman -S hugo

##### Ubuntu

    $ sudo apt-get install hugo

##### Mengecek versi hugo

    $ hugo version

##### Output

    Hugo Static Site Generator v0.55.6/extended linux/amd64 BuildDate: unknown

##### Membuat situs baru

    $ hugo new site linuxisekai

linuxisekai adalah nama situs yang dibuat, hugo akan membuat folder bernama linuxisekai

##### menginstall tema hugo 
kinjungi https://themes.gohugo.io lalu pilih tema yang kalian sukai.Disini saya memilih tema introduction

    $ git clone https://github.com/victoriadotdev/hugo-theme-introduction

lalu pindah kan tema kalian ke folder /linuxisekai/themes

##### konfigurasi config.toml

silahkan buka file config.toml. agar tema kamu bisa digunkan maka harus menambahkan
theme = "namatema" pada config.toml.
kalian juga bisa mengambil konfigurasi config.toml dari tema yang kita download silahkan buka folder tema kalian lalu buka folder examplesite lalu copy semua file lalu pastekan di folder linuxisekai

##### Run Hugo

    cd linuxisekai/
    hugo server

sekarang coba buka browser lalu ketikan localhost:1313


<img src="/img/post/hugo-theme.webp" class="content-img">

selamat kita sudah berhasil membuat website menggunakan hugo, sekarang tinggal kita upload ke repo github kita