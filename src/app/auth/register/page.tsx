'use client'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { auth, db } from '@/lib/firebase'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
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

      await setDoc(doc(db, 'users', uid), { email, role })

      Cookies.set('token', await userCred.user.getIdToken())
      Cookies.set('role', role)

      setType('success')
      setMessage('Registrasi berhasil! Mengarahkan...')
      setTimeout(() => router.push(`/${role}`), 1500)
    } catch (error: any) {
      setType('error')
      setMessage(error.message || 'Registrasi gagal.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-gray-500 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register</h2>

        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </div>
  )
}
