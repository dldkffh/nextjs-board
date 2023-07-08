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
         clientId: "452515360426-2kd2oh0h5jbgfuvfhehv6qi0jf9pg7od.apps.googleusercontent.com",
         clientSecret: "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",
      }),
      // GithubProvider({
      //    clientId: process.env.GITHUB_ID,
      //    clientSecret: process.env.GITHUB_SECRET,
      // }),
      // ...add more providers here
   ],
};

export default NextAuth(authOptions);
