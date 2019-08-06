---
title: "Cara menginstall driver realtek di linux"
date: 2019-06-28T19:43:35+07:00
draft: false
image: "/img/post/sagiri.webp"
tags: ["linux","driver"]
description: "setelah selesai menginstall sistem operasi linux..."
---
### Intro
setelah selesai menginstall sistem operasi linux terus ternyata tidak ada wifinya ? mengkin itu terjadi karena driver dari wifi tersebut belum terinstall, memenag ada beberapa yang wifinya secara default sudah terinstall beberapa vendor seperti realtek atau broadcom yang secara dedault belum terinstal yang saya sendiri juga tidak tau alasnya.

### Instalasi

    $ uname -a
    $ Linux asuna 5.2.0-1-MANJARO #1 SMP PREEMPT Sun Jun 9 16:43:42 UTC 2019 x86_64 GNU/Linux

selanjutnya install paket-paket yang dibutuhkan

    $ sudo pacman -S linux52-headers dkms git build-essential automake

NB : untuk linux52-headers silahkan kalian sesuaikan dengan versi karnel kalian, misal versi karnel kalian adalah 4.19.0 berarti linux419-headers

    $ sudo apt install linux-headers-$(uname -r) git build-essential automake
    $ git clone https://github.com/lwfinger/rtlwifi_new.git
    $ cd rtlwifi_new
    $ sudo make
    $ sudo make install
    $ reboot
    
### Troubleshooting

jika setelah reboot wifi sudah ada akan tetapi sinyalnya sedikit, berikut cara mengatasinya:

    $ sudo modprobe -v rtl8723de ant_sel=2
    $ sudo /bin/sh -c 'echo "options rtl8723de ant_sel=2" >> /etc/modprobe.d/rtl8723.conf'
    $ reboot

NB : rtl8723de sialahkan sesuaikan dengan chipset yang kalian gunakan

jika setelah reboot wifinya masih tidak kedetek maka gunakan cara kedua ini

    $ git clone -b extended --single-branch https://github.com/lwfinger/rtlwifi_new.git
    $ cd rtlwifi_new
    $ sudo make
    $ sudo make install
    $ reboot
    
selamat mencoba 😇


<center>
TERIMA KASIH SUDAH MEMBACA ARTIKEL SAMPAH INI 😃
</center>

