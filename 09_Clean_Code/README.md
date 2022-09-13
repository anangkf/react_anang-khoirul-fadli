##  Clean Code

Clean Code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer.

---

### What I learn:

- [Why Clean Code?](#sec1)

- [Clean Code Characteristics](#sec2)

- [Prinsip Clean Code](#sec3)

---

<h4  id='sec1'>Why Clean Code?</h4>

Ada 3 alasan utama mengapa kita perlu menuliskan Clean Code:

1. Work Collaboration.
	ketika kamu bekerja secara team, belum tentu rekanmu dapat dengan mudah mengerti apa yang kamu tuliskan. Dengan clean code akan memudahkan rekanmu dalam memahami alur code yang kamu buat.
	
2. Feature Development.
	kamu mungkin masih dapat memahami code yang baru saja kamu buat. namun apa yang terjadi setelah beberapa bulan? atau bahkan beberapa tahun?. Ketika kita diminta untuk melakukan pengembangan feature tentu perlu waktu untuk kita memahami kembali flow code kita. namun jika kita menuliskannnya dengan clean code akan memudahkan kita memahami kembali flow code kita.
	
3. Faster Development.
	Seperti yang sudah dijelaskan pada kedua poin diatas, penulisan clean code akan mempercepat proses pengembangan dari segi apapun. Clean Code akan membuat proses pengembangan lebih efisisen karena flow code jelas dan mudah dipahami.

---

<h4  id='sec2'>Clean Code Characteristics</h4>

penamaan variable, function, object dll harus:
1. Mudah dipahami.
2. Mudah dieja dan dicari.
3. Singkat namun mendeskripsikan konteks.
4. Konsisten (dari segi penamaan harus konsisten dalam pemilihan case).
5. Hindari penambahan konteks yang tidak perlu.
6. Berikan komentar seperlunya (komentar yang baik adalah yang singkat dan mewakili apa yang dimaksud).

pada function harus:

7. Jangan terlalu banyak menggunakan parameter.
	jika memang diperlukan banyak parameter, kita dapat memasukkannya kedalam object.
	
8. Gunakan konvensi.
	maksudnya adalah kita menggunakan style coding yang sudah banyak digunakan developer. referensi: [airbnb](https://github.com/airbnb/javascript).

9. Formatting.
 
	saran formatting: 
	- lebar baris kode 80-120 karakter.
	- satu class 300-500 baris.
	- baris kode yang berhubungan saling berdekatan .
	- dekatan function dengan pemanggilnya.
	- deklarasi variabel berdekatan dengan penggunaannya.
	- perhatikan indentasi.
	- menggunakan prettier atau formatter.

---  

<h4  id='sec3'>Prinsip Clean Code</h4>

1. KISS (Keep It So Simple).
	hindari membuat function yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek function C, dst.

	- function atau class harus kecil
	- function dibuat untuk melakukan 1 tugas saja
	- jangan gunakan terlalu banyak argumen pada function
	- harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal
2. DRY (Don't Repeat Yourself).
	duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah function yang dapat digunakan berulang-ulang.
3.  Refactoring.
	Refactoring adalah proses restrukturisasi code yang dibuat, dengan cara megubah struktur internaltanpa mengubah perilaku eksternal. Prinsip KISS dan DRY dapat dicapai dengancara refaktor.
	
	Teknik Refactoring:
	
	- membuat sebuah abstraksi.
	- memecah code dengan function atau class.
	- perbaiki penamaan dan lokasi code.
	- deteksi code yang memiliki duplikasi.