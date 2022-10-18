##  Apollo Client and GraphQL Query


### What I learn:

- [GraphQL Query with Apollo Client](#sec1)
- [Apollo Client](#sec2)
- [Apollo Client Hooks](#sec3)

---

<h4  id='sec1'>GraphQL Query with Apollo Client</h4>

Langkah-langkah query dengan apollo client:

1. Pastikan sudah set up React-app dengan Apollo Client.
2. Import gql dan useQuery dari `@apollo/client`.
3. Tulis sintaks *query*-nya:
	```js
	const GetTodoList = gql`
	  query MyQuery{
		todolist{
		  is_done
		  id
		  title
		}
	  }
	`;
	```
4. Get initial data setelah melakukan query kepada server, dengan menggunakan `useQuery`.
	```js
	const {data, loading, error} = useQuery(GetTodoList);
	```
5. Konsumsi data yang didapat dari query
	```jsx
	<ul>
	  {data?.todolist.map((todo) => {
		  return(
			<li key={todo.id}>{todo.title}</li>
		  )
		}
	  }
	</ul>
	```

---

<h4  id='sec2'>Apollo Client</h4>

Apollo Client adalah komprehensif state management library untuk JavaScript yang memungkinkan kita mengelola data lokal dan remote dengan GraphQL. Apollo client digunakan untuk fetch, caching, dan memodifikasi data aplikasi  sekaligus memperbarui UI secara otomatis.

Apollo Client membantu kita menyusun code dengan cara yang ekonomis, predictable, dan deklaratif yang konsisten dengan praktik modern development. Core library @apollo/client menyediakan integrasi bawaan dengan React, dan komunitas Apollo yang lebih besar mempertahankan integrasi untuk lapisan tampilan populer lainnya.

set up apollo client pada react-app:

1. install apollo client dan graphql
	```bash 
	npm install @apollo/client
	```
	
	```bash 
	npm install graphql
	```
2. buat file baru bernama `apollo-client.js` pada folder `src`. tuliskan code berikut:
	```js
	import {ApolloClient, InMemoryCache} from '@apollo/client';
	
	const client = newApolloClient({
	  uri: 'https://todo-anang.hasura.app/api/rest',
	  cache: new  InMemoryCache(),
	  headers:{
	    'x-hasura-admin-secret': '7D9FIOqwykATdAnw02DsElDxajLX3MWmyO3of76Too4m2mtjdithMtWY07HsPiNL'
	  },
	});
	
	export default client;
	```
3. pada file index.js:
	import ApolloProvider dan config apollo client yang telah kita buat sebelumnya:
	```js
	import {ApolloClient} from '@apollo/client'
	import client from './apollo-client'
	```
	
	kemudian bungkus component App dengan `ApolloProvider`
	```js
	ReactDOM.render(
	  <ApolloProvider client={client}>
  	    <React.StrictMode>
		  <App  />
		</React.StrictMode>,
	  </ApolloProvider>
	  document.getElementById('root')
	);
	```

---  

<h4  id='sec3'>Apollo Client Hooks</h4>

untuk query kita hanya akan menggunakan 2 macam hooks:

1. useQuery.
	useQuery adalah hooks yang digunakan untuk memanggil query yang sudah kita buat sebelumnya. useQuery me-*return* beberapa value, antara lain:
		- loading
		- error
		- data
		- previousData
		- refetch
		- networkStatus
		- variables
		- client
		- called
		- fetchMore
		- startPolling
		- subscribeToMore
		- updateQuery

	contoh penggunaan:

	```js
	//value yang dipanggil seperlunya saja, tidak haru semuanya
	const {data, loading, error} = useQuery(GetTodoList);
	```
	
2. useLazyQuery.
	
	useLazyQuery adalah hooks yang digunakan untuk memanggil query, namun bedanya dari useQuery adalah useLazyQuery hanya akan melakukan query jika suatu kondisi terpenuhi. kondisi ini ditentukan sendiri oleh engineer(biasanya berupa event listener). value yang di-*return* useLazyQuery:
		- execute function
		- loading
		- error
		- data
		- previousData
		- refetch
		- networkStatus
		- variables
		- client
		- called
		- fetchMore
		- startPolling
		- subscribeToMore
		- updateQuery

	contoh penggunaan:
	
	```js
	//value yang dipanggil seperlunya saja, tidak haru semuanya
	const [getTodo,{data, loading, error}] = useQuery(GetTodoList);
	```