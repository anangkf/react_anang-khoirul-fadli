##  Event Handling

Event handling adalah cara kita untuk mendengarkan setiap perubahan yang terjadi pada element HTML kita. Dengan event handler kita dapat menginstruksikan program kita melakukan sesuatu ketika user memberikan interaksi. Tujuan utama penggunakan event handler adalah membuat web lebih interaktif dan meningkatkan user experience. Event handler dapat berupa klik, inputan user, hover dll. Lebih lengkap tentang event handler dapat dilihat di [W3School](https://www.w3schools.com/jsref/dom_obj_event.asp).

---

### What I learn:

- [State](#sec1)
- [Statefull dan Stateless](#sec2)
- [Handling events](#sec3)

---

<h4  id='sec1'>State</h4>
adalah **tempat menyimpan nilai property yang dimiliki component tersebut.** Ketika objek state berubah, komponen merender ulang. Kesimpulannya State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan.

cara menggunakan state pada class component adalah dengen memanggil `state`, sedangkan untuk mengubah nilai state menggunakan `setState`. Namun pada class component hanya boleh ada 1 nama state, jika ingin menyimpan multi data kita bisa memasukkannya keadalam object dan menyimpan dengan key yang lebih spesifik. contoh:
```javascript
// mengubah nilai state
this.setState({comment: 'Hello'}); //set state comment menjadi 'Hello'

//mendapatkan nilai state
console.log(this.state.comment) //Hello
```

Namun setelah react v.16.8 state mulai diperkenalkan pada functional component. Dan penggunaan state pada functional component lebih mudah dan bebas dikustomisasi. contoh:
```javascript
//import state module
import { useState } from  'react';

//deklarasi state
const [comment, setComment] = useState("");

//mengubah nilai state
setComment("Hello"); //set state comment menjadi 'Hello'

//mendapatkan nilai state
console.log(comment); //Hello

```

---

<h4  id='sec2'>Statefull dan Stateless</h4>
Sebelum react v.16.8 state hanya bisa digunakan pada class component, sedangkan pada functional component kita hanya dapat menerima transfer data dari props. Dari sinilah muncul istilah statefull dan stateless dengan statefull merujuk pada class component sdangkan stateless merujuk functional component.

Berikut perbedaan statefull dan stateless.

#### Statefull
1. memiliki state
2. memiliki lifecycle
3. tahu alur aplikasi
4. melakukan data fetching
5. berinteraksi dengan aplikasi
6. tidak dapat digunakan kembali
7. meneruskan state dan data ke child component

#### Stateless
1. tidak memiliki state, hanya ada props
2. tidak memiliki lifecycle
3. tidak tahu alur aplikasi
4. tidak melakukan data fetching
5. tujuan utamanya adalah visualisasi data
6. dapat digunakan kembali
7. hanya berkomunikasi dengan parent component-nya

---  

<h4  id='sec3'>Handling events</h4>

event handling pada react hampir sama dengan event handling HTML, hanya saja di react dituliskan dengan camelCase. contoh:

| html | --> | react |
| :--- | :---: | :---|
| onclick | --> | onClick |
| onchange | --> | onChange |
| onsubmit | --> | onSubmit |
| onmouseenter | --> | onMouseEnter |
| onmouseover | --> | onMouseOver |

contoh:
```html
<button onClick={(function(event) {
			console.log(event)
		}
 )}>
  Save
</button>
```