// Lokasi: app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adminEmails = [
  "seanmarcello836@gmail.com", 
  "walyulahdi.maulana@ui.ac.id",
  "email.delta@gmail.com", 
  "email.marco@gmail.com",
  "email.nuril@gmail.com"
];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET, // WAJIB ADA di v4
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = adminEmails.includes(user.email ?? "");
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});

// INI KUNCI UTAMANYA: Ekspor langsung handler sebagai GET dan POST
export { handler as GET, handler as POST };