##  GraphQL Mutation

Mutation adalah core feature dari GraphQL yang digunakan untuk memanipilasi data pada database (insert, update, delete). kita akan membahasnya satu-persatu

### What I learn:

- [Mutation: Insert](#sec1)
- [Mutation: Update](#sec2)
- [Mutation: Delete](#sec3)

---

<h4  id='sec1'>Mutation: Insert</h4>

```js
export  const  ADD_PASSENGER  =  gql`
  mutation MyMutation($jenisKelamin: String, $nama: String, $umur: Int) {
	results: insert_passengers(objects: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
	  data: returning {
		id
		jenisKelamin
		namaumur
	  }
	}
  }
`
```

```js
import { useMutation } from  "@apollo/client";

const [addPassenger] =  useMutation(ADD_PASSENGER,{
  refetchQueries:[
	{query:  GET_PASSENGER_LIST}
  ]
})
```
cara memanggil function 

```js
const  handleSubmit  = (e) => {
  e.preventDefault()
  const {nama, umur, jenisKelamin} =  state

  addPassenger ({variables:  state})
}
```

```html
<!--implementasi pada event handler-->
<button  onClick={handleSubmit}>Submit</button>
```

---

<h4  id='sec2'>Mutation: Update</h4>

```js
export  const  UPDATE_PASSENGER  =  gql`
  mutation MyMutation($id: uuid!, $jenisKelamin: String , $nama: String, $umur: Int) {
	results: update_passengers_by_pk(pk_columns: {id: $id}, _set: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
	  id
	  namaumur
	  jenisKelamin
	}
  }
`
```

```js
import { useMutation } from  "@apollo/client";

const [updatePassenger] =  useMutation(UPDATE_PASSENGER)
```

cara memanggil function 

```js
const  handleSubmit  = (e) => {
  e.preventDefault()
  updatePassenger({variables: {id:  passengerDetails.id, ...state}})
}
```

```html
<!--implementasi pada event handler-->
<button  onClick={handleSubmit}>Submit</button>
```

---  

<h4  id='sec3'>Mutation: Delete</h4>

```js
export  const  DELETE_PASSENGER  =  gql`
  mutation MyMutation($id: uuid!) {
	results: delete_passengers_by_pk(id: $id) {
	  id
	  nama
	  umur
	  jenisKelamin
	}
  }
`
```

```js
import { useMutation } from  "@apollo/client";

const [deletePassenger] =  useMutation(DELETE_PASSENGER,{
  refetchQueries:[
	{query:  GET_PASSENGER_LIST}
  ]
})
```

cara memanggil function 

```js
const  handleDelete  = () => {
  deletePassenger({variables: {id:  id}})}
}
```

```html
<!--implementasi pada event handler-->
<button onClick=handleDelete>Hapus</button>
```
