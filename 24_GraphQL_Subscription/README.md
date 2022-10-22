##  GraphQL Subscription

Subscription adalah core features dari graphql yang digunakan untuk mendapatkan update data secara real-time. subscription membutuhkan web-socket(atau semacamnya) agar dapat bekerja. Subscription bekerja selayaknya refetchQueries pada useMutation. namun dengan subscription data akan didapat secara real-time dan otomatis, tidak perlu me-listen satu-persatu seperti refetchQueries

### What I learn:

- [Setting Subsciption](#sec1)
- [Subscription (useSubscription)](#sec2)
- [Subscription (SubscribeToMore)](#sec3)

---

<h4  id='sec1'>Setting Subsciption</h4>

1. Install subscriptions-transport-ws
	```bash
	npm install @apollo/client subscriptions-transport-ws
	```
2. Import semua module yang dibutuhkan
	```js
	import { ApolloClient, InMemoryCache } from '@apollo/client'
	
	import { split, HttpLink } from '@apollo/client'
	import { getMainDefinition } from '@apollo/client/utilities'
	import { WebSocketLink } from '@apollo/client/link/ws'
	```
3. Separate HTTP Link and Web Socket Link
	```js
	//httpLink
	const httpLink = new HttpLink({
	  uri: 'https://pasenger-list.hasura.app/v1/graphql',
	  headers:{
		'x-hasura-admin-secret': '44jlzWwRf8N8oQxKW87HPVzsjXvTLQIyUm65ajy3Pb6a8BoeF28NdKV3D0vIM4Ap',
	  },
	});

	//wsLink
	const wsLink = new WebSocketLink({
	  uri: 'https://pasenger-list.hasura.app/v1/graphql',
	  options:{
		reconnect: true,
		connectionParams:{
		  headers:{
			'x-hasura-admin-secret': '44jlzWwRf8N8oQxKW87HPVzsjXvTLQIyUm65ajy3Pb6a8BoeF28NdKV3D0vIM4Ap',
		  },
		},
	  },
	});
	```
4. Tambahkan split function, gunakan link ketika create client.
	```js
	const splitLink =  split(
	  ({ query })  =>  {
		const definition =  getMainDefinition(query);
		  return  (
			definition.kind ===  'OperationDefinition'  &&
			definition.operation ===  'subscription'
		  );
	  },
		wsLink,
		httpLink,
	);

	const client = newApolloClient({
	  link: splitlink,
	  cache: InMemoryCache(),
	});

	export default client;
	```
5. 

---

<h4  id='sec2'>Subscription (useSubscription)</h4>

1. define subscription
	```js
	import { useSubscription } from '@apollo/client'
	const subsriptionTodo = gql`
	  subscription MySubscrioption{
		todolist{
		  id
		  is_done
		  title
		}
	  }
	`;
	```
2. Invoke subscription, gunakan object data yang di-*return*
	```jsx
	const {daa, loading, error } = useSubscription(SubscriptionTodo)

	//konsumsi pada UI
	<ul>
	  {data?.todolist.map((todo) =>(
		<Todo
		  key={todo.id}
		  id={todo.id}
		  title={todo.title}
		  checked={todo.is_done}
		/>
	  ))}
	</ul>
	```
---  

<h4  id='sec3'>Subscription (subscribeToMore)</h4>
subscribeToMore adalah sebuah functionyang memungkinkan kita untuk mengeksusekusi subsription. biasanya digunakan untuk subscribe terhadap 1 query yang secara khusus di-*listen* perubahannya.

```js
function TodoList() {
  const {data, loading, error, subscribeToMore } = useQuery(getTodo);

  useEffect(() =>{
	subscribeToMore({
	  document: SubscriptionTodo,
	  updateQuery: (prev, {subscriptionData: {data}}) =>{
		return data;
	  }
	})
  },[]);
}
```
