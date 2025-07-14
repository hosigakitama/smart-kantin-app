export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-700">🍽️ SmartKantin</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Sistem pemesanan makanan digital yang praktis dan cepat — tanpa antrean.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/login"
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition"
          >
            Daftar
          </a>
        </div>
      </div>
    </main>
  );
}
