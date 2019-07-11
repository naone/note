---
title: "#2 Hugo : Membuat tema hugo sendiri"
date: 2019-07-04T15:49:01+07:00
draft: false
tags: ["Hugo","Bulma"]
image: /img/post/music.webp
---
<h3>Prakata</h3>
melanjutkan artikel sebelumnya, Pada artikel kali ini kita akan membahas cara membuat tema hugo.
sebenarnya di website https://themes.gohugo.io juga sudah banyak sekali tema yang sudah siap pakai akan tetapi saya merasa kurang sreg dengan tampilan tema yang disediakan, saya juga bingung jika ingin memodifikasi tampilan oleh karena itu saya ingin mencoba membuat tema sendiri sekaligus mencoba hal baru. tema yang kita buat akan menggunkan CSS framework yaitu bulma. pertama siapkan bahan-bahanya terlebih dahulu

<div class="is-primary message-body">
<a href="http://localhost:1313/post/ngeblog-dengan-hugo/">#1 Hugo: Membuat blog menggunkan hugo + gitub paga</a>
</div>

<ul>
<li>Bulma untuk CSS framework</li>
<li>Font Awesome unutuk gylph icon</li>
<li>Jquery JS framework</li>
<li>Prismjs untuk Syntax Hightlight</li>
</ul>

<strong>Download semua bahanya <a href="https://github.com/linuxisekai/tema-hugo">disini</a></strong>

### Instalasi
setelah semua bahanya sudah siap sekarang saatnya membuat tema hugo kita


<div class="message-header">root@linuxisekai</div>

	$ cd linuxisekai
	$ cd hugo new theme isekai

<strong>keterangan :</strong>

linuxisekai adalah directory tempat hugo kita dibuat jika kamu belum membuatnya ketikan perintah :

<div class="message-header">root@linuxisekai</div>

	$ hugo new site linuxisekai

linuxisekai adalah nama tema yang kita buat kalian bebas menggantinya sesuka kalian.


<strong>Struktur directory tema Hugo</strong>

	├── archetypes
	│   └── default.md
	├── layouts
	│   ├── 404.html
	│   ├── _default
	│   │   ├── baseof.html
	│   │   ├── list.html
	│   │   └── single.html
	│   ├── index.html
	│   └── partials
	│       ├── footer.html
	│       ├── header.html
	│       └── head.html
	├── LICENSE
	├── static
	│   ├── css
	│   └── js
	└── theme.toml


### Penjelasan

#### 1. Archetypes
	├── archetypes
	│   └── default.md

adalah drektory yang digunakan untuk menagtur konten, didalam directory archtypes ada file default.md, ini adalah file unutk mengatur saat kita menjalankan perintah hugo new
<strong>contoh :</strong>
saya mempunyai konfigurasi default.md berikut :

	---
	title: "{{ replace .Name "-" " " | title }}"
	date: {{ .Date }}
	draft: true
	---

saat saya membuat postingan baru dengan menggunakan perintah <code>hugo new post/membuat-tema-hugo.md</code>. maka secara otomatis pada /content/post/membuat-tema-hugo.md akan tampil seperti ini

	---
	title: "Membuat Tema Hugo"
	date: 2019-07-05T14:04:15+07:00
	draft: true
	---
hugo secara otomatis meng generate tanggal, judul dan draft itu karena kita sudah mengaturnya di file default.md. tidak hanya itu archetypes juga bisa mengatur jenis konten dari website kita misal berita, tutorial dll.

### 2. layout

	├── layouts
	│   ├── 404.html
	│   ├── _default
	│   │   ├── baseof.html
	│   │   ├── list.html
	│   │   └── single.html
	│   
	├── index.html
	│   └── partials
	│       ├── footer.html
	│       ├── header.html
	│       └── head.html

directory layout berisi layout dari tema hugo kita . 

#### Partials
didalam folder layout terdapat folder partial. layout yang kita buat nantinya akan kita pecah menjadi beberapa bagian atau partial. partial disimpan dalam direktory partials. nantinya kita tinggal memanggil partial tersebut dengan perintah <code>{{ partial "file.html" . }}</code>

 	index.html => memanggil partial
 	   └── partials
 	       ├── footer.html => partial footer
 	       ├── header.html => partial header
 	       └── head.html => partia head

#### Default

	│   ├── _default
	│   │   ├── baseof.html
	│   │   ├── list.html
	│   │   └── single.html

<strong>List.html: </strong>digunakan unutk menampilkan daftar kontent

<strong>single.html: </strong>digunakan unutuk menampilkan satu konten

#### 3. Static

folder staic digunakan untuk menyimpan file-file static seperti gambar, CSS, atau js

#### css dan javascript
extrack bahan yang tadi didownload untuk file bulma.css dan custom.css silahkan taruh di folder themese/isekai/static/css sedangkan untuk file fontawesome.js prism.js jquery.js core.js cookie.js lazysizes.js tauh di themes/isekai/static/js.
#### membuat partial

<div class="message-header">root@linuxisekai: ~/linuxisekai</div>

	$ cd themes/isekai/layout/partials
	$ touch navbar.html head.html grid.html pagination.html footer.html js.html

### Satnya ngoding
buka text editor kesayanganmu

<h4 class="has-text-centered">navbar.html</h4>


	<div class="pageloader"></div>
	<div class="infraloader is-active"></div>
	<nav id="navbar" class="navbar is-fixed-top has-shadow is-spaced">
	<div class="container">
	<div class="navbar-brand">
	<a class="navbar-item" href="/" >
	<span class="icon fa-lg"><i class="fas fa-terminal"></i></span>
	<div class="is-size-4 has-text-weight-bold title">&nbsp;linuxisekai</div>  
	</a>
	<a class="navbar-item is-hidden-desktop" href="https://github.com/linuxisekai" target="_blank">
	<span class="icon" style="color: rgb(173, 179, 197);">
	<i class="fab fa-lg fa-github-alt"></i>
	</span>
	</a>
	<a class="navbar-item is-hidden-desktop" href="#" target="_blank">
	<span class="icon has-text-primary">
	<i class="fab fa-lg fa-twitter"></i>
	</span>
	</a>
	<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuIndex">
	<span></span>
	<span></span>
	<span></span>
	</div>
	</div>
	<div id="navMenuIndex" class="navbar-menu">
 	<div class="navbar-start">
	<a class="navbar-item bd-navbar-item-documentation  " href="/">
	<span class="icon has-text-primary">
	<i class="fas fa-home"></i>
	</span>
	<span class="is-hidden-desktop-only"> Home
	</span>
	</a>
	<a class="navbar-item bd-navbar-item-videos " href="/tags/linux">
	<span class="icon has-text-primary">
	<i class="fas fa-terminal"></i>
	</span>
	<span>&nbsp;Linux</span>
	</a>
	<div class="navbar-item has-dropdown is-hoverable" href="/ngoding">
 	<a class="navbar-link">
	<span class="icon has-text-primary">
  	<i class="fas fa-code"></i>
	</span>
 	<span>Ngoding</span>
 	</a>
 	<div class="navbar-dropdown">
	<a class="navbar-item" href="#">PHP
	</a>
	<a class="navbar-item" href="#">Go
	</a>
	</div>
	</div>
	<a class="navbar-item bd-navbar-item-blog " href="/about">
	<span class="icon has-text-primary">
	<i class="fas fa-newspaper"></i>
	</span>
	<span>News</span>
	</a>
	<a class="navbar-item bd-navbar-item-blog " href="/about">
	<span class="icon has-text-primary">
	<i class="fas fa-user"></i>
	</span>
	<span>About</span>
	</a>
	</div>
	<div class="navbar-end">
	<a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://github.com/linuxisekai" target="_blank">
	<span class="icon" style="color: rgb(170, 174, 184);">
	<i class="fab fa-lg fa-github-alt"></i>
	</span>
	</a>
      
 	<a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="#" target="_blank">
	<span class="icon has-text-primary">
	<i class="fab fa-lg fa-twitter"></i>
	</span>
	</a>
      
	<div class="navbar-item is-hidden-desktop">
	<div class="field is-grouped is-grouped-multiline">
	<p class="control">
    <input type="text" class="input is-rounded has-background-grey-light" placeholder="Cari">
      
    </p>
	<p class="control has-icon">
	<input type="submit" value ="Cari" class="button is-rounded input has-background-grey-light has-text-primary"/>
	<span class="icon is-small is-left has-text-primary">
	<i class="fas fa-search"></i>
	</span>
	</p>
	</div>
	</div>
	</div>
	</div>
	</div>
	</nav>

<h4 class="has-text-centered">head.html</h4>

	<section class="section container projects">
	<h1 class="is-size-1 has-text-centered">
	<b>Linuxisekai</b></h1>
	<h2 class="subtitle is-size-5 has-text-centered">
		Nolep Enthusiast Project</h2>
	<div class="project-grid">
	<div class="container">
  	<div class="columns is-multiline is-mobile">
		{{ $paginator := .Paginate (where .Data.Pages "Type" "post") 6 }}
  		{{ range $paginator.Pages }}         
  	<div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
  	<div class="box">    
  	<figure class="image is-5by3">
    <img class="project-thumb lazyload" sizes="20em" data-src="{{ with .Params.image }}{{ . }}{{ end }}" alt="" />
 	<figcaption class="figcaption">
 	<a class="button is-primary is-outlined is-rounded" href="{{ .RelPermalink }}">
 	<span>Read..</span>
	<span class="icon">
  	<i class="fas fa-angle-right"></i>
  	</span></a>
  	</figcaption>
  	<div class="overlay">
  	</figure>
 	<br/>
  	<a href="{{ .RelPermalink }}" class="judul-post">
  	<span class="icon">
	<i class="fas has-text-primary fa-book"></i>             
	</span>
  		{{ .Title }}
  	</a>
  	<br/>
  	<time class="is-size-7">
  	<span class="icon">
  	<i class="fas fa-calendar has-text-primary">
  	</i>
  	</span>&nbsp;{{ .Date.Format "02-01-2006" }}
  		| <span class="icon is-small">
  	<i class="fas fa-tags has-text-primary">
  	</i></span></time>
  		{{ $taxonomy := "tags" }}
  		{{ with .Param $taxonomy }}
  		{{ range $index, $tag := . }}
  	<time class="is-size-7">
  		{{ with $.Site.GetPage (printf "/%s/%s" $taxonomy $tag) -}}
  		{{ $tag | urlize }}
  	</time>
  		{{- end -}}
  		{{- end -}}
  		{{ end }}
  	</div>
  	</div>
  		{{ end }}
  	</div>
  	</div>
  	</div>
  	</section>

<h4 class="has-text-centered">head.html</h4>

	<head>
    <meta charset="utf-8">
    <title>Linuxisekai ~#: Nolep Enthusiast</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="title" content="">
    <meta name="author" content="linuxisekai">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="generator" content="linuxisekai">
    <meta name="theme-color" content="#073642">
    <meta http-equiv="Cache-control" content="public">
    <link rel="icon" type="image/png" href="tuxguitar.png">
    <meta name="Description" content="Linux, Golang, PHP, Tutorial, Ricing, Ubuntu, Arch Linux">

    <link href="/css/bulma.css" rel="stylesheet" media="screen">
    <link href="/css/prism.css" rel="stylesheet" media="screen">
    <link href="/css/custom.css" rel="stylesheet" media="screen">
    <link href="https://fonts.googleapis.com/css?family=Mali|Ubuntu+Mono&display=swap" rel="stylesheet">
    {{ template "_internal/schema.html" . }}
    {{ template "_internal/google_news.html" . }}
    {{ template "_internal/google_analytics.html" . }}
    {{ template "_internal/opengraph.html" . }}
    {{ template "_internal/twitter_cards.html" . }}
	</head>

<h4 class="has-text-centered">pagination.html</h4>

	<nav class="pagination is-centered is-rounded is-small" role="navigation" aria-label="pagination">
    {{ $pag := $.Paginator }}
    {{ if gt $pag.TotalPages 1 }}
    <ul class="pagination-list">
    {{ with $pag.First }}    
    {{ end }}
    <li {{ if not $pag.HasPrev }}class="disabled page-item"{{ end }}>
    <a class="pagination-link is-current" href="{{ if $pag.HasPrev }}{{ $pag.Prev.URL }}{{ end }}" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
    </li>
    {{ $.Scratch.Set "__paginator.ellipsed" false }}
    {{ range $pag.Pagers }}
    {{ $right := sub .TotalPages .PageNumber }}
    {{ $showNumber := or (le .PageNumber 3) (eq $right 0) }}
    {{ $showNumber := or $showNumber (and (gt .PageNumber (sub $pag.PageNumber 2)) (lt .PageNumber (add $pag.PageNumber 2)))  }}
    {{ if $showNumber }}
    {{ $.Scratch.Set "__paginator.ellipsed" false }}
    {{ $.Scratch.Set "__paginator.shouldEllipse" false }}
    {{ else }}
    {{ $.Scratch.Set "__paginator.shouldEllipse" (not ($.Scratch.Get "__paginator.ellipsed") ) }}
    {{ $.Scratch.Set "__paginator.ellipsed" true }}
    {{ end }}
    {{ if $showNumber }}
    <li
    {{ if eq . $pag }}{{ end }}><a class="pagination-link is-current" href="{{ .URL }}">{{ .PageNumber }}</a></li>
    {{ else if ($.Scratch.Get "__paginator.shouldEllipse") }}
    <li>
	<a class="pagination-link is-current" href="#">
	<span aria-hidden="true">&hellip;</span></a></li>
    {{ end }}
    {{ end }}
    <li
    {{ if not $pag.HasNext }}class="disabled page-item"{{ end }}>
    <a class="pagination-link is-current" href="{{ if $pag.HasNext }}{{ $pag.Next.URL }}{{ end }}" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>
    </li>
    {{ with $pag.Last }}  
    {{ end }}
    </ul>
    {{ end }}
    </nav>
    <div class="ghost-padding"></div>
		
<h4 class="has-text-centered">footer.html</h4>

	<footer class="footer">
    <div class="container">
    <div class="has-text-centered">
     <p>
     <a class="icon fa-lg has-text-grey" href="//github.com/linuxisekai">
     <i class="fab fa-github"></i>
    </a>
    &nbsp;
    <a class="icon fa-lg has-text-grey" href="#" target="_blank">
    <i class="fab fa-facebook"></i>
    </a>
    </p>
     <p>
    <strong>Linuxisekai</strong> by
    <a href="https://github.com/linuxisekai" target="_blank">tempegoreng</a>.
    <br> Based on
    <a href="http://bulma.io" target="_blank">Bulma</a> + <a href="gohugo,io">Hugo</a> +
    <a href="http://fontawesome.io/" target="_blank">Font Awesome</a>.
    <br>thanks to <a href="https://jenil.github.io/bulmaswatch">Bulmaswatch</a>
    </p>
    </div>
    </div>
    </footer>

<h4 class="has-text-centered">disqus.html</h4>

	<br/>
	<br/>
	<div class="disqus-comment">

    <div class="disqus-button" id="load_disqus" onclick="load_disqus()">
    <span class="icon fa-lg"><i class="fas fa-comment"></i></span> Comment
    </div>
    <div id="disqus_thread"></div>
    <script type="text/javascript">
    function load_disqus() { 
    if (window.location.hostname === 'localhost') return;
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    var disqus_shortname = 'linuxisekai-github-io';
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            $('#load_disqus').remove();
          };
    </script>
    <noscript>Please enable JavaScript to view the
    <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a>
    </noscript>
    </div>
        
<h4 class="has-text-centered">js.html</h4>

	<a href="#" class="ignielToTop"></a>
	<script src="/js/fontawesome.js" async></script>
	<script src="/js/jquery.js"></script>
	<script src="/js/lazysizes.min.js" async></script>
	<script src="/js/core.js"></script>
	<script src="/js/cookie.js"></script>
	<script src="/js/prism.js"></script>


setelah semua partial kita buat, saatnya memanggil partial-partial tersebut

<h4 class="has-text-centered">index.html</h4>

	<!DOCTYPE html>
	<html lang="en">
  	{{ partial "head.html" . }}
  	<body>
    {{ partial "navbar.html" . }}
    {{ partial "grid.html" . }}
    {{ partial "pagination.html" . }}
    {{ partial "footer.html" . }}
    {{ partial "js.html" . }}
  	</body>
	</html>

<h4 class="has-text-centered">single.html</h4>

	<!DOCTYPE html>
	<html>
    {{ partial "head.html" . }}
    <body>
    {{ partial "navbar.html" . }}
    <div class="judul"><b>{{ .Title }}</b></div>
    <div class="is-size-6 info-post">
    <span class="icon has-text-primary"><i class="fas fa-user"></i></span>
    {{ .Site.Author.name }} | 
    <span class="icon has-text-primary"><i class="fas fa-calendar"></i></span> 
    {{ .Date.Format "02-01-2006" }}
    | <span class="icon has-text-primary"><i class="fas fa-tags"></i></span>
    {{ $taxonomy := "tags" }}
	{{ with .Param $taxonomy }}
	{{ range $index, $tag := . }}
	{{ with $.Site.GetPage (printf "/%s/%s" $taxonomy $tag) -}}
	&nbsp;{{ $tag | urlize }}
	{{- end -}}
	{{- end -}}
	</div>
	{{ end }}                          
	<br>
 	<div class="content">
 	<article class="article">
	{{ .Content }}
	</article>
    {{ partial "disqus.html" . }}
       </div>
       </div>
    {{ partial "footer.html" . }}
    {{ partial "js.html" . }}
    </body>
	</html>

<h4 class="has-text-centered">list.html</h4>

	<!DOCTYPE html>
	<html>
    <head>
        {{ partial "head.html" . }}
    </head>
    <body>
        {{ partial "navbar.html" . }}
        {{ partial "grid.html" . }}
        {{ partial "footer.html" . }}
        {{ partial "js.html" . }}
    </body>
	</html>

semua file yang dibutuhkan sudah selesai, sekarang buat postingan baru

	$ hugo new post/firs-post.md

pada file <i>/content/first-post.md</i> jangan lupa ubah value <code>draft : true</code> menjadi <code>false</code>.
Oh iya, jika ada yang ingin tema seperti linuxisekai, saya sudah menguploadnya di repo github saya
https://github.com/linuxisekai/hugo-theme-solarized