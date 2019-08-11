---
title: "#2 Go : Membahas program Hello World"
date: 2019-08-05T09:18:05+07:00
draft: false
image : /img/post/go.webp
description: "setiap file program pada bahasa go harus memiliki package..."
tags: ["golang","ngopi"]
---

### # membahas program hello world

    package main
    import "fmt"
    func main() {
        fmt.Println("hello world);
    }

#### # keyword *package

    package <package-name>

setiap file program pada bahasa go harus memiliki package. package <code>main</code> adalah package 
yang harus ada di setiap file program golang. golang sendiri memiliki banyak sekali package lain selain 
package <code>main</code>. file yang ber package main akan di eksekusi pertama kali saat program dijalankan.

#### # keyword *import

    import "<package-name>"

keyword import digunakan unutk meng-includekan ayau memasukan package lain kedalam file program.
package <code>fmt</code> merupakan salah satu package golang yang digunakan unutk keperluan i/o yang 
berhubungan dengan text.

#### # fungsi *main()

    func main {
        // here
    }

fungsi main() adalah fungsi yang dipanggil pertama kali saat program dieksekusi.

#### # fungsi *fmt.Println()

    fmt.Println("hello wordl")

fungsi <code>fmt.Println </code> berada didalam package <code>fmt</code>. oleh karena itu kita harus mingimport package <code>fmt</code> dulu. <code>fmt.Println</code> digunakan unutk manampilkan text ke layar

### # komentar
komentar digunakan untuk menyisipkan keterangan program yang kita tlis. komentar tidak akan di eksekusi oleh program. ada 2 cara penulisan komentar pada golang.

#### # komentar inline

    // komentar

#### # komentar multiline

    /* komentar
        pada golang
    */

