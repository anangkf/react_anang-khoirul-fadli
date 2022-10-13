##  Testing

Testing adalah proses verifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di code kita.

---

### What I learn:

- [Manfaat Testing](#sec1)
- [Kategori Testing](#sec2)
- [Testing tools](#sec3)

---

<h4  id='sec1'>Manfaat Testing</h4>

- Ketika aplikasi kita memiliki coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa lebih percaya diri ketika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug. 



---

<h4  id='sec2'>Kategori Testing</h4>

Secara umum cara testing pada react dibagi menjadi 2 kategori:

-  Rendering component trees didalam environment test yang sudah disederhanakan dan ditegaskan pada keluarannya.
- menjalankan aplikasi lengkap didalam environment peramban asli(browser). cara ini biasa dikenal sebagai *end-to-end testing*.

---  

<h4  id='sec3'>Testing tools</h4>

ada beberapa testing tools yang sering digunakan untuk react: 

1. Jest
2. Mocha
3. Selenium
4. Jasmine
5. React Testing Library
untuk testing custom hooks dapat menggunakan:
1. React Hooks Testing Library