'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Hamburger, LogOut } from 'lucide-react';
import LogoutButton from '../components/LogoutButton';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Beranda', path: '/admin/dashboard', icon: <Home /> },
        { name: 'Menu', path: '/admin/menus', icon: <Hamburger /> },
    ];

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-green-100 via-white to-green-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg p-6 rounded-r-3xl border-r border-green-200 relative">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-green-600">KantinKU</h1>
                    <p className="text-sm text-gray-500">Admin Panel</p>
                </div>

                <nav className="space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 p-2 rounded-xl transition ${pathname === item.path
                                ? 'bg-green-100 text-green-600 font-semibold'
                                : 'hover:bg-green-50 text-gray-700'
                                }`}
                        >
                            <span className="w-5 h-5">{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-10 left-6 right-6">
                    <LogoutButton>
                        <div className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 p-2 rounded-xl transition justify-center">
                            <LogOut className="w-5 h-5" />
                            Keluar
                        </div>
                    </LogoutButton>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
