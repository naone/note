---
title: "#1 Go : Berkenalan Dengan Golang"
date: 2019-08-04T21:04:51+07:00
draft: false
image: /img/post/golang.webp
tags: ["golang","ngopi"]
description: "golang ( tatu bisa disebut dengan go ) adalah bahasa pemprograman yang dikembangkan oleh google oleh Robert Griesemer, Rob Pike, dan Ken Thompson pada tahun 2007 dan mulai diperkenalkan di publik pada tahun 2009."
---



#### # Berkenalan dengan golang

golang ( tatu bisa disebut dengan go ) adalah bahasa pemprograman yang dikembangkan oleh google oleh Robert Griesemer, Rob Pike, dan Ken Thompson pada tahun 2007 dan mulai diperkenalkan di publik pada tahun 2009.

Golang sendiri diciptakan berdasaekan bahasa C dan C++, oleh karena itu syntaks penulisanya sangat mirip

#### # Kelebihan golang

* Mendukung konsekuensi di level bahasa dengan pengaplikasian cukup mudah
* Mendukung pemprosesan data dengan banyak prosesor dalam waktu uang bersamaan ( pararel prosessing)
* memiliki garbage collector
* prosess compilasi yang sangat cepat
* bukan bahasa pemprograman hirakial, menjadikan programmer tidak perlu ribet memikirkan segmen OOP-nya
* pavkage atau modu; yang disediakan terbilang lengkap. karena bahasa ini open source, banyal sekali developer yang mengembangkan modul-modul lain yang bisa kita gunakan.

#### # Instalasi golang

<strong>Arch linux</strong>

    sudo pacman -S go

<strong>Ubuntu</strong>

yaa seperti biasa debian dan turunanya memang kurang update kalau masalah package dibanding arch dan turunanya, kita harus menginstall golang secara manual!!!. bagi orang pemalas seperti saya ini adalah ahal yang sangat merepotkan 😠.

    $ wget https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz
    $ tar -C /usr/local -xzf go1.12.7.linux-amd64.tar.gz
    $ echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc
    $ source ~/.bashrc

<div class="no-border">
jika kamu menggunakan zsh export ke <code>~/.zshrc</code>
</div>

cek apakah golang sudah terinstall dengan benar atau belum

    $ go version

#### # Goroot

GOROOT adalah direktory tempat golang terinstall, kalau di OS saya (manjaro) berada di <code>/usr/lib/go</code>. sedangkan jika menggunakan ubuntu dan menggunakan cara diatas makar GOROOT berada di <code>/usr/local</code>. atau kita juga bisa mengeceknya dengan perintah <code>go env</code>

#### # Gopath

GOPATH adalah variabel yang digunakan oleh golang sebagai rujukan di mana semua project disimpan. atau lebih gampangnyanya jika kita ingin membuat project menggunakan golang maka project tersebut harus berada di GOPATH. GOPATH terdiri atas 3 sub folder yaitu <code>src, bin,</code> dan <code>pkg</code>.

#### # Setup gopath

seperti  yang dijelaskan diatas, project kita harus berada di dalam gopath, oleh karena itu kita harus mendaftarkan directory yang akan kita jadikan sebagai gopath. untuk foldernya sendiri bebas asal jangan berada di dalam goroot ( tempat golang terinstall ).

    $ mkdir golang
    $ echo "export GOPATH=$HOME/golang" >> ~/.bashrc
    $ source ~/.bashrc

<div class="no-border">
jika kamu menggunakan zsh export ke <code>~/.zshrc</code>
</div>

cek apakah gopath sudah terdaftar

    $ exho $GOPATH

#### # Hello world

    $ cd $GOPATH/src
    $ mkdir golang-project
    $ touch golang-project/hello-world.go
    $ nano golang-project/hello-world.go

isi dengan kode berikut 

    package main
    import "fmt"
    func main() {    package mainimport"fmt"func main() {    fmt.Println("hello world")}
        fmt.Println("hello world")
        }

mengeksekusi golang

    $ go run hello-world.go

<div class="code">
pastikan sudah berada di dalam direktory project golang kamu saat menjalankan perintah diatas
</div>