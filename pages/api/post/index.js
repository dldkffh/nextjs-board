// POST 신규 게시물 작성

import prisma from "lib/prisma";

export default async function handler(req, res) {
   const method = req.method;

   if (method === "GET") {
      const user = await prisma.user.create({
         data: {
            email: "elsa@prisma.io",
            name: "Elsa Prisma",
         },
      });
   } else {
      res.status(405).send({ error: "Method Not Allowed." });
   }
}
