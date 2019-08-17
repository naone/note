---
title: "Markdown Cheatsheet"
date: 2019-08-11T17:21:07+07:00
draft: false
image : /img/post/oalah.png
description: " karena saya orangnya pelupa jadi... "
tags: ["markdown","cheatsheet"]
---

Markdown merupakan sebuah format yang bisa mengkonversi text menjadi html. 
Initinya markdown tidak menggunakan tag-tag html melainkan menggunakan symbol/cheatsheet 
yang akan dikonversi menjadi tag html. 
Misal tulisan `# judul` dalam markdown maka akan dikonversikan ke dalam html menjadi `<h1> judul </h1>`, 
tanda `#` didalam markdown melambangkan `<h1>`. 
kenapa menggunakan markdown ? tentu saja markdown lebih simpel dan efisien diabnding html, dalam hal ini untuk menulis artikel karena markdown cukup sulit diimplementasikan saat kita membutuhkan tag html yang kompleks.
Tidak hanya itu, menulis artikel menggunakan markdown juga menjadikan tulisan kita lebih terlihat Aesthetic
menurut saya 😆.


!["vim markdown"](/img/post/vim-markdown.png)


#### dengan markdown

```
|  tabel heading  |  tabel heading  |  tabel heading  |
| --------------- | --------------- | --------------- |
| baris 1 kolom 2 | baris 2 kolom 2 | baris 3 kolom 2 |
| baris 1 kolom 3 | baris 2 kolom 3 | baris 3 kolom 3 |
| baris 1 kolom 4 | baris 2 kolom 4 | baris 3 kolom 4 |
```

#### dengan html

```
<table>
<tr>
<th> tabel heading </th>
<th> tabel heading </th>
<th> tabel heading </th>
</tr>
<tr>
<td> baris 1 kolom 2 </td>
<td> baris 1 kolom 3 </td>
<td> baris 1 kolom 4 </td>
</tr>
<tr>
<td> baris 2 kolom 2 </td>
<td> baris 2 kolom 3 </td>
<td> baris 2 kolom 4 </td>
</tr>
<tr>
<td> baris 3 kolom 2 </td>
<td> baris 3 kolom 3 </td>
<td> baris 3 kolom 4 </td>
</tr>
</table>
```

### Heading

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### Teks miring

```
*miring*
```

### Teks tebal

```
**Tebal**
```

### Coret

```
~~ Coret ~~
```

### List
#### ordered list

```
1. list 1
2.list 2
 1. ordered sub-list
```

#### unordered list

```
- list 1
- list 2
 - unordered sub list
```

### Gambar

```
![alt text](link ke gambar)
```

### Code dan syntax highlight
#### inline code

```
`code`
```
#### Block code

```
```Block code
    linuxisekai```
```

### Link

```
[text link](url link)
```

### Tabel

```
| Tabel Heading 1 | Tabel Heading 2 | Tabel Heading 3 |
| --------------- | --------------- | --------------- |
| baris 1 kolom 2 | baris 2 kolom 2 | baris 3 kolom 2 |
| baris 1 kolom 3 | baris 2 kolom 3 | baris 3 kolom 3 |
```

### Blockquotes

```
> Blockquotes
> Masih bagian dari block qoutes diatas
```
