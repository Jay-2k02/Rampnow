// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose'; // Use SignJWT for token signing

const SECRET_KEY = new TextEncoder().encode('your-secret-key'); // Secret key for JWT

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Example hardcoded credentials
    const defaultUsername = 'admin';
    const defaultPassword = 'password123';

    // Validate credentials (mocked for this example)
    if (email === defaultUsername && password === defaultPassword) {
      // Generate JWT token using jose
      const token = await new SignJWT({ userId: '12345', username: email })
        .setExpirationTime('1h')
        .setProtectedHeader({ alg: 'HS256' })
        .sign(SECRET_KEY);

      return NextResponse.json({ token });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
