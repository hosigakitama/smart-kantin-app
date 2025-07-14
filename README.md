
# 🍽️ SmartKantin

SmartKantin adalah sistem pemesanan makanan digital modern berbasis web, yang memudahkan pengguna dalam memesan makanan secara online dan real-time — tanpa perlu antre.

---

## 🚀 Fitur Utama

- 🔐 Autentikasi Multi-role (Admin & User)
- 📱 Pesan makanan online dengan status real-time
- 📋 Admin dashboard untuk kelola pesanan & menu
- 📦 Firebase Firestore untuk database realtime
- 📄 QR Code untuk identifikasi pesanan
- 🎨 Responsive UI menggunakan Tailwind CSS

---

## ⚙️ Teknologi

| Komponen    | Teknologi               |
|-------------|--------------------------|
| Frontend    | Next.js (App Router)     |
| Styling     | Tailwind CSS             |
| Auth        | Firebase Authentication  |
| Database    | Firebase Firestore       |
| Hosting     | Vercel / Firebase Hosting|

---

## 📦 Instalasi Lokal

```bash
git clone https://github.com/username/smartkantin.git
cd smartkantin
npm install
```

Buat file `.env.local` dan isi dengan config Firebase kamu:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...
```

Lalu jalankan:

```bash
npm run dev
```

---

## 📁 Struktur Folder Awal

```
src/
├── app/
│   └── page.tsx          # Halaman landing
├── lib/
│   └── firebase.ts       # Setup Firebase SDK
```

---

## 📜 Lisensi

MIT License. Feel free to fork, clone, and develop it further ✌️
