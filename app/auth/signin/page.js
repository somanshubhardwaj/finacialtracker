// app/auth/signin/page.js
import { getProviders, signIn } from 'next-auth/react';

export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-4">Sign in</h1>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)} className="bg-blue-600 text-white px-4 py-2 rounded">
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
