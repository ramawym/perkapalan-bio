// Lokasi: app/api/auth/[...nextauth]/route.ts
import NextAuth, { Session, JWT } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adminEmails = [
    "seanmarcello836@gmail.com",
    "walyulahdi.maulana@ui.ac.id",
    "ramadhanmaulana446@gmail.com",
    "deltakrist.k@gmail.com",
    "marcoimanuel06@gmail.com",
    "nurilahmady04@gmail.com"
];

export const authOptions = {
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
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// INI KUNCI UTAMANYA: Ekspor langsung handler sebagai GET dan POST
export { handler as GET, handler as POST };