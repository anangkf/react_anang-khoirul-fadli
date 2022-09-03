##  Bootstrap

Dikutip dari laman web resmi *[Bootstrap](https://getbootstrap.com/)*, Bootstrap adalah Toolkit frontend yang kuat, dapat diperluas, dan penuh fitur. Dapat dibangun dan disesuaikan dengan Sass, manfaatkan sistem dan komponen grid bawaan, dan hidupkan proyek dengan plugin JavaScript yang andal.

---

### What I learn:

- [Menghubungkan Bootstrap ke file HTML](#sec1)

- [Cara Memberikan Styling](#sec2)

- [Menggunakan Template Component Bootstrap](#sec3)

---

<h4  id='sec1'>Menghubungkan Bootstrap ke file HTML</h4>
untuk dapat menghubungkan Bootstrap dengan file HTML kita, ada setidaknya 2 cara:

- menggunakan tag cdn.jsdelivr
	kita dapat menghubungkan Bootstrap secara online dengan memasukkan kode berikut didalam tag head
	```html
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
	```
	cara ini lebih praktis namun akan mengurangi performa web kita karena bergantung pada server getbootstrap.com.
	
- mendownload Bootstrasp dan menghubungkannya secara local
pertaa kita perlu download bootstrap [disini](https://getbootstrap.com/docs/5.2/getting-started/download/) terlebih dahulu. kemudian kita hubungkan bootstrap sama seperti menghubungkan file css biasanya.
	```html
	<link rel="stylesheet" src="bootstrap@5.2.0/dist/css/bootstrap.min.css">
	```
	cara ini memang terkesan lebih ribet, namun dari segi performa jauh lebih baik. Hanya saja apabila ada version update dari bootstrap kita perlu mengaturnya secara manual.

---

<h4  id='sec2'>Cara Memberikan Styling</h4>
untuk menambahkan styling pada bootstrap hampir sama seperti CSS inline style. Bedanya disini kita tidak melakukannya pada attribute style, melainkan pada attribute class. 
contoh:

```html
<p class="text-light bg-dark">.text-light</p>
```
kode diatas akan menampilkan teks paragraf dengan warna putih dan background berwarna hitam. 
Panduan selengkapnya mengenai penamaan class dapat dilihat [disini](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

---  

<h4  id='sec3'>Menggunakan Template Component Bootstrap</h4>

untuk mempermudah dan mempersingkat waktu kerja kita dapat menggunakan template component yang sudah disediakan oleh bootstrap. Lebih jelasnya dapat diakses pada [documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/). Kemudian pada search bar dapat mengetikkan komponen yang dicari. Apabila sudah menemukan komponen yang dimaksud kita dapat copy paste ke tempat kita akan mengaplikasikannya.

 