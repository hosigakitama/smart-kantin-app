import MenuForm from '../../../components/MenuForm';
import { createMenu } from '../../../../lib/menuService';
import { redirect } from 'next/navigation';

export default function NewMenuPage() {
    const handleAdd = async (data: any) => {
        'use server';
        await createMenu(data);
        redirect('/admin/menus');
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Tambah Menu</h1>
            <MenuForm onSubmit={handleAdd} />
        </div>
    );
}
