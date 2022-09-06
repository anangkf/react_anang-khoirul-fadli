##  Javascript Refreshment

Dikutip dari https://developer.mozilla.org/en-US/docs/Web/JavaScript, **JavaScript** (**JS**) is a lightweight, interpreted, or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled programming language with [first-class functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function).
While it is most well-known as the scripting language for Web pages, [many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) also use it, such as [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js), [Apache CouchDB](https://couchdb.apache.org/) and [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript is a [prototype-based](https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming), multi-paradigm, [single-threaded](https://developer.mozilla.org/en-US/docs/Glossary/Thread), [dynamic](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing) language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

---

### What I learn:

- [Basic Javascript](#sec1)

- [Javascript Asynchronous](#sec2)

- [Javascript DOM](#sec3)

---

<h4  id='sec1'>Basic Javascript</h4>

- **Data types**
	Data types pada javascript secara garis besar dibagi dalam 2 jenis, yaitu"
	1. Tipe data primitive.
		tipe data primitif adalah adalah **tipe data sederhana yang hanya memiliki sebuah value dan tidak memiliki property maupun method**. 
		
		contoh tipe data priitive:
		- String
		- Number
		- Boolean
		- undefined
		- null
		- Symbol
		
	2. Tipe data non-primitive. 
		Tipe data non-primitif dapat menyimpan lebih dari satu nilai pada satu waktu dan dapat diubah. Tipe data non-primitif akan dianggap berbeda meskipun nilainya sama dan dalam urutan yang sama.

		contoh tipe data non-primitif:
		- Object
		- Array
		- Function

- **Declaring Variable**
	Pada Javascript ada 3 cara untuk mendeklarasikan variabel:
	1. var
	2. let
	3. const

	berikut adalah tabel perbedaan antara ketiganya:

	|  --------------------- | var |  let | const |
	|-----------------------|:----:|:----:|:----:|
	| **global scope**      | yes | no |no |
	| **function scope**    | yes | yes | yes |
	| **block scope**       | no | yes | yes |
	| **can be reassigned** | yes | yes | no |
	| **can be redeclare**  | yes | no |no |
	| **can be hoisted**    | yes | no |no |


---

<h4  id='sec2'>Javascript Asynchronous</h4>
Asynchronous adalah sebuah konsep pada pemrograman. Proses asynchronous sering digunakan untuk komunikasi data, karena data menjadi bagian inti dari sebuah aplikasi maka konsep asynchronous sangat penting untuk dipahami. <br>
Pada konsep asynchronous, code akan dieksekusi tanpa menunggu eksekusi code lain selesai sehingga seakan-akan dieksekusi secara bersamaan.

Ada 3 teknik yang digunakan untuk menghandle proses asynchronous pada JavaScript:

1.  Callback
2.  Promise
3.  Async Await

---  

<h4  id='sec3'>Javascript DOM</h4>

Javascript DOM (_Document Object Model_) adalah _interface_ yang memungkinkan _developer_ untuk memanipulasi konten, struktur, dan _style_ situs web. 

Berikut methods yang dapat kita gunakan untuk manipulasi DOM:

1. getElementById
	```
	var title = document.getElementById(‘header-title’);
	```
2. getElementsByTagName
	```
	var listItems = document.getElementsByTagName(‘li’);
	```
3. getElementsByClassName
	```
	var items = document.getElementsByClassName(‘list-items’);
	```
4. querySelector
	```
	var items = document.querySelector(‘.list-items’)
	```
6. querySelectorAll
	```
	var heading = document.querySelectorAll(‘h1.heading’);
	```