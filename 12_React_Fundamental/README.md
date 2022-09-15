##  React Fundamental

Reactjs adalah library javascript untuk membuat UI. React memiliki konsep lifecycle, yaitu mulai dari mounting component, updating component hingga fase unmounting. Kemudian react juga memiliki konsep reusable component. Dengan reusable component memudahkan kita dalam membangun UI karena meminimalisir penulian ulang kode untuk elemen/component yang sama.

---

### What I learn:

- [Making UI with React](#sec1)
- [Directory structure](#sec2)
- [Styling React component](#sec3)

---

<h4  id='sec1'>Making UI with React</h4>

Ketika kita akan membuat aplikasi menggunakan react, kita dapat memisahkan design halaman menjadi komponen-komponen kecil yang nantinya akan mempercepat proses development karena saat membutuhkan komponen yang sama kita tinggal import komponen tersebut. Kemudian untuk penyesuaian isi komponen kita dapat memanfaatkan props.
  
---

<h4  id='sec2'>Directory structure</h4>

Pada React tidak ada aturan khusus untuk susunan direktori, namun untuk *best practice*-nya kita dapat mengikuti pedoman berikut:
	
1. Pengelompokan berdasarkan fitur atau rute.
2. Pengelompokan berdasarkan jenis file.
3. Hindari terlalu banyak nesting.

---  

<h4  id='sec3'>Styling React component</h4>

Untuk memberikan *styling* pada component react kita dapat melakukannya dengan beberapa cara berikut:

1. Classes dan CSS.
	jika disamakan dengan konsep styling HTML mungkin Classes dan CSS serupa dengan external CSS. yaitu kita membuat style pada file style.css kemudian kita tinggal import dan apply pada component.
2. Attribute style.
	jika disamakan dengan konsep styling HTML mungkin Classes dan CSS serupa dengan konsep inline styling. yaitu kita dapat memberikan styling pada atribut `style`, namun perlu digaris bawahi dalam jsx penulisan styling dilakukan didalam 2 buah *curly-bracket* dan menggunakan penulisan camelCase. contoh:

	```html
	<button style={{backgroundColor: 'red'}}>Tombol</button>
	```
3. Modul CSS.
	penggunaan modul CSS dapat dikatakan adalah cara terbaik untuk memberikan styling pada component. secara konsep cara ini sama dengan Classes dan CSS. Namun penamaan file-nya menjadi `style.module.css`. Namun dengan modul CSS, untuk mengaplikasikan styling pada sebuah component perlu kita set. Sehingga akan memudahkan kita dalam me-*maintance* styling.