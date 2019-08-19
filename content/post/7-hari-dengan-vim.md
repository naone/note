---
title: "Setelah 7 hari 7 malam menggunakan vim"
date: 2019-08-19T07:23:15+07:00
draft: false
image : /img/post/i3-pywall.png
description: "Migrasi dari vscode ke vim"
tags: ["vim","linux"]
---

## Latar belakang
Vim merupakan text editor yang berbasiskan terminal, tidak seperti text editor lain vim menggunakan shortcut
untuk mengontrol navigasi, bagi yang menggunakan tiling windows manager pasti sudah tidak asing lagi.
awal saya tertarik belajar bermula dari grub telegrem DotfilesID, disitu om [BanditHijo](https://bandithijo.com) 
mengirimkan pesan berupa screnshoot saat ia menggunakan vim, mulai disitu saya sedikit naksir dengan vim dan 
ingin mencobanya. vim sendiri sudah berumur cukup lama, vim diciptakan pada tahun 1991.dibalik trend text editor
terus berubah vim tetap bertahan dan memiliki basis pengguna garis keras yang cukup besar. mantap.

## Instalasi

- **Arch**

```
sudo pacman -S vim
```

- **Debian**

```
sudo apt install vim
```

## Konfigurasi vim

Konfigurasi vim berada di dalam folder `/home/user/.vimrc`, konfigurasi vim yang saya gunakan cukup simpel,
saya hanya menginstall beberapa plugin yang benar benar saya butuhkan.
```
touch .vimrc
```
buka file `.vimrc` lalu tambahkan konfigurasi berikut

```
set encoding=utf-8
syntax enable

set nocompatible
set noswapfile
set nowrap
set number
set incsearch
set ignorecase
set expandtab
set tabstop=4
set shiftwidth=4
set autoindent
set smartindent
set splitbelow
set splitright
```

## Plugin vim

plugin didalam vim fungsinya mirip dengan extension dalam vscode.vim sendiri menyediakan banyak sekali plugin 
yang bisa dimanfaatkan untuk keperluan kkta. kita bisa mengunjungi [vimawesome](https://vimawesome.com) untuk melihat kumpulan plugin 
yang disediakan oleh vim.

### # Vundle

Vundle merupakan plugin vim yang digunakan untuk memanagement plugin vim. kita membuthukanya supaya kita 
bisa lebih mudah memenagement plugin yang kita install.
   
   - Konfigurasi vundle

```
mkdir $HOME/.vim
mkdir $HOME/.vim/bunlde
git clone https://github.com/VundleVim/Vundle.vim $HOME/.vim/bundle
```

   - buka file `.vimrc` tambahkan konfigurasi berikut

```
" Mengaktifkan vundle
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle'

// plugin vim yang akan kita install

" menonaktifkan vundle
call vundle#end()
filetype plugin indent on
```
antara baris `call vundle#begin()` dan `call vundle#end()` adalah plugin plugin yang kan kita install.

- menginstall plugin menggunkakan vundle

```
Plugin 'NamaPlugin'
```
misal kita ingin menginstall plugin `airlinie` maka tinggal tambahkan
```
Plugin 'vim-airline/vim-airline'
```
sekarang masuk ke normal mode lalu kitakan `:PluginInstall`, secara otomatis vundle akan menginstall plugin
airline. kita juga bisa menggunakan perintah `:PluginSearch` untuk mencari plugin yang ingin kita install.
untuk lebih detail bisa dilihat [disini](https://github.com/VundleVim/Vundle.vim)

### # Colorscheme

colorscheme ( kalau di vscode namnya tema ) sudah menjadi fitur wajib di sebuah text editor, selain
mempercantik tampilan text editor kita, colorscheme juga berguna sebagai syntaxt highlight.vim sendiri 
banyak sekali colorscheme yang bisa kita gunakan, akan tetapi saya hanya menginstall beberapa saja yang saya 
suka

- Menginstall colorscheme

```
Plugin 'dylanaraps/wal.vim'
Plugin 'morhetz/gruvbox'
Plugin 'altercation/vim-colors-solarized'
```

- Konfigurasi colorscheme

```
"colorscheme wal
"colorscheme solarized
colorscheme gruvbox
"set background=light
set background=dark
```

### # Nerdtree

Nerdtree adalah plugin vim yang  berfungsi untuk memanagement file/folder.

- install Nerdtree

```
Plugin 'scrooloose/nerdtree'
```

- konfigurasi nerdtree

```
" Nerdtree configuration
" untuk otomatis membuka nerdtree saat vim membuka folder
autocmd StdinReadPre * let S:std_in=1
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std>
" icon folder saat tidak dibuka
let g:NERDTreeDirArrowExpandable = " "
" icon folder saat dibuka
let g:NERDTreeDirArrowCollapsible = " "
" shortcut untuk membuka nerdtree (ctrl+n)
map <C-n> :NERDTreeToggle<CR>
```


### # Autopairs

seperti namanya plugin ini digunakan unutk auto pairs, misal saat kita mengetikan tanda kurung buka `(`, maka akan secara otomatis
menambahlam kurung tutup `)`.

- Install autopairs

```
Plugin 'jiangmiao/auto-pairs'
```

tadi adalah beberapa contoh konfigurasi vim, saya sangat menyarankan untuk mengunjungi galaman github pada
masing-masing plugin vim unutk melihat konfigurasi dan cara penggunaan yang lebih detail.
untuk full konfigurasi vim yang saya gunakan bisa disilihat di [dotfiles](https://github.com/galihx11/dotfiles).
Sejauh ini saya merasa sudah cukup terbiasa menggunakan vim, yaaa walaupun kadang masih lupa beberapa shortcut.
terima kasih sudah membaca artitel sampah ini dan sampai bertemu dilain kesempatan.

<div class="no-border">
Thanks <a href="https://bandithijo.com">BanditHijo</a>
</div>
