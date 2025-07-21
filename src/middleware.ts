// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const role = request.cookies.get('role')?.value
  const path = request.nextUrl.pathname

  const isProtected = ['/admin/dashboard', '/user/dashboard'].some(p => path.startsWith(p))

  if (!token && isProtected) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (path.startsWith('/admin/dashboard') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  if (path.startsWith('/user/dashboard') && role !== 'user') {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/user/dashboard/:path*'],
}
