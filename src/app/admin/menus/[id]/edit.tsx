import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";

interface Menu {
    nama: string;
    gambar: string;
    harga: number;
    kategori: string;
    stok: number;
    createdAt: any;
}

export default function EditPage({ params }: { params: { id: string } }) {
    const [menu, setMenu] = useState<Menu | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const id = params.id;

            if (!id || typeof id !== "string") return;

            const docRef = doc(db, "menus", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setMenu(docSnap.data() as Menu);
            } else {
                console.log("No such document!");
            }
        };

        fetchData();
    }, [params.id]);

    if (!menu) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Menu: {menu.nama}</h1>
            {/* Lanjutkan form edit di sini */}
        </div>
    );
}
