
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // This is where you would add your own logic to validate the credentials
        // For this demo, we'll just accept any username and password
        if (credentials) {
          return { id: '1', name: 'User', email: 'user@example.com' };
        }
        return null;
      },
    }),
  ],
});
