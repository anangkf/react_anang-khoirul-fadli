##  Deploy


### What I learn:

- [Before Deploy](#sec1)
- [Deploy](#sec2)
- [Platform Deploy](#sec3)

---

<h4  id='sec1'>Before Deploy</h4>
Sebelum melakukan deploy sangat disarankan untuk build react-app terlebih dahulu. Build perlu dilakukan karena by default react memberikan banyak warning ketika app berada di fase development. Dengan build ini kita menjadikan react-app kita yang semula versi development menjadi production. Build juga menyebabkan performa app kita menjadi lebih baik.

command untuk build react-app:
`npm run build`

---

<h4  id='sec2'>Deploy</h4>

Deployment bertujuan untuk menyebarkan app yang telah kita buat. sehingga app yang telah kita buat dapat diakses oleh banyak orang. 

sejauh ini ada 2 cara untuk melakukan deploy app:

1. Deployment lewat CLI
2. Deployment secara GUI melalui web platform deployment langsung.

---  

<h4  id='sec3'>Platform Deploy</h4>

Ada begitu banyak platform yang menyediakan jasa deployment. Beberapa platform yang terkenal antara lain:

1. Vercel.
	Vercel adalah platform untuk frontend developer, memberikan kecepatan dan keandalan yang dibutuhkan inovator untuk menciptakan pada saat inspirasi.
2. Netlify.
	Netlify membantu kita untuk build dan deploy app secara instant dari Git repository. Netlify menyediakan custom domain, HTTPS support, deploy preview, rollback, etc
3. Surge.
	Surge adalah layanan static web publishing gratis untuk frontend developer. Surge menerima file HTML, CSS dan JS.
