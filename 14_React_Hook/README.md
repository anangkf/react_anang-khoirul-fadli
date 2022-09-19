##  React Hooks

Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

---

### What I learn:

- [React Hooks](#sec1)
- [Implementasi useState dan useEffect](#sec2)
- [Custom hooks](#sec3)

---

<h4  id='sec1'>React Hooks</h4>

Hooks mulai diperkenalkan pada react v.16.8. karena sulitnya untuk menggunakan kembali statefull logic antar component. Dengan hooks kita dapat menggunakan state pada functional component dan bahkan dengan hooks functional component seolah memiliki lifecycle.

contoh hooks:

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue

#### Aturan hooks

1. Hanya panggil hooks ditingkat atas
2. Hanya panggil hooks dari fungsi-fungsi react

---

<h4  id='sec2'>Implementasi useState dan useEffect</h4>

untuk mengimplementasikan hooks pada functional component kita dapat menaruhnya setelah deklarasi function dan sebelum return. contoh:

```javascript
import { useEffect, useState } from  'react';

export  const  TodoList  = () =>{
	const [todos, setTodos] =  useState(mockTodos);
	const [currentID, setCurrentID] =  useState();

	useEffect(() =>{
		const  lastId  =Number(todos[todos.length  -  1].id);
		setCurrentID(lastId);
	},[todos])
return(
	<>
	</>
	)
};
```

---  

<h4  id='sec3'>Custom hooks</h4>

berbeda dengan state pada class component yang hanya punya 1 deklarasi (state dan setState), pada hooks ini kita dapat membuat custom hooks kita sendiri. contoh:

```javascript
//deklarasi custom hooks
const [modalTrigger, setModalTrigger] =  useState(false);

const  handleModalTrigger  = (e) =>{
	e.preventDefault();
	//mengubah nilai state
	setModalTrigger(!modalTrigger);
}

//mendapatkan nilai state
console.log(modalTrigger)//false
```
