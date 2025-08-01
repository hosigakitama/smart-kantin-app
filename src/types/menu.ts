export interface Menu {
    id?: string; // optional karena saat create belum punya id
    nama: string;
    gambar: string;
    harga: number;
    kategori: string;
    stok: number;
    createdAt: any; // Timestamp dari Firebase
}
