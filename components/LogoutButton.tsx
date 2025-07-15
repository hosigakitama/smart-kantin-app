'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('role')
    router.push('/auth/login')
  }

  return <button onClick={handleLogout}>Logout</button>
}
