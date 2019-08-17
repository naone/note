---
title: "Vim Scheatsheet"
date: 2019-08-12T01:09:38+07:00
draft: false
image : /img/post/-_-.png
description: "kumpulan perintah perintah vim"
tags: ["vim","linux"]
---

### Global

    :help keyword - membuka bantuan keyword
    :saveas file - save file as
    :close - close current pane

### Pergerakan Kursor

    h - memindahkan kursor ke kiri
    j - memindahkan kursor ke bawah
    k - memindahkan kursor ke atas
    l - memindahkan kursor ke kanan
    H - move to top of screen
    M - move to middle of screen
    L - move to bottom of screen
    w - lompat ke awal kata selanjutnya
    W - lompat ke awal kata selanjutanya (kata-kata dapat mengandung tanda baca)
    e - lompat ke akhir kata selanjutnya
    E - lompat ke akhir kata selanjutnya (kata-kata dapat mengandung tanda baca)
    b - lompat ke awal kata sebelumnya
    B - lompat ke awal kata sebelumnya (kata-kata dapat mengandung tanda baca)
    % - move to matching character (default supported pairs: '()', '{}', '[]' - use <code>:h matchpairs</code> in vim for more info)
    0 - lompat ke awal baris saat ini
    ^ - lompat ke karakter pertama baris saat ini
    $ - lompat ke akhir baris saat ini
    g_ - jump to the last non-blank character of the line
    gg - pindah ke baris teratas dokumen
    G - pindah ke baris paling akhir dokumen
    5G - pindah ke baris ke-5
    fx - lompat tepat pada karakter x
    tx - lompat tepat sebelum karakter x
    Fx - jump to previous occurence of character x
    Tx - jump to after previous occurence of character x
    ; - repeat previous f, t, F or T movement
    , - repeat previous f, t, F or T movement, backwards
    } - Lompat ke paragraf berikutnya (atau blok kode, saat mengedit kode)
    { - Lompat ke paragraf sebelumnya (atau blok kode, saat mengedit kode)
    zz - center cursor on screen
    Ctrl + e - move screen down one line (without moving cursor)
    Ctrl + y - move screen up one line (without moving cursor)
    Ctrl + b - move back one full screen
    Ctrl + f - move forward one full screen
    Ctrl + d - move forward 1/2 a screen
    Ctrl + u - move back 1/2 a screen

Tip Prefix a cursor movement command with a number to repeat it. For example, 4j moves down 4 lines.
Mode Insert - menyisipkan/menambahkan text

    i - menyisipkan sebelum kursor
    I - menyisipkan pada permulaan baris
    a - menyisipkan (menambahkan) setelah kursor
    A - menyisipkan (menambahkan) pada akhir baris
    o - menambahkan (membuka) baris baru dibawah baris saat ini
    O - menambahkan (membuka) baris baru diatas baris saat ini
    ea - menyisipkan (menambahkan) pada akhir kata
    Esc - berhenti dari mode insert

Editing

    r - mengubah satu karakter
    J - menyambung baris di bawah dengan baris saat ini
    gJ - join line below to the current one without space in between
    gwip - reflow paragraph
    cc - menghapus isi baris saat ini untuk diganti dengan text lain
    C - change (replace) to the end of the line
    c$ - menghapus semua karakter setelah kursor hingga akhir baris
    ciw - change (replace) entire word
    cw - menghapus satu kata untuk diganti dengan kata lain
    s - menghapus karakter dan mengganti text
    S - menghapus isi baris saat ini untuk diganti dengan text lain (sama dengan cc)
    xp - menukar dua karakter (delete dan paste)
    u - undo
    Ctrl + r - redo
    . - ulangi perintah sebelumnya

Menandai Text (Visual Mode)

    v - memulai mode visual, menandai baris-baris, lalu jalankan perintah (misal y-yank)
    V - memulai mode visual secara per baris
    o - pindah ke ke bagian akhir dari area lain yang telah ditandai
    Ctrl + v - memulai mode visual blok
    O - pindah ke sudut lain pada sebuah blok
    aw - menandai kata
    ab - a block with ()
    aB - a block with {}
    ib - inner block with ()
    iB - inner block with {}
    Esc - berhenti dari mode visual

Perintah - perintah visual

    > - menggeser text ke kanan
    < - menggeser text ke kiri
    y - yank (menyalin) text yang ditandai
    d - menghapus text yang ditandai
    ~ - menukar huruf kapital-kapitil

Registers

    :reg - show registers content
    "xy - yank into register x
    "xp - paste contents of register x

Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.
Tip Register 0 contains always the value of the last yank command.
Marks

    :marks - list of marks
    ma - set current position for mark A
    `a - jump to position of mark A
    y`a - yank text to position of mark A

Macros

    qa - record macro a
    q - stop recording macro
    @a - run macro a
    @@ - rerun last run macro

Memotong dan menempel

    yy - menyalin sebaris text
    2yy - menyalin dua baris text
    yw - menyalin satu kata
    y$ - menyalin dari posisi sekarang hingga akhir baris saat ini
    p - menempelkan salinan dari clipboard setelah kursor
    P - menempelkan salinan dari clipboard sebelum kursor
    dd - menghapus satu baris
    2dd - menghapus (memotong) dua baris
    dw - menghapus (memotong) kata
    D - menghapus (memotong) hingga ke akhir baris saat ini
    d$ - menghapus (memotong) hingga ke akhir baris saat ini
    x - menghapus (memotong) satu karakter

Keluar

    :w - menulis (menyimpan) ke file, tapi tidak keluar
    :w !sudo tee % - menulis (menyimpan) ke file dengan sudo
    :wq or :x or ZZ - menulis (menyimpan) lalu keluar
    :q - keluar (batal jika ada perubahan yang belum disimpan)
    :q! or ZQ - keluar dan abaikan perubahan yang telah dibuat
    :wqa - write (save) and quit on all tabs

Cari dan Tukar

    /pattern - pencarian dengan pola
    ?pattern - pencarian ke belakang dengan pola
    \vpattern - pola 'magic': karakter-karater non alfanumerik diinterpretaskan sebagai sebagai simbol regex khusus (tidak membutuhkan escape)
    n - ulangi pencarian ke arah selanjutnya
    N - ulangi pencarian ke arah sebaliknya
    :%s/old/new/g - tukar yang lama dengan yang baru di keseluruhan file
    :%s/old/new/gc - tukar yang lama dengan yang baru di kesluruhan file dengan konfirmasi
    :noh - menghilangkan sorotan pada hasil-hasil pencarian

Pencarian di beberapa file

    :vimgrep /pattern/ {file} - pencarian pola di beberapa file

e.g.:vimgrep /foo/ **/*

    :cn - lompat ke temuan selanjutnya
    :cp - lompat ke temuan sebelumnya
    :copen - membuka windows baru yang menampilkan hasil temuan

Bekerja dengan beberapa file

    :e file - mengedit file di dalam buffer baru
    :bnext or :bn - beralih ke buffer selanjutnya
    :bprev or :bp - beralih ke buffer sebelumnya
    :bd - menghapus buffer (menutup file)
    :ls - daftar buffer yang terbuka
    :sp file - buka file di buffer baru dan split jendela
    :vsp file - buka file di buffer baru dan split jendela secara vertikal
    Ctrl + ws - split jendela
    Ctrl + ww - berganti jendela
    Ctrl + wq - keluar dari jendela
    Ctrl + wv - split jendela secara vertikal
    Ctrl + wh - memindahkan kursor ke jendela kiri (split vertikal)
    Ctrl + wl - memindahkan kursor ke jendela kanan (split vertikal)
    Ctrl + wj - memindahkan kursor ke jendela bawah (split horizontal)
    Ctrl + wk - mmemindahkan kursor ke jendela atas (split horizontal)

Tabs

    :tabnew or :tabnew file - membuka file di tab baru
    Ctrl + wT - move the current split window into its own tab
    gt or :tabnext or :tabn - pindah ke tab selanjutnya
    gT or :tabprev or :tabp - pindah ke tab sebelumnya
    #gt - pindah ke tab nomor #
    :tabmove # - pindahkan tab saat ini ke urutan ke # (urutan mulai dari angka 0)
    :tabclose or :tabc - tutup tab saat ini dan semua jendela di dalamnya
    :tabonly or :tabo - tutup semua tab kecuali tab yang aktif saat ini
    :tabdo command - menjalankan perintah command pada semua tab (misal: :tabdo q - akan menutup semua tab)
