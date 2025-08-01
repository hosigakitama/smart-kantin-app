'use client';
import { useState, useEffect } from 'react';

export default function MenuForm({ onSubmit, initialData }: any) {
    const [form, setForm] = useState({
        nama: '',
        gambar: '',
        harga: '',
        kategori: '',
        stok: '',
    });

    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit({ ...form, harga: Number(form.harga), stok: Number(form.stok) });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm text-gray-600">Nama Menu</label>
                    <input
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        placeholder="Contoh: Nasi Goreng"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">URL Gambar</label>
                    <input
                        name="gambar"
                        value={form.gambar}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Harga (Rp)</label>
                    <input
                        name="harga"
                        type="number"
                        value={form.harga}
                        onChange={handleChange}
                        placeholder="10000"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Kategori</label>
                    <input
                        name="kategori"
                        value={form.kategori}
                        onChange={handleChange}
                        placeholder="Minuman / Makanan"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Stok</label>
                    <input
                        name="stok"
                        type="number"
                        value={form.stok}
                        onChange={handleChange}
                        placeholder="50"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
            </div>

            <div className="mt-6 text-center">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg w-full sm:w-1/2 transition duration-200"
                >
                    Simpan Menu 🍱
                </button>
            </div>
        </form>
    );
}
