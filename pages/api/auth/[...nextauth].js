import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
   adapter: PrismaAdapter(prisma),
   // Configure one or more authentication providers
   providers: [
      GoogleProvider({
         clientId: process.env.GoogleProvider_clientId,
         clientSecret: process.env.GoogleProvider_clientSecret,
      }),
      // GithubProvider({
      //    clientId: process.env.GITHUB_ID,
      //    clientSecret: process.env.GITHUB_SECRET,
      // }),
      // ...add more providers here
   ],
};

export default NextAuth(authOptions);
