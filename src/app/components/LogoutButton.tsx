'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function LogoutButton({ children }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('role');
    router.push('/auth/login');
  };

  return <button onClick={handleLogout}>{children}</button>;
}
