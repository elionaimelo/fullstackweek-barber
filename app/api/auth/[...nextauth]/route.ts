import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/app/_lib/prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
