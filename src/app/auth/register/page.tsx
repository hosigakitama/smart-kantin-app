'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import Cookies from 'js-cookie'
import { auth, db } from '@/lib/firebase'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState<'success' | 'error' | ''>('')
  const router = useRouter()

  const handleRegister = async () => {
    if (password.length < 6) {
      setType('error')
      setMessage('Password minimal 6 karakter!')
      return
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      const uid = userCred.user.uid
      const role = 'user'

      await setDoc(doc(db, 'users', uid), { email, role })

      const token = await userCred.user.getIdToken()
      Cookies.set('token', token)
      Cookies.set('role', role)

      setType('success')
      setMessage('Registrasi berhasil! Mengarahkan...')
      setTimeout(() => router.push('/user/dashboard'), 1500)
    } catch (error: any) {
      setType('error')
      setMessage(error.message || 'Registrasi gagal.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-xl">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Buat Akun</h2>

        {message && (
          <div
            className={`mb-4 p-3 rounded text-sm ${type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
        >
          Daftar
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          Sudah punya akun?{' '}
          <a href="/auth/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
