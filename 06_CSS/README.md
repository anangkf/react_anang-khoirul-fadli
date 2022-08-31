##  HTML

CSS adalah singkatan dari _cascading style sheets_, yaitu bahasa yang digunakan untuk menentukan tampilan dan format halaman website. Dengan CSS, Anda bisa mengatur jenis font, warna tulisan, dan latar belakang halaman.

---

### What I learn:

- [Menambahkan CSS](#sec1)

- [Syntax CSS](#sec2)

- [CSS Selector](#sec3)

---

<h4  id='sec1'>Menambahkan CSS</h4>
Ada 3 cara untuk mengaplikasikan penggunaan CSS kepada file HTML kita:

1. External CSS
caranya adalah dengan membuat file dengan ekstensi `*.css`. kemudian untuk menghubungkannya kita dapat menuliskan kode berikut didalam tag `<head>` pada file html kita:
	```
	<head>
		<link  rel="stylesheet"  href="css/file1.css">
	</head>
	```

2. Internal CSS
caranya adalah dengan menuliskan styling css langsung didalam tag `<style>`. nantinya tag `<style>` dapat kita taruh didalam tag `<head>` atau `<body>`
	```
	<style>
		/* some css stuff */
	</style>
	```

4. Inline CSS 
cara terakhir adalah dengan menuliskan langsung pada attribut `style` didalam elemen html yang akan kita styling
	```
	<p  style="color: red;">Lorem ipsum dolor sit amet.</p>
	```

---

<h4  id='sec2'>Syntax CSS</h4>
CSS ditulis dengan format penulisan seperti berikut:

```css
selector { property:value }
selector { property:value; property:value }
```
contoh:

```css
body{ width: 390px; background-color: green;}
```
---  

<h4  id='sec3'>CSS Selector</h4>
Selektor adalah katakunci dan simbol yang digunakan pada CSS untuk menyeleksi atau memilih elemen HTML yang akan diberi styling.

ada 6 jenis CSS Selector:

1.  Selektor Tag
Selektor ini akan memilih elemen berdasarkan nama tag.
contoh:
	```css
	p {
	    color: blue;
	}
	```

2.  Selektor Class
Selektor class adalah selektor yang memilih elemen berdasarkan nama class yang diberikan. Selektor class dibuat dengan tanda titik (.) di depannya.
contoh:
	```css
	.pink {
	  color: white;
	  background: pink;
	  padding: 5px;
	}
	```

3.  Selektor ID
Selektor ID hampir sama dengan class. Bedanya, ID bersifat unik. Hanya boleh digunakan oleh satu elemen saja.<br>
Selektor ID ditandai dengan tanda pagar (#) di depannya.
contoh:
	```css
	#header {
	    background: teal;
	    color: white;
	    height: 100px;
	    padding: 50px;
	}
	```

4.  Selektor Atribut
Selektor atribut adalah selektor yang memilik elemen berdasarkan atribut. Selektor ini hampir sama seperti selektor Tag.
contoh:
	```css
	input[type=text] {
	    background: none;
	    color: cyan;
	    padding: 10px;
	    border: 1px solid cyan;
	}
	```

5.  Selektor Universal
Selektor universal adalah selektor yang digunakan untuk menyeleksi semua elemen pada jangkaua _(scope)_ tertentu.
contoh:
	```css
	* {
	    border: 1px solid grey;
	}
	```


6.  Selektor Pseudo
Pseudo selektor adalah selektor untuk memilih elemen semu seperti state pada elemen, elemen before dan after, elemen ganjil, dan sebagainya.

	Ada dua macam pseudo selektor:

	-  **pseudo-class**  selektor untuk state elemen;
	contoh:
		```css
		a:hover {
			color: green;
		}
		```
	-  **pseudo-element**  selektor untuk elemen semu di HTML.
	contoh:
		```css
		p::first-line {
			color: magenta;
		}
		```
	