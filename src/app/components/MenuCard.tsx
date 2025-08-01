import Link from 'next/link';

export default function MenuCard({ menu }: any) {
    return (
        <div className="p-4 border rounded-xl bg-white shadow">
            <img src={menu.gambar} alt={menu.nama} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-2 font-bold">{menu.nama}</h3>
            <p className="text-gray-500">Rp{menu.harga}</p>
            <p className="text-sm">Kategori: {menu.kategori}</p>
            <p className="text-sm">Stok: {menu.stok}</p>
            <div className="flex justify-between mt-2">
                <Link href={`/admin/menus/${menu.id}/edit`} className="text-blue-500 hover:underline">Edit</Link>
            </div>
        </div>
    );
}
