// src/middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'; 
import { jwtVerify } from 'jose'; // Use jose for token verification

const SECRET_KEY = new TextEncoder().encode('your-secret-key'); // Secret key for JWT

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Verify the token using jose (Edge-compatible)
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.next(); // Proceed to the requested page
  } catch (err) {
    console.error('Token verification failed:', err);
    return NextResponse.redirect(new URL('/', request.url)); // Redirect to login if token is invalid
  }
}

export const config = {
  matcher: ['/CRUD/:path*'], // Protect all routes under /CRUD
};
