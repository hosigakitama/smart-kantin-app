import { db } from './firebase'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore'
import { Menu } from '@/types/menu'

const menusRef = collection(db, 'menus')

export async function getMenus() {
    const snapshot = await getDocs(menusRef)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Menu[]
}

export async function getMenuById(id: string) {
    const menuDoc = await getDoc(doc(db, 'menus', id))
    return { id: menuDoc.id, ...menuDoc.data() } as Menu
}

export async function createMenu(data: Omit<Menu, 'createdAt'>) {
    return await addDoc(menusRef, {
        ...data,
        createdAt: serverTimestamp()
    })
}

export async function updateMenu(id: string, data: Partial<Menu>) {
    return await updateDoc(doc(db, 'menus', id), data)
}

export async function deleteMenu(id: string) {
    return await deleteDoc(doc(db, 'menus', id))
}
