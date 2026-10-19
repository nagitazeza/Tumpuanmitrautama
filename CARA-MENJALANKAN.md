# Cara Menjalankan Website PT Tumpuan Mitra Utama

Website ini memakai React + TanStack Start. Untuk menjalankannya, komputer perlu punya
**Node.js versi 22 LTS** (unduh gratis di https://nodejs.org).

## 1. Buka di komputer sendiri (mode pengembangan)

1. Buka folder `pt-tumpuan-mitra-utama` di Terminal (macOS) atau Command Prompt (Windows).
2. Ketik perintah berikut, satu per satu, lalu tekan Enter:

```
npm install
npm run dev
```

3. Setelah muncul alamat seperti `http://localhost:8080`, buka alamat itu di browser.
4. Untuk menghentikannya, tekan `Ctrl + C` di jendela terminal.

## 2. Deploy ke GitHub Pages

Website ini dapat diterbitkan otomatis ke GitHub Pages setiap kali perubahan di-push
ke branch `main`. Build Pages menghasilkan situs statis di `.output/public`.

1. Push semua file proyek ke repository GitHub `TumpuanMitraUtama/tumpuan`.
2. Di repository, buka **Settings → Pages** dan pilih **GitHub Actions** pada bagian
   *Build and deployment*.
3. Push perubahan ke branch `main` untuk menjalankan workflow deploy.
4. Pantau prosesnya di tab **Actions**. Setelah selesai, situs tersedia di
   `https://nagitazeza.github.io/Tumpuanmitrautama/`.

Untuk membuat build Pages secara manual:

```
npm run build:pages
```

Hasil situs statis berada di `.output/public`.

## 3. Membuat versi siap online untuk server (build)

```
npm run build
```

Build ini menyiapkan aplikasi untuk deployment server-side seperti Cloudflare.

Untuk melihat hasil build di komputer sendiri:

```
npm run preview
```

## 4. Mengganti teks, nomor telepon, dan alamat

- Semua teks bahasa Indonesia dan Inggris: `src/lib/i18n.tsx`
- Nomor WhatsApp, email, dan alamat: bagian atas `src/routes/index.tsx`
  (baris `const WA = ...`, `const EMAIL = ...`, dan alamat di bagian kontak/footer)
- Logo dan foto: folder `src/assets` — ganti filenya dengan nama yang sama,
  atau ganti nama file di dalam kode.

## 5. Ganti bahasa

Tombol **ID / EN** di kanan atas halaman akan langsung mengganti seluruh teks.
Bahasa pilihan pengunjung tersimpan di browser mereka.

## 6. Kalau ada masalah

- `npm install` gagal: pastikan Node.js sudah terpasang (`node -v` harus menampilkan angka).
- Halaman kosong: hapus folder `node_modules` lalu ulangi `npm install`.
- Workflow GitHub Pages gagal: pastikan **Settings → Pages** menggunakan **GitHub Actions**
  dan branch yang di-push adalah `main`.
