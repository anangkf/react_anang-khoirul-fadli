##  GraphQL Basic

GraphQL adalah query language untuk API dan runtime untuk memenuhi query tersebut dengan data yang ada. GraphQL memberikan deskripsi data yang lengkap dan mudah dipahami di API, memberikan kekuatan untuk menanyakan apa yang dibutuhkan dan tidak lebih, mempermudah pengembangan API dari waktu ke waktu, dan memungkinkan developer tools yang powerfull.

### What I learn:

- [GraphQL Core Features](#sec1)
- [Basic Query](#sec2)
- [Apollo GraphQL](#sec3)

---

<h4  id='sec1'>GraphQL Core Features</h4>

salah satu yang membedakan antara Rest API dengan GraphQL adalah feature yang disajikan. Jika Rest API melakukan komunikasi dengan end-user menggunakan HTTP Method(Get, Post, Put, Delete, etc), GraphQL menggunakan 3 feature mereka, yaitu:

1.  Query, untuk get data berdasarkan specific query yang didefinisikan
2.  Mutation, untuk manipulasi data layaknya insert, update, delete
3. Subscription, untuk get updated data secara realtime / berdsarkan events

---

<h4  id='sec2'>Basic Query</h4>

1. Query.
	GraphQL Query
	```graphql
	{
	  query getMovies{
		movies {
		  id
		  title
		}
	  }
	}
	```
	GraphQL Result
	```json
		{
		  movies: [{
			id: 1,
			title: “Batman”,
		  }]
		}
	```
2. Mutation Insert
	```graphql
		mutation insertMovie{
		  insert_movie(
			objects: {
			  title: "Something",
			  description:"New Movies" 
			}
		  ){
			returning {
			  id
			}
		  }
		}
	```
3. Mutation Update
	```graphql
		mutation updateMovie($id = Int!, $title: String, $description: String){
		  update_movie(
		    where: {id: {_eq: $id}}, 
		    _set: {
			  title: $title, 
			  description: $description 
			}){
			returning {
			  id,
			  title,
			  description 
			}
		  }
		}
	```

4. Mutation Delete
	```graphql
		mutation deleteMovie($id = Int!){
		  delete_movie( where: {id: {_eq: $id}}}) {
			returning {
			  id
			}
		  }
		}
	```
5. Subscription
	```graphql
		subscription subscripMovie {
		  movies {
			id,
			title,
			description
		  }
		}
	```
	
---  

<h4  id='sec3'>Apollo GraphQL</h4>

Adalah aplikasi modern yang dibangun berdasarkan supergraph, yang menyatukan semua data dan layanan cloud ke dalam satu map yang terhubung dan dapat dikueri oleh developer dengan GraphQL. **Atau kita dapat menyebut** Apollo GraphQL ini adalah evolusi dari Rest API.