import { User } from '@/types';
import { SignJWT } from 'jose';

const BASE_URL = 'http://localhost:8080';
const SHARED_SECRET = 'your_shared_secret_here';

async function generateJWT(payload: string): Promise<string> {
  return new SignJWT({ payload })
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(SHARED_SECRET));
}

async function fetchWithJWT(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const payload = options.body || '';
  const token = await generateJWT(payload.toString());

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...(options.headers || {}),
  };

  return fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
}

export async function fetchUsers(): Promise<User[]> {
  const response = await fetchWithJWT('/get-users', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const users: User[] = await response.json();
  return users;
}

export async function createUser(user: User): Promise<void> {
  const response = await fetchWithJWT('/create-user', {
    method: 'POST',
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`Failed to create user: ${response.statusText}`);
  }

  console.log('User created successfully');
}

export async function updateUser(user: User): Promise<void> {
  const response = await fetchWithJWT('/update-user', {
    method: 'PUT',
    body: JSON.stringify(user),
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(`Failed to update user: ${response.statusText}`);
  }

  console.log('User updated successfully');
}

export async function deleteUser(id: number): Promise<void> {
  const response = await fetchWithJWT(`/delete-user?id=${id}`, {
    method: 'DELETE',
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(`Failed to delete user: ${response.statusText}`);
  }

  console.log('User deleted successfully');
}