---
title: "Mencoba i3wm"
date: 2019-06-27T10:10:59+07:00
draft: false
image: "/img/post/menhara.webp"
tags: ["i3","linux"]
description: "setelah sekian lama bersama dengan openbox, kini sepertinya saya harus selinkuh dengan i3,
hal ini karena saya merasa"
---

### intro

setelah sekian lama bersama dengan openbox, kini sepertinya saya harus selinkuh dengan i3,
hal ini karena saya merasa openbox gagal memuaskan saya saat menjalankan banyak aplikasi sekaligus,
saya harus menggeser touchpad unutk meminimaze aplikasi auatu meutup aplikasi saya juga harus menggeser touchpad lagi unutk membuka jendela yang diminimize, berapa banyak waktu yang terbuang hanya untuk menggeser touchpad ? huuh!!! sangat tidak praktis i3. masalah itu membuat saya melirik windows manager lain dan pilihan saya jatuh kepada i3. i3 sendiri merupakan tiling windows manager yang artinya fungsi-fungsi unutk mengontrol jendela aplikasi menggunakan kombinasi keyboard. dengan i3 maslah yang ada pada openbox sudah teratasi, gomenasai openbox 😕.

### install

	sudo pacman -S i3 feh suckless-tools zsh rofi lxappearance redshift

<ul>
	<li>i3 : windows manager yang akan kinakan</li>
	<li>feh :  unutk mengatur background</li>
	<li>suckless-tools: aplikasi utility dari suckless.org</li>
	<li>zsh : sebagai shell menggantikn bash</li>
	<li>rofi : launcher aplikasi</li>
	<li>lxappearance : unutk mennganti teme, font, icon dan lain-lain</li>
	<li> redshift : untuk memfilter cahaya biru pada monitor ( mode malam )</li>
</ul>

saya juga membutuhkan aplikasi lain yang ada di AUR

	yay -S networkmanager_dmenu polybar clearine-git

<ul>
	<li>networkmanager_dmenu : ssebagai network manager</li>
	<li>polybar : sebagai bar/panel</li>
	<li>clearine : sebagai logout UI buatan</li>
</ul>

konfigurasi i3 terletak pada ~/.i3 atau ~/.config/i3, saya sendiri lebih memilih di .config/i3 agar folder home saya lebih bersih.

	mkdir ~/.config/i3
	touch ~/.config/i3/config

#### Autostart aplication

	exec --no-startup-id ~/.config/polybar/launch.sh
	exec --no-startup-id feh --bg-scale ~/Pictures/dek.png
	exec --no-startup-id redshift

#### set font

	set $ft pango: ubuntumono Nerd Font 12
	font $ft

#### set tampilan

	# border jendela
	new_window pixel 3
	new_float pixel 3

	# ukuran minimum jendela saat mode floating
	floating_minimum_size 10x10

	# ukuran maximum jendela saat mode floating
	floating_maximum_size -1x-1

	# mengatur fokus jendela mengikuti mouse ubah ke 'yes' untuk mengaktifkanyas
	focus_follows_mouse no

	# Mengambil warna dari .Xresources
	set_from_resource $back			i3wm.background 
	set_from_resource $black		i3wm.color0		
	set_from_resource $grey			i3wm.color8		
	set_from_resource $lightgrey	i3wm.color7		
	set_from_resource $white		i3wm.color15	
	set_from_resource $yellow		i3wm.color11	
	set_from_resource $red			i3wm.color9	
	set_from_resource $darkred		i3wm.color1		
	set_from_resource $green		i3wm.color10	

	# mengatur warna border, backgound, dan text
	#class                  	border      backgr.     text        split
	client.focused          	$green     	$green      $black      $red
	client.focused_inactive		$green      $grey       $lightgrey  $grey
	client.unfocused        	$green      $grey       $lightgrey  $grey
	client.urgent           	$green     	$red        $black      $red
	client.background       	$back

#### Keybinds untuk aplikasi

	# Mod4 = Win key
	set $mod Mod4
	# jika kalian  lebih suka menggunakan tombol alt
	# Mod1 = alt
	# set $mod Mod1

	# Terminal (mod+Enter)
	bindsym $mod+Return exec xst
	# Networkmanager_dmenu (mod+alt+p)
	bindsym $mod+Mod1+p exec networkmanager_dmenu
	# lxappearance (mod+alt+a)
	bindsym $mod+Mod1+a exec lxappearance
	# QT5 (mod+alt+q)
	bindsym $mod+Mod1+q exec qt5ct
	# Gcolor2 (mod+alt+g)
	bindsym $mod+Mod1+g exec gcolor2
	# rofi (mod+w)
	bindsym $mod+w exec rofi -show drun
	# clearine (mod+c)
	bindsym	$mod+c exec clearine

	# Multimedia control

	# f8 (volume up)
	bindsym XF86AudioRaiseVolume exec "amixer sset Master 5%+"
	# f7 (volume down)
	bindsym XF86AudioLowerVolume exec "amixer sset Master 5%-"
	# f6 (mute)
	bindsym XF86AudioMute exec "amixer -q sset Master toggle"
	# f3 ( brightness up)
	bindsym XF86MonBrightnessDown exec "light -U 5"
	# f2 ( brightness down)
	bindsym XF86MonBrightnessUp exec "light -A 5"
	# f10 ( ncmpcpp (music player) play)
	bindsym XF86AudioPlay exec ncmpcpp toggle
	# f10 ( ncmpcpp (music player) pause)
	bindsym XF86AudioStop exec ncmpcpp stop
	# f9 ( ncmpcpp (music player) prev)
	bindsym XF86AudioPrev exec ncmpcpp prev
	# f11 ( ncmpcpp (music player) next)
	bindsym XF86AudioNext exec ncmpcpp next

#### keybinds unutk i3

	# menutup jendela aplikasi (mod+q)
	bindsym $mod+q kill

	# Fokus jendela aplikasi
	bindsym $mod+Left focus left
	bindsym $mod+Down focus down
	bindsym $mod+Up focus up
	bindsym $mod+Right focus right

	# Memindahkan jendela aplikasi
	bindsym $mod+Shift+Left move left
	bindsym $mod+Shift+Down move down
	bindsym $mod+Shift+Up move up
	bindsym $mod+Shift+Right move right

	# horizontal mode (mod+h)
	bindsym $mod+h split h

	# vertikal mode (mod+v)
	bindsym $mod+v split v

	# Fullscreen mode (mod+f)
	bindsym $mod+f fullscreen

	# layout mode (stacked (mod+s), tabbed (mod+t), default(mod+e))
	bindsym $mod+s layout stacking
	bindsym $mod+t layout tabbed
	bindsym $mod+e layout default

	# mode tiling / floating (mod+shitf+space)
	bindsym $mod+Shift+space floating toggle
	bindsym $mod+Mod1+space floating toggle

	# mengubah fokus saat mode tiling / floating (mod+space)
	bindsym $mod+space focus mode_toggle

	# focus parent container (mod+a)
	bindsym $mod+a focus parent

	# focus child container (mod+z)
	bindsym $mod+z focus child

	# Berpindah workspace
	bindsym $mod+1 workspace 1:term
	bindsym $mod+2 workspace 2:www
	bindsym $mod+3 workspace 3:vbox
	bindsym $mod+4 workspace 4:vnc
	bindsym $mod+5 workspace 5:vid
	bindsym $mod+6 workspace 6:img
	bindsym $mod+7 workspace 7:misc
	bindsym $mod+8 workspace 8
	bindsym $mod+9 workspace 9
	bindsym $mod+0 workspace 10:float

	# memindahkan jendela aplikasi ke workspace tertentu
	bindsym $mod+Shift+1 move container to workspace 1:term
	bindsym $mod+Shift+2 move container to workspace 2:www
	bindsym $mod+Shift+3 move container to workspace 3:vbox
	bindsym $mod+Shift+4 move container to workspace 4:vnc
	bindsym $mod+Shift+5 move container to workspace 5:vid
	bindsym $mod+Shift+6 move container to workspace 6:img
	bindsym $mod+Shift+7 move container to workspace 7:misc
	bindsym $mod+Shift+8 move container to workspace 8
	bindsym $mod+Shift+9 move container to workspace 9
	bindsym $mod+Shift+0 move container to workspace 10:float

	# reload konfigurasi i3
	bindsym $mod+Shift+c reload
	# restart i3 (mod+shitf+r)
	bindsym $mod+Shift+r restart


	# resize (mod+r)
	mode "resize" {

	# menggunkann tombol a,s,w,d
  	bindsym a resize shrink width 10 px or 10 ppt
  	bindsym s resize grow height 10 px or 10 ppt
  	bindsym w resize shrink height 10 px or 10 ppt
  	bindsym d resize grow width 10 px or 10 ppt

	# menggunakan tombol arah
  	bindsym Left resize shrink width 1 px or 1 ppt
  	bindsym Down resize grow height 1 px or 1 ppt
  	bindsym Up resize shrink height 1 px or 1 ppt
  	bindsym Right resize grow width 1 px or 1 ppt

	# keluar dari mode resize 
 	bindsym Return mode "default"
  	bindsym Escape mode "default"
	}
	# resize mode
 	bindsym $mod+r mode "resize"

#### Full configurasi

	exec --no-startup-id ~/.config/polybar/launch.sh
	exec --no-startup-id feh --bg-scale ~/Pictures/dek.png
	exec --no-startup-id redshift

	set $ft pango: ubuntumono Nerd Font 12
	font $ft

	# border jendela
	new_window pixel 3
	new_float pixel 3

	# ukuran minimum jendela saat mode floating
	floating_minimum_size 10x10

	# ukuran maximum jendela saat mode floating
	floating_maximum_size -1x-1

	# mengatur fokus jendela mengikuti mouse ubah ke 'yes' untuk mengaktifkanyas
	focus_follows_mouse no

	# Mengambil warna dari .Xresources
	set_from_resource $back			i3wm.background 
	set_from_resource $black		i3wm.color0		
	set_from_resource $grey			i3wm.color8		
	set_from_resource $lightgrey	i3wm.color7		
	set_from_resource $white		i3wm.color15	
	set_from_resource $yellow		i3wm.color11	
	set_from_resource $red			i3wm.color9	
	set_from_resource $darkred		i3wm.color1		
	set_from_resource $green		i3wm.color10	

	# mengatur warna border, backgound, dan text
	#class                  	border      backgr.     text        split
	client.focused          	$green     	$green      $black      $red
	client.focused_inactive		$green      $grey       $lightgrey  $grey
	client.unfocused        	$green      $grey       $lightgrey  $grey
	client.urgent           	$green     	$red        $black      $red
	client.background       	$back

	# Mod4 = Win key
	set $mod Mod4
	# jika kalian  lebih suka menggunakan tombol alt
	# Mod1 = alt
	# set $mod Mod1

	# Terminal (mod+Enter)
	bindsym $mod+Return exec xst
	# Networkmanager_dmenu (mod+alt+p)
	bindsym $mod+Mod1+p exec networkmanager_dmenu
	# lxappearance (mod+alt+a)
	bindsym $mod+Mod1+a exec lxappearance
	# QT5 (mod+alt+q)
	bindsym $mod+Mod1+q exec qt5ct
	# Gcolor2 (mod+alt+g)
	bindsym $mod+Mod1+g exec gcolor2
	# rofi (mod+w)
	bindsym $mod+w exec rofi -show drun
	# clearine (mod+c)
	bindsym	$mod+c exec clearine

	# Multimedia control

	# f8 (volume up)
	bindsym XF86AudioRaiseVolume exec "amixer sset Master 5%+"
	# f7 (volume down)
	bindsym XF86AudioLowerVolume exec "amixer sset Master 5%-"
	# f6 (mute)
	bindsym XF86AudioMute exec "amixer -q sset Master toggle"
	# f3 ( brightness up)
	bindsym XF86MonBrightnessDown exec "light -U 5"
	# f2 ( brightness down)
	bindsym XF86MonBrightnessUp exec "light -A 5"
	# f10 ( ncmpcpp (music player) play)
	bindsym XF86AudioPlay exec ncmpcpp toggle
	# f10 ( ncmpcpp (music player) pause)
	bindsym XF86AudioStop exec ncmpcpp stop
	# f9 ( ncmpcpp (music player) prev)
	bindsym XF86AudioPrev exec ncmpcpp prev
	# f11 ( ncmpcpp (music player) next)
	bindsym XF86AudioNext exec ncmpcpp next

	# menutup jendela aplikasi (mod+q)
	bindsym $mod+q kill

	# Fokus jendela aplikasi
	bindsym $mod+Left focus left
	bindsym $mod+Down focus down
	bindsym $mod+Up focus up
	bindsym $mod+Right focus right

	# Memindahkan jendela aplikasi
	bindsym $mod+Shift+Left move left
	bindsym $mod+Shift+Down move down
	bindsym $mod+Shift+Up move up
	bindsym $mod+Shift+Right move right

	# horizontal mode (mod+h)
	bindsym $mod+h split h

	# vertikal mode (mod+v)
	bindsym $mod+v split v

	# Fullscreen mode (mod+f)
	bindsym $mod+f fullscreen

	# layout mode (stacked (mod+s), tabbed (mod+t), default(mod+e))
	bindsym $mod+s layout stacking
	bindsym $mod+t layout tabbed
	bindsym $mod+e layout default

	# mode tiling / floating (mod+shitf+space)
	bindsym $mod+Shift+space floating toggle
	bindsym $mod+Mod1+space floating toggle

	# mengubah fokus saat mode tiling / floating (mod+space)
	bindsym $mod+space focus mode_toggle

	# focus parent container (mod+a)
	bindsym $mod+a focus parent

	# focus child container (mod+z)
	bindsym $mod+z focus child

	# Berpindah workspace
	bindsym $mod+1 workspace 1:term
	bindsym $mod+2 workspace 2:www
	bindsym $mod+3 workspace 3:vbox
	bindsym $mod+4 workspace 4:vnc
	bindsym $mod+5 workspace 5:vid
	bindsym $mod+6 workspace 6:img
	bindsym $mod+7 workspace 7:misc
	bindsym $mod+8 workspace 8
	bindsym $mod+9 workspace 9
	bindsym $mod+0 workspace 10:float

	# memindahkan jendela aplikasi ke workspace tertentu
	bindsym $mod+Shift+1 move container to workspace 1:term
	bindsym $mod+Shift+2 move container to workspace 2:www
	bindsym $mod+Shift+3 move container to workspace 3:vbox
	bindsym $mod+Shift+4 move container to workspace 4:vnc
	bindsym $mod+Shift+5 move container to workspace 5:vid
	bindsym $mod+Shift+6 move container to workspace 6:img
	bindsym $mod+Shift+7 move container to workspace 7:misc
	bindsym $mod+Shift+8 move container to workspace 8
	bindsym $mod+Shift+9 move container to workspace 9
	bindsym $mod+Shift+0 move container to workspace 10:float

	# reload konfigurasi i3
	bindsym $mod+Shift+c reload
	# restart i3 (mod+shitf+r)
	bindsym $mod+Shift+r restart


	# resize (mod+r)
	mode "resize" {

	# menggunkann tombol a,s,w,d
  	bindsym a resize shrink width 10 px or 10 ppt
  	bindsym s resize grow height 10 px or 10 ppt
  	bindsym w resize shrink height 10 px or 10 ppt
  	bindsym d resize grow width 10 px or 10 ppt

	# menggunakan tombol arah
  	bindsym Left resize shrink width 1 px or 1 ppt
  	bindsym Down resize grow height 1 px or 1 ppt
  	bindsym Up resize shrink height 1 px or 1 ppt
  	bindsym Right resize grow width 1 px or 1 ppt

	# keluar dari mode resize 
 	bindsym Return mode "default"
  	bindsym Escape mode "default"
	}
	# resize mode
 	bindsym $mod+r mode "resize"

