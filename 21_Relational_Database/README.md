##  Relational Database

Database adalah sekumpulan data yang terorganisir. Sedangkan Database relasional adalah kumpulan item data dengan hubungan yang telah ditentukan sebelumnya. Berbagai item ini disusun menjadi satu set tabel dengan kolom dan baris. Tabel digunakan untuk menyimpan informasi tentang objek yang akan direpresentasikan dalam database. Tiap kolom pada tabel memuat jenis data tertentu dan field menyimpan nilai aktual atribut. Baris pada tabel merepresentasikan kumpulan nilai terkait dari satu objek atau entitas. Tiap baris pada tabel dapat ditandai dengan pengidentifikasi unik yang disebut primary key, dan baris di antara beberapa tabel dapat dibuat saling terkait menggunakan foreign key. Data ini dapat diakses dengan berbagai cara tanpa menyusun ulang tabel database itu sendiri.

### What I learn:

- [DDL (Data Definition Language)](#sec1)
- [DML (Data Manipulation Language)](#sec2)
- [DCL (Data Control Language)](#sec3)

---

<h4  id='sec1'>DDL (Data Definition Language)</h4>

merupakan perintah SQL yang berhubungan dengan pendefinisian suatu struktur database. Comth DDL command :

-   CREATE
    -   CREATE DATABASE
    -   CREATE FUNCTION
    -   CREATE INDEX
    -   CREATE PROCEDURE
    -   CREATE TRIGGER
    -   CREATE VIEW
    -   CREATE TABLE

-   RENAME
    -   RENAME TABLE
-   ALTER
    -   ALTER DATABASE
    -   ALTER FUNCTION
    -   ALTER PROCEDURE
    -   ALTER TABLE
    -   ALTER VIEW
-   DROP
    -   DROP DATABASE
    -   DROP FUNCTION
    -   DROP INDEX
    -   DROP PROCEDURE
    -   DROP TABLE
    -   DROP TRIGGER
    -   DROP VIEW

---

<h4  id='sec2'>DML (Data Manipulation Language)</h4>

merupakan perintah SQL yang berhubungan dengan manipulasi atau pengolahan data dalam table. Contoh DML command :

-   SELECT
-   INSERT
-   UPDATE
-   DELETE
	
---  

<h4  id='sec3'>DCL (Data Control Language)</h4>

biasa digunakan untuk merubah hak akses, memberikan roles, dan isu lain yang berhubungan dengan keamanan database. Contoh DCL command :

-   GRANT
    -   GRANT SELECT
    -   GRANT UPDATE
    -   GRANT INSERT
    -   GRANT DELETE
-   REVOKE
    -   REVOKE SELECT
    -   REVOKE DELETE
    -   REVOKE INSERT
    -   REVOKE UPDATE