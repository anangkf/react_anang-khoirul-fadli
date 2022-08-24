## 1 Version Control and Branch Management (Git)

Adalah salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-bersama.
Contoh git hosting service: github, gitlab, bitbucket, etc.

---
### What I learn
- [Bekerja dengan Git](#sec1)
- [Git Branch dan Merge](#sec2)
- [Git Workflow Collaboration](#sec3)

---
<h4  id='sec1'>Bekerja dengan Git</h4>

- **Memulai project**<br>
Setelah git terinstall pada komputer kita, kita dapat memulai sebuah project dengan mengetikkan kode berikut pada terminal:

	```bash
	$ git init
	$ git remote add <remote_name> <remote_repo_url>  
	$ git push -u <remote_name> <local_branch_name>
	```
	atau dapat memulai dengan repository yang telah dibuat:
	```bash
	$ git clone <remote_repo_url>  
	```


- **Handle perubahan pada project**<br>
	untuk mengetahui perubahan-perubahan yang terjadi pada working directory, kita dapat mengecek dengan mengetik kode berikut pada terminal:
	```bash
	$ git status
	```
	perubahan-perubahan yang terjadi hanya ada di working directory kita, tidak pada repository. untuk mensikronkan pertama kita perlu memintahkan file yang terjadi perubahan ke staging area, dengan cara:
		
	```bash
	// untuk add individual file
	$ git add <nama-file>
	
	// untuk add seluruh file yang berubah
	$ git add .
	```		
	file-file yang telah di-add akan berubah status menjadi siap untuk di commit. untuk memastikannya kita dapat mengecek kembali dengan mengetik `$ git status`

	kemudian untuk memindahkan menuju *staging area* kita perlu melakukan comit

	```bash
	$ git commit -m "pesan commit"
	```		
	
- **Sinkronisasi**<br>
untuk mensinkronkan repository dengan working directory kita perlu melakukan push (dengan catatan file yang berubah sudah di commit terlebih dahulu)
	
	```bash
	$ git push origin <nama-branch>
	```	

---
<h4  id='sec2'>Git Branch dan Merge</h4>
*Branch* pada praktiknya sering digunakan untuk memisah-misahkan fokus pengerjaan pada project. Contoh ketika kita ingin menambahkan fitur baru biasanya kita membuat branch baru. Setelah fitur dirasa siap untuk rilis baru kita akan *merge* branch fitur tersebut ke branch utama kita.

- Membuat branch baru
	```bash
	$ git branch <nama-branch>
	```	
- Menampilkan daftar branch
	```bash
	$ git branch
	```	
- Berpindah ke branch lain
	```bash
	$ git checkout <nama-branch>
	```	
- Branch merging<br>
	untuk merge branch kita perlu pindah dulu ke branch utama, kemudian:
	```bash
	$ git merge <nama-branch-yang-akan-dimerge>
	```		
---

<h4  id='sec3'>Git Workflow Collaboration</h4>
Beberapa hal yang perlu diperhatikan agar Project lebih optimal.<br>

1. Proses developmwnt code sebaiknya tidak dilakukan di branch master (branch utama).
2. Ketika akan menambahkan fitur baru usahakan tidak melakukannya di branch yang digunakan untuk proses development. *Best practice*-nya adalah dengan membuat branch baru.
3.  Ketika fitur sudah siap kita bisa merging kedalam branch development. Ingat *hanya kedalam branch development,* **jangan** melakukan merging secara langsung kedalam branch utama(master).
4. Setelah proses develpment siap kita bisa melakukan merging dari branch develpment kedalam branch master.