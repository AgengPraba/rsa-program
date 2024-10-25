# RSA Program

## Anggota Kelompok
| NIM | Nama |
|-----|------|
| H1D022006 | Jehian Athaya T. |
| H1D022009 | Brian Cahya P. |
| H1D022016 | Ageng Praba W. |

## Overview
<div align="justify">
RSA (Rivest-Shamir-Adleman) adalah algoritma kriptografi asimetris yang digunakan untuk mengenkripsi dan mendekripsi pesan dengan menggunakan bilangan prima 1-10000. Program ini mengimplementasikan algoritma RSA untuk keamanan data dengan menggunakan sepasang kunci (public key dan private key). Encode hanya dikonversi menjadi kode ASCII (American Standard Code for Information Interchange) dalam bentuk desimal. Program sederhana ini dibuat untuk tujuan akademik sebagai tugas mata kuliah Kriptografi tahun 2024 di Program Studi Informatika, Universitas Jenderal Soedirman.
</div>

## Fitur
### 1. RSA Key Generation
- Memungkinkan pengguna memilih dua bilangan prima (p dan q) yang berbeda
- Menghasilkan komponen kunci:
  - n (hasil perkalian p dan q)
  - φ(n) = (p-1)(q-1)
  - e (bilangan yang relatif prima dengan φ)
  - d (invers modular dari e)
- Menghasilkan pasangan kunci:
  - Public key (e,n)
  - Private key (d,n)

### 2. RSA Encryption
- Menerima input pesan teks yang akan dienkripsi
- Menampilkan hasil encode pesan dalam format ASCII
- Menghasilkan ciphertext (hasil enkripsi)
- Dilengkapi tombol enkripsi untuk memproses pesan
- Menggunakan public key untuk proses enkripsi

### 3. RSA Decryption
- Menerima input pesan terenkripsi (ciphertext)
- Melakukan proses dekripsi menggunakan private key
- Menampilkan hasil plaintext (pesan asli)
- Dilengkapi tombol dekripsi untuk memproses ciphertext
- Memverifikasi keaslian pesan yang didekripsi

### Fitur Tambahan
- Interface yang user-friendly dengan navigasi mudah
- Validasi input untuk memastikan keamanan
- Tampilan hasil yang terstruktur dan mudah dibaca
- Pemisahan antara proses generate key, enkripsi, dan dekripsi
- Fitur copy hasil enkripsi/dekripsi

### Keamanan
- Menggunakan bilangan prima yang berbeda untuk p dan q
- Validasi input untuk mencegah error
- Penggunaan kunci publik dan privat yang terpisah
- Enkripsi pesan menggunakan algoritma RSA standar

## Cara Kerja RSA

RSA bekerja berdasarkan beberapa prinsip matematika:

1. **Pembangkitan Kunci**
  * Pilih dua bilangan prima besar (p dan q)
  * Hitung n = p × q 
  * Hitung φ(n) = (p-1) × (q-1)
  * Pilih bilangan e yang relatif prima dengan φ(n)
  * Hitung d dimana d × e ≡ 1 (mod φ(n))
  * Kunci publik: (n,e)
  * Kunci privat: (n,d)

2. **Proses Enkripsi**
  * c = m^e mod n
  * Dimana:
     * c = ciphertext (hasil enkripsi)
     * m = plaintext (pesan asli) 
     * e = eksponen enkripsi
     * n = modulus

3. **Proses Dekripsi**
  * m = c^d mod n
  * Dimana:
     * m = plaintext (pesan asli)
     * c = ciphertext (pesan terenkripsi)
     * d = eksponen dekripsi 
     * n = modulus

## Demo Aplikasi
![Demo GIF](demo.gif)
