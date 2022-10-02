##  Global State Management and Data Fetching

Global state diperlukan jika aplikasi kita sudah kompleks dan kita perlu menggunakan state pada komponent lain(bukan child nya). Sedangkan data fetching adalah cara kita memperoleh data dari *back-end* dengan dijembatani oleh Restfull API.

---

### What I learn:

- [Redux](#sec1)
- [Persisted State](#sec2)
- [Data Fetching](#sec3)

---

<h4  id='sec1'>Redux</h4>

Redux adalah global state management yang dibuat untuk aplikasi berbasis javascript. Ini berarti Redux dapat digunakan pada react, vue, angular, svelte dan semua framework javascript. Hal inilah yang membuat redux banyak digunakan oleh front-end developer.

#### Kapan kita perlu menggunakan global state

1.  Banyak state yang perlu ditaruh di banyak tempat
2.  State pada app sering berubah
3.  Logic untuk mengubah state kompleks
4.  Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5.  Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

#### Redux terdiri dari 3 bagian utama:

- Actions, adalah objek biasa dengan type field, dan menjelaskan "apa yang terjadi" di aplikasi
- Reducer, adalah fungsi yang menghitung nilai state baru berdasarkan state sebelumnya + actions
- Store, menjalankan rootReducer setiap kali suatu dispatch dipanggil

### Aturan-aturan reducer:

- Seharusnya hanya menghitung `state` baru berdasarkan `state` dan `action`
- Harus membuat pembaruan yang bersifat *immutable* dengan cara menyalin `state` saat ini
- Tidak boleh mengandung *asynchronous logic* atau *side-effects* lainnya
- Redux Toolkit's `createSlice` API menggunakan Immer untuk memungkinkan *mutable update* 

---

<h4  id='sec2'>Persisted State</h4>

Persisted state adalah cara untuk menyimpan setiap perubahan state kedalam local storage. Dengan cara ini perubahan yang telah kita buat tidak akan hilang setelah page di-*reload*

#### Basic usage

```javascript
// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```

Jangan lupa membungkus seluruh komponen dengan `<PersistGate>` agar persisted state dapat berjalan.

```javascript
import { PersistGate } from 'redux-persist/integration/react'

// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
``` 

---  

<h4  id='sec3'>Data Fetching</h4>

Data fetching adalah cara untuk mendapatkan data dari backend. Ada bermacam cara untuk melakukan data fetching dari API. kita dapat menggunakan fetch(vanila js):

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

atau kita dapat menggunakan library untuk mempermudah pekerjaan kita, contoh axios:

` npm install axios`

```javascript
import  axios  from  'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response))
```

untuk melakukan data fetching kita perlu mempelajari tentang http request method. Berikut beberapa method http request yang sering digunakan

-   **GET**: digunakan untuk meminta data server (Read data).
-   **POST**: digunakan untuk mengirim data ke server (Create data)
-   **PUT**: digunakan untuk mengirim data ke server (Update data)
-   **DELETE**: digunakan untuk menghapus data di server
-   **PATCH**: digunakan untuk mengirim data ke server (Update data secara sebagian)