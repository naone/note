---
title: "#1 Hugo : membuat blog menggunkan Hugo + github page"
date: 2019-07-01T20:03:00+07:00
draft: false
tags: ["Hugo","github","blog"]
image: /img/cute.webp
---
<h3>Pendahuluan</h3>
<p>
dunia website terus berkembang, banyak banyak sekali frameeork dan tools-tools baru bermunculkan yang menawarkan banyak fitur serta kemudahan, salah satunya yaitu SSG ( static site generator ), sepeti namanya SSG digunakan unutk meng generate web static, nah hugo adalah salah satu dari sekian banyak static site generator.
</p>
<h3>List Static Site Generator</h3>
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
</p>
<br/>
<div class="column has-background-dark has-text-danger">
linuxisekai juga dibuat menggunakan hugo loh 😁
</div>
<br/>
<h3>
Instalasi
</h3>
<strong>Arch Linux</strong>
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
$ sudo pacman -S hugo
</div>
</div>
<strong>Ubuntu</strong>
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
$ sudo apt-get install hugo
</div>
</div>
<strong>Mengecek versi hugo</strong>
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
$ hugo version
</div>
</div>
<strong>Output</strong>
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
Hugo Static Site Generator v0.55.6/extended linux/amd64 BuildDate: unknown
</div>
</div>
<strong>Membuat situs baru</strong>
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
$ hugo new site linuxisekai
</div>
</div>
linuxisekai adalah nama situs yang dibuat, hugo akan membuat folder bernama linuxisekai
<br/>

<br/>
<storng>
 menginstall tema hugo 
</strong>
silahkan kunjungi https://themes.gohugo.io lalu pilih tema yang kalian sukai.Disini saya memilih tema introduction
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
<div class="break">
$ git clone https://github.com/victoriadotdev/hugo-theme-introduction
</div>
</div>
</div>
lalu pindah kan tema kalian ke folder /linuxisekai/themes
<br/>
<strong>
 konfigurasi config.toml
</strong>
<br/>
silahkan buka file config.toml. agar tema kamu bisa digunkan maka harus menambahkan
theme = "namatema" pada config.toml.
kalian juga bisa mengambil konfigurasi config.toml dari tema yang kita download silahkan buka folder tema kalian lalu buka folder examplesite lalu copy semua file lalu pastekan di folder linuxisekai

<strong>Run hugo</strong>
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
cd linuxisekai/
<br/>
hugo server
</div>
</div>
sekarang coba buka browser lalu ketikan localhost:1313
<br/>
<br/>
<img src="/img/hugo-theme.webp" class="content-img">
<br/>
<br/>
selamat kita sudah berhasil membuat website menggunakan hugo, sekarang tinggal kita upload ke repo github kita