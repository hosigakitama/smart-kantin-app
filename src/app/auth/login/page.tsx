'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { auth, db } from '@/lib/firebase'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState<'success' | 'error' | ''>('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const uid = userCred.user.uid
      const roleSnap = await getDoc(doc(db, 'users', uid))
      const role = roleSnap.data()?.role || 'user'

      Cookies.set('token', await userCred.user.getIdToken())
      Cookies.set('role', role)

      setType('success')
      setMessage('Login berhasil! Mengarahkan...')
      setTimeout(() => router.push(`/${role}/dashboard`), 1500)
    } catch (error: any) {
      setType('error')
      setMessage(error.message || 'Login gagal.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-white">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6 tracking-wide">
          Smart Kantin Login
        </h2>

        {message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm font-medium ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'
              }`}
          >
            {message}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Masukkan Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Masukkan Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition duration-200"
          >
            Masuk
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-500">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
