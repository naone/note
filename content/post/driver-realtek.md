---
title: "Cara menginstall driver realtek di linux"
date: 2019-06-28T19:43:35+07:00
draft: false
image: "/img/sagiri.webp"
tags: ["linux","driver"]
---
<h3>Pendahuluan</h3>
setelah selesai menginstall sistem operasi linux terus ternyata tidak ada wifinya ? mengkin itu terjadi karena driver dari wifi tersebut belum terinstall, memenag ada beberapa yang wifinya secara default sudah terinstall beberapa vendor seperti realtek atau broadcom yang secara dedault belum terinstal yang saya sendiri juga tidak tau alasnya.
<h3>instalasi</h3>
<article class="message is-grey">
<div class="message-header">Cek versi karnel</div>
<div class="message-body">
$ uname -a
</div>
</article>
<article class="message is-grey">
<div class="message-header">Output</div>
<div class="message-body">
Linux asuna 5.2.0-1-MANJARO #1 SMP PREEMPT Sun Jun 9 16:43:42 UTC 2019 x86_64 GNU/Linux
</div>
</article>
selanjutnya install paket-paket yang dibutuhkan
<br/>
<br/>
<article class="message is-grey">
<div class="message-header">Arch Linux</div>
<div class="message-body">
$ sudo pacman -S linux52-headers dkms git build-essential automake
</div>
</article>
NB : untuk linux52-headers silahkan kalian sesuaikan dengan versi karnel kalian, misal versi karnel kalian adalah 4.19.0 berarti linux419-headers
<br/>
<br/>
<article class="message is-grey">
<div class="message-header">Ubuntu</div>
<div class="message-body">
$ sudo apt install linux-headers-$(uname -r) git build-essential automake
<br/>
<div class="break">
$ git clone https://github.com/lwfinger/rtlwifi_new.git
</div>
<br/>
$ cd rtlwifi_new
<br/>
$ sudo make
<br/>
$ sudo make install
<br/>
$ reboot
</div>
</article>
<h3>Troubleshooting</h3>
<br/>
jika setelah reboot wifi sudah ada akan tetapi sinyalnya sedikit, berikut cara mengatasinya:
<br/>
<article class="message is-grey">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
$ sudo modprobe -v rtl8723de ant_sel=2
<br/>
$ sudo /bin/sh -c 'echo "options rtl8723de ant_sel=2" >> /etc/modprobe.d/rtl8723.conf'
<br/>
$ reboot
</div>
</article>
NB : rtl8723de sialahkan sesuaikan dengan chipset yang kalian gunakan
<br/>
<br/>
jika setelah reboot wifinya masih tidak kedetek maka gunakan cara kedua ini
<article class="message is-grey">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
<div class="break">
$ git clone -b extended --single-branch https://github.com/lwfinger/rtlwifi_new.git
</div>
<br/>
$ cd rtlwifi_new
<br/>
$ sudo make
<br/>
$ sudo make install
<br/>
$ reboot
</div>
</article>
selamat mencoba 😇
<br/>
<br/>
<center>
 TERIMA KASIH SUDAH MEMBACA ARTIKEL SAMPAH INI 😃
 </center>

