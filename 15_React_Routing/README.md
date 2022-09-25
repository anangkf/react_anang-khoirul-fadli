##  React Routing

React merupakan *Single Page Application(SPA)*, maksudnya react pada dasarnya hanyalah 1 buah file html yang *content*-nya dimanipulasi menggunakan Virtual DOM. Oleh karena itu untuk berpindah dari route satu ke yang lain kita membutuhkan module react-router-dom.

---

### What I learn:

- [React Router](#sec1)
- [Use url params](#sec2)
- [Hook Routing](#sec3)

---

<h4  id='sec1'>React Router</h4>

- untuk mengimplementasikan react router pertama-tama kita perlu menginstall react-router-dom:
	```bash
	npm install react-router-dom --save
	```
kemudian ada 4 jenis react-router:

1. BrowserRouter
2. Switch
3. Route
4. Link

`Link` digunakan untuk berpindah dari page satu ke page yang lain. Tujuannya bisa berupa url link atau router. contoh penggunaan:

```javascript
<Link to=`https://stackedit.io/`>StackEdit</Link>
<Link to=`/produk/`>List Produk</Link>
```

untuk implementasi react-routing kita dapat melihat kode dibawah:
```javascript
import {BrowserRouter, Switch, Route } from 'react-router-dom'

export const Routes = () =>{
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/project" exact component={Project} />
				<Route path="/about" exact component={About) />
			</Switch>
		</BrowserRouter>
	)
}
```

`BrowserRouter` adalah router yang menggunakan API history dari HTML5, berfungsi untuk mensikronkan UI dengan url. Sedangkan `Route` adalah pengatur arah lalu lintas suatu aplikasi web. Attribut `path` merupakan url pada browser sementara attribut `component` menyimpan component yang akan ditampilkan kepada user. Dan `Switch` digunakan untuk membungkus kumpulan `Route`.


---

<h4  id='sec2'>Use url params</h4>

Url params adalah parameter yang nilainya ditetapkan secara dinamis di URL halaman. contoh:
`url/produk/printer-canon`
`url/mobil/avanza`

cara penggunaan pada react-router:
```javascript
	<Route path="/produk/:id" exact component={ProdukDetail) />
	<Route path="/mobil/:name" exact component={MobilDetail) />
```

---  

<h4  id='sec3'>Hook Routing</h4>

ada  hooks routing, yaitu:

1. useHistory: memberi kita akses ke instance riwayatyang dapat digunakan untuk navigasi.
	useHistory memiliki beberapa method:
	- length
	- go
	- goBack
	- goForward
	- push, etc
2. useLocation: mengembalikan objek lokasi saat ini. Ini dapat berguna jika kita ingin melakukan beberapa efek samping setiap kali lokasi saat ini berubah.
3. useParams: mengembalikan objek pasangan kuni/nilai parameter URL. dapat digunkan untuk mengakses matc.params dari `<Route>` saat ini.
4. useRouteMatch: mencoba mencocokkan URL saat ini dengan cara yang sama seperti `<Route>`. Berguna untuk mendapatkan akses ke data yang cocok tanpa benar-benar merender `<Route>`.