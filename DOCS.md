# Dokumentasi Pekerjaan

## i. Penjelasan singkat tentang web yang dibuat
Aplikasi ini adalah web profil/landing page yang dibangun menggunakan Next.js (App Router). Halaman utama menampilkan informasi inti proyek, aset visual, dan integrasi autentikasi agar akses pengguna dapat dikelola dengan rapi.

Secara umum, aplikasi memanfaatkan server rendering bawaan Next.js untuk performa yang baik, serta pemisahan komponen client/server agar alur data dan session lebih terstruktur.

## ii. Komponen yang digunakan
Berikut komponen dan berkas utama yang digunakan:

- `app/layout.tsx`
  - Layout global aplikasi.
  - Menyediakan struktur HTML dasar, styling global, dan pembungkus provider jika diperlukan.

- `app/page.tsx`
  - Halaman utama (landing/home page).
  - Menampilkan konten utama yang dilihat pengguna saat membuka aplikasi.

- `app/SessionProvider.tsx`
  - Komponen provider session untuk sisi client.
  - Digunakan agar data login pengguna dapat diakses dari komponen React lain melalui konteks session.

- `app/auth-config.ts`
  - Konfigurasi autentikasi (provider, callback, dan aturan session) untuk NextAuth.
  - Menjadi pusat pengaturan login dan data user yang disimpan pada session/token.

- `app/api/auth/[...nextauth]/route.ts`
  - Endpoint API route untuk proses autentikasi NextAuth (sign in, callback, session, sign out).
  - Menangani alur request auth pada App Router.

- `app/globals.css`, `tailwind.config.ts`, `postcss.config.mjs`
  - Styling global dan utilitas UI berbasis Tailwind CSS.

- Folder `public/` (termasuk `public/team/*.jpg`, `google.png`, dan aset SVG)
  - Menyediakan aset statis gambar/ikon untuk tampilan antarmuka.

## iii. Mekanisme autentikasi dan otorisasi
### 1) Autentikasi
Proyek menggunakan **NextAuth** pada App Router. Mekanismenya secara ringkas:

1. Pengguna memilih metode login sesuai provider yang dikonfigurasi pada `app/auth-config.ts`.
2. NextAuth memproses login melalui endpoint `app/api/auth/[...nextauth]/route.ts`.
3. Jika berhasil, session dibuat dan disimpan sesuai strategi session yang ditetapkan (misalnya JWT/database, tergantung konfigurasi di `auth-config.ts`).
4. `SessionProvider` mendistribusikan data session ke komponen client agar status login bisa dipakai di UI.

### 2) Otorisasi
Otorisasi dilakukan dengan memeriksa status session dan/atau atribut user (misalnya role/email) pada:

- Komponen server/client yang membutuhkan proteksi halaman.
- Callback NextAuth (misalnya pada `jwt`/`session`) untuk menyisipkan data hak akses.
- Kondisi rendering UI (contoh: tombol/fitur tertentu hanya tampil jika user sudah login).

Prinsip implementasi:

- **Belum login** -> diarahkan untuk sign in atau hanya mendapat akses konten publik.
- **Sudah login** -> dapat mengakses fitur yang mensyaratkan autentikasi.
- **Jika role diterapkan** -> akses fitur dibatasi sesuai peran (contoh: admin vs user biasa).

### 3) Ringkasan alur authz/authn
- Login diverifikasi oleh NextAuth.
- Session aktif menjadi dasar identitas pengguna selama berinteraksi dengan web.
- Pemeriksaan session/role menentukan apakah suatu route, halaman, atau aksi boleh diakses.

