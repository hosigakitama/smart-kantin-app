'use client';
import { motion } from "framer-motion";
export default function UnauthorizedPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold text-red-600">Akses Ditolak ❌</h1>
        <h2 className="mt-4 text-gray-600">Kamu tidak punya izin untuk mengakses halaman ini.</h2>
      </motion.div>
    </div>
  );
}
