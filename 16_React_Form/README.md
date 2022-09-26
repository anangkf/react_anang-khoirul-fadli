##  React Form

Form merupakan salah satu hal krusial dalam pengembanan aplikasi website. Form dapat digunakan untuk meng-*handle* inputan dari user.

Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberi *feedback*, memberi data, dll.

---

### What I learn:

- [React Form](#sec1)
- [Controlled & Uncontrolled Component](#sec2)
- [Form Validation](#sec3)

---

<h4  id='sec1'>React Form</h4>
Penggunaan form pada react pada dasarnya sama, hanya saja yang berbeda di react adalah cara kita mendapatkan data hasil inputan dari user. Berikut beberapa elemen yang dapat kita gunakan untuk menyusun form:


| element | type | element | type | element | type |
| --- | --- | --- | --- | --- | --- |
| input | text | input | number |textarea | --- |
| input | color | input | password |button | --- |
| input | checkbox | input | radio |button | submit |
| input | date | input | range |
| input | datetime-local | input | search |
| input | email | input | tel |
| input | file | input | time |
| input | hidden | input | url |
| input | image | input | week |
| input | month | select | --- |


---

<h4  id='sec2'>Controlled & Uncontrolled Component</h4>

#### Uncontrolled Component

untuk mendapatkan value inputan dari uncontrolled component kita dapat menyimpannya menggunakan `ref`. Selain itu kita akan mendapatkan value inputan setelah kita men-*submit* form tersebut. Ini menyebabkan validasi pada form tidak *real-time*(jika ada).
contoh:
```javascript
import React, {useRef} from'react';

export const Form = () =>{
	const input = useRef('');

	const handleSubmit = (e) =>{
		const name = input.current.value;
		console.log(name);
	}

	return(
		<div>
			<input type="text" ref={input} />
			<button onClick={handleSubmit}>Submit</button> 
		</div>
	);
}
```

#### Controlled Component

sementara itu controlled component menerima current value sebagai prop dan ketika ada perubahan pada input akan diterima melalui event handler untuk kemudian diset sebagai current value. **Poin utama** dari konsep ini adalah nilai current value harus disimpan dalam state. Dengan cara seperti ini akan membuat validasi form menjadi *real-time*.
contoh:

```javascript
import React, {useState} from'react';

export const Form = () =>{
	const [input, setInput] = useState('');

	const handleChane = (e) =>{
		setInput(e.target.value);
	}

	return(
		<div>
			<input type="text" value={input} onChange={handleChange} />
		</div>
	);
}
```

---  

<h4  id='sec3'>Form Validation</h4>

validasi digunakan agar data yang diinputkan valid sesuai format, bisa juga untuk melindungi sistem aplikasi. Ada 2 macam validasi yaitu *server-side validation* dan *client-side validation*. *Client-side validation* lebih banyak digunakan karena cara ini lebih *user friendly*.

untuk melakukan validasi (dari sisi cient) kita dapat menggunakan 2 cara, yaitu:

- menggunakan *built-in validation*, antara lain:
	- required
	- minlength
	- maxlength
	- min
	- max
	- type
	- pattern
	
	cara ini lebih simpel, namun kita tidak dapat kustomisasi alert yang muncul ketika validasi tidak terpenuhi.
- menggunakan javascript:
	- onChange: lebih *real-time* karena validasi dilakukan setiap ada perubahan pada form. namun dengan cara ini validasi akan terus-menerus dilakukan jika ada perubahan.
	- onSubmit: dengan cara ini validasi cukup dilakukan sekali ketika tombol submit ditekan. namun perlu diperhatikan validasi akan menjadi tidak *real-time*.