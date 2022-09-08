### Number 1

[soal](https://docs.google.com/document/d/1KLAKKe6OZuQrRjJPlPgT7fj9U44-NWdBPnbBmRP_nbY/edit#heading=h.vkkxyt5lti6m)
- Berapa banyak kesalahan dalam penulisan kode tersebut?.
secara garis besar ada 3.

- Bagian mana saja yang terjadi kekurangan tersebut?.
	1. Penamaan variable, function dan Class.
	2. Pendeklarasian variabel pada Parent Class.
	3. Pendeklarasian child Class.
 
- Tuliskan alasan dari tiap kekurangan tersebut!.
	
#### Penamaan variable, function dan Class.

untuk membedakan antara variable, function dan class. sebaiknya dalam penamaan class diawali dengan huruf kapital. kemudian untuk nama variabel dan function sebaiknya menggunakan camelCase.

 		
| Pada contoh	 | sebaiknya |
| -------------- | ------------- |
| class user {} | class User {} |
| class userservice {} | class UserService {} |
| username | userName |
| getallusers | getAllUsers |
| getuserbyid | getUserById |

----

#### Pendeklarasian variabel pada Parent Class.

pendeklarasian property pada parent class sebaiknya gunakan constructor() method.

| Pada contoh	 | sebaiknya |
| -------------- | ------------- |
| var id; <br> var username; <br> var password; | constructor(id, userName, password) <br> this.id = id; <br> this.userName = userName; <br> this.password = password; |
| class userservice {} | class UserService {} |

---

#### Pendeklarasian child Class. 

pada child class sebaiknya gunakan inheritance. kemudian untuk mendeklarasikan property dan value bisa kita gunakan super() method.

| Pada contoh	 | sebaiknya |
| -------------- | ------------- |
| class userService { <br> user [] users = [] } | class userService extends User {} |
| user [] users = [] | constructor(id, userName, password){ <br> super(id, userName, password)} |
| user [] getAllUsers{} | getAllUsers() =>{} |

---