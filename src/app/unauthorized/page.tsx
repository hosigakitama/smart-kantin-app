'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Cookies from 'js-cookie';

export default function UnauthorizedPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [role, setRole] = useState('user'); // default role

  // Ambil role dari cookie saat component mount
  useEffect(() => {
    const userRole = Cookies.get('role') || 'user';
    setRole(userRole);
  }, []);

  // Jalankan countdown dan redirect saat countdown habis
  useEffect(() => {
    if (countdown === 0) {
      router.push(`/${role}/dashboard`);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router, role]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 via-white to-red-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full border border-red-300"
      >
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-red-600 w-14 h-14 animate-pulse" />
        </div>
        <h1 className="text-4xl font-extrabold text-red-600 mb-2">Akses Ditolak</h1>
        <p className="text-gray-700 text-md mb-6">
          Kamu tidak memiliki izin untuk mengakses halaman ini.
        </p>
        <p className="text-gray-500 text-sm">
          Mengalihkan ke dashboard dalam <span className="font-semibold text-red-600">{countdown}</span> detik...
        </p>
      </motion.div>
    </div>
  );
}
