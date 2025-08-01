import { getMenus } from '@/lib/menuService';
import MenuCard from '../../components/MenuCard';
import Link from 'next/link';

export default async function MenuPage() {
    const menus = await getMenus();

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold">Daftar Menu</h1>
                <Link href="/admin/menus/new" className="btn btn-success">+ Tambah Menu</Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {menus.map((menu: any) => (
                    <MenuCard key={menu.id} menu={menu} />
                ))}
            </div>
        </div>
    );
}
