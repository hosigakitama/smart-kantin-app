'use client';
import { deleteMenu } from '@/lib/menuService';

export default function DeleteButton({ id }: { id: string }) {
    const handleDelete = async () => {
        if (confirm('Yakin hapus menu ini?')) {
            await deleteMenu(id);
            location.reload();
        }
    };

    return <button onClick={handleDelete} className="text-red-500">Hapus</button>;
}
