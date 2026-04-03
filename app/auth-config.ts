import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Re-inisialisasi sederhana untuk keperluan Client/Server Components
const { auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
});

export { auth, signIn, signOut };