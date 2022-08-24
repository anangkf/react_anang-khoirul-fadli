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

- **Memulai project**
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


- **Handle perubahan pada project**
	untuk mengetahui perubahan-perubahan yang terjadi pada working directory, kita dapat mengecek dengan mengetik kode berikut pada terminal:
	```bash
	$ git status
	```

	
- **Sinkronisasi**
untuk mensinkronkan repository working


---
<h4  id='sec2'>Git Branch dan Merge</h4>

<h4  id='sec3'>Git Workflow Collaboration</h4>