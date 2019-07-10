---
title: "Cara "
date: 2019-07-06T08:29:35+07:00
draft: false
tags: ["linux", "tutorial"]
thumbnail: /img/post/pink.webp
image: /img/post/pink.webp
description: "convert gambar di linux menggunkan libwebp" 
---
<div class="has-text-centered">
<img src="/img/pink.jpg" class="content-img"/>
</div>


### Pendahuluan
bagi yang belum tau .webp adalah format gambar digital yang dibuat oleh google. format ini pertama kali diperkenalkan pada tanggal 30 september 2010. pada awal perilisanya hanya browser google chrome saja yang mendukung. tetapi unutk sekarang sudah hampir semua browser.

### mengapa menggunakan .webp

1.webp menghasilkan file yang kecil dengan kualias gambar yang bagus
 
2.mampu menampilkan gambar bergerak

3.mempercepat loading website

### instalasi

#### arch linux
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
sudo pacman -S libwebp gthumb
</div>
</div>

#### ubuntu
<div class="message">
<div class="message-header">root@linuxisekai</div>
<div class="message-body">
sudo apt-get install libwebp gthumb
</div>
</div>

### Convert gambar

    asuna@linuxisekai:~$ cd Pictures
    asuna@linuxisekai:~/Pictures$ ls
        asuna.jpg   megumin.png
    asuna@linuxisekai:~/Pictures$  cwebp -q 100 asuna.jpg -o asuna.webp

### Tips dan trick
jika kamu ingin mengconvert gambar dalam jumlah banyak sekaligus

    asuna@linuxisekai:~$ cd Pictures
    asuna@linuxisekai:~/Pictures$ nano convert.sh
    
        #!/bin/bash

        PARAMS=('-m 6 -q 70 -mt -af -progress')

        if [ $# -ne 0 ]; then
	    PARAMS=$@;
        fi

        cd $(pwd)

        shopt -s nullglob nocaseglob extglob

        for FILE in *.@(jpg|jpeg|tif|tiff|png); do 
        cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
        done

    asuna@linuxisekai:~/Pictures$ chmod +x convert.sh
    asuna@linuxisekai:~/Pictures$ ./convert.sh
    asuna@linuxisekai:~/Pictures$ ls
        asuna.jpg asuna.webp megumin.png megumin.webp

semua gambar di folder Pictures sudah diconvert ke format .webp