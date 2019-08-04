---
title: "Desktop environment terasa berat ? coba pakai Windows Manager"
date: 2019-06-28T14:22:15+07:00
draft: false
image : "/img/post/loli.webp"
tags: ["linux", "wm"]
description: "mungkin artikel ini bisa menjawab pertanyaan - pertanyaan tersebut.
sebenarnya jawaban pertanyaan"
---

### Intro

Artikel ini dibuat karena saya melihat digrub facebook banyak sekali yang bertanya "Desktop environtment apa yang ringan ?", "saya mau install linux mint kira kira yang ringan dan tampilanya bagus pakai lxde xfce atau mate ?" "Saya habis install ubutnu kok ngelag ya ?" etc.
mungkin artikel ini bisa menjawab pertanyaan - pertanyaan tersebut.
sebenarnya jawaban pertanyaan diatas adalah xfce/lxde namun ada alernatif lain yaitu hanya menggunakan windows manager tanpa meggunakan desktop environment. windows manager adalah salah satu komponen dari dekstop environment (selanjutnya saya menyebutnya DE). setiap DE mempunyai windows managernya sendiri-sendiri


<table class="table">
<thead>
<tr>
<th>Desktop Environment</th>
<th>Windows Manager</th>
</tr>
</thead>
<tbody>
<tr>
<td>XFCE</td>
<td>XFWM</td>
</tr>
<tr>
<td>gnome</td>
<td>metacity</td>
</tr>
<tr>
<td>KDE</td>
<td>KWin </td>
</tr>
<tr>
<td>Cinnamon</td>
<td>muffin</td>
</tr>
<tr>
<td>Deepin</td>
<td>Deepin-mutter</td>
</tr>
</tbody>
</table>
untuk lebih lengkapnya bisa baca artikel berikut <a href="https://wiki.archlinux.org/index.php/Deskto_environment">Arch wiki</a>. Seperti yang saya sebutkan tadi kita setiap DE mempunya windows manager sendiri sendiri tapi ada juga beberapa DE yang windows managernya bisa diganti misal xfce terus windows managernya openbox. 

##### beberapa jenis windows manager :
<ul>
<li><b>Stacking/foating</b> : windows manager yang bisa bertumpuk atau melayang, ini adalah jenis windows manager yang terdapat pada dektop environtment.
</li>
<li><b>tiling</b> : windows manager yang tersusun terkotak kotak tidak bertumpuk dan mengandalkan shortcut keyboard.
contoh : i3wm, bspwm, awesome, dwm, twm, etc.
</li>
<li><b>Dynamic</b> : windows manager yang bisa berganti-ganti sesuai kebutuhan user.
</li>
</ul>
 untuk sekarang banyak tiling windows sudah mendukung fitur dynamic, artinya sudah bisa berganti-ganti mode. 
 <br>
 </br>
 <strong>kelebihan hanya menggunkan windows manager</strong>
 <ul>
<li><b>lebih ringan</b></li>
Dektop environment mempunyai banyak sekali fitur akan tetapi fitur fitur tersebut banyak yang tidak dibutuhkan sehingga hanya membebani sistem operasi kita sedangkan di windows manager kita bisa mengatur aplikasi apa saja yang berjalan sesui dengan kebutuhan kita, windows manager juga tidak terlalau banyak memakan RAM bahkan paket windows manager sangatlah kecil jika dibanding dengan DE.
<li><b>lebih customisable</b></li>
desktop environtment memang sudah menawarkan customisasi yang cukup fleksibel tetapi banyak hal-hal kecil yang kadang kuarng sreg untuk dilihat sedangkan dengan windows manager kita bisa mengatur tamplan dektop sesuiai keinginan kita. misalnya untuk panel kita bisa menggunakan banyak sekali pilihan contoh polybar, lemonbar, tint2, dzen2 etc.
</ul>
<br>
Contoh tampilan windows manager yang sya gunakan :

#### i3 solarized

<img src="/img/post/i3.webp">

##### i3 Dark
<img src="/img/post/openbox.webp">

untuk tutorial konfigurasi windows manager mungkin akan saya buat pada artikel selanjutnya. 

<center>
TERIMA KASIH SUDAH MEMBACA ARTIKEL SMPAH INI 😃
</center>
