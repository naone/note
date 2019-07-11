---
title: "Membuat gtk theme sendiri menggunkan oomox"
date: 2019-06-30T08:08:26+07:00
draft: false
tags: ["linux","oomox"]
image: /img/post/megumin.webp
---

### Intro

oomox adalah aplikasi yang digunakan membuat gtk theme pada sistem operasi linux.oomox berbasisikan GUI jadi sangat mudah digunkan. bagi yang hobi otak atik tampilan desktop, oomox  pasti akan menjadi aplikasi yang sangat berguna. tema oomox sendiri terbagi menjadi 3 varian yaitu numix-based, materia dan arch theme dan untuk icon ada 4 yaitu archdroid, gnome color, numix, papirus dan suru++.

### Instalasi

##### Arch linux
<div class="message-header">root@linuxisekai</div>

    $ sudo pacman -S yay
    $ yay -S oomox

##### Ubuntu
<div class="message-header">Install paket depensi yang dibutuhkan</div>

    $ sudo apt-get install python3-gi libglib2.0-bin libgdk-pixbuf2.0-dev libxml2-utils x11-xserver-utils gir1.2-gtk-3.0 gir1-2.glib-2.0 gir1.2-pango-1.0 gir1.2-gdkpixbuf-2.0 gtk2-engines gtk2-engines-murrine gtk2-engines-pixbuf bash bc sed grep parallel imagemagick optipng librsvg2-bin inkscape python3-pillow python3-pystache python3-yaml

<div class="message-header">Install SASS</div>

    $ cd /usr/share/local/lib/
    $ sudo git clone https://gihub.com/sass/sassc.git --branch 3.4.2 --depth 1
    $ sudo git clone https://gihub.com/sass/libsass.git --branch 3.4.2-stable --depth 1
    $ sudo git clone https://gihub.com/sass/sass-spec.git --depth 1
    $ echo 'SASS_LIBSASS_PATH="/usr/local/lib/libsass"' | sudo tee -a /etc/environment
    $ source /etc/environment
    $ sudo make -C libsass
    $ sudo make -C sassc
    $ sudo make -C sass install

##### Download oomox
buka https://github.com/themix-project/oomox/releases lalu download paket .deb nya.
Saya sarankan install versi yang terbaru ( saat artikel ini dibuat versi terakhir adalah 1.11 ).

<div class="message-header">Install oomox</div>

    $ cd ~/Download
    $ dpkg -i ./oomox-Versi-omox-kalian.deb
    $ sudo apt install -f

ini adalah hasil thema buatan saya mengguakan oomox https://github.com/linuxisekai/gtk


<center>
SELAMAT MENCOBA 😃
</center>


Referensi :

<div class="break">
    https://askubuntu.com/questions/849057/how-to-install-libsass-on-ubuntu-16-04
</div>
<div class="break">
    https://github.com/themix-project/oomox/blob/master/README.md
</div>