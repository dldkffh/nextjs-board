// GET 게시판 목록 조회

import prisma from "lib/prisma";

export default async function handler(req, res) {
    const method = req.method;

    // GET 조회
  if (method === "GET") {
    // 해당 포스트의 아이디로 패스워드 있는지 체크
    const isLocked = await prisma.post.findFirst({
      where: { boardId: boardId, id: postId },
      select: { isLocked: true, password: true },
    });

    // 잠겨있는지 확인하고 잠겨있으면 패스워드 확인
    if (isLocked.isLocked === true) {
      const { postPassword } = req.body;
      const isValidPassword = await verify(isLocked.password, postPassword);

      // 패스워드가 틀렸을 경우
      if (!isValidPassword) {
        res.status(401).send({ error: "Wrong Password!" });
      }
    }

    // 본문 가져오기
    const results = await prisma.post.findFirst({
      where: { boardId: boardId, id: postId },
    });

    if (results) {
      const updatePost = await prisma.post.update({
        where: { boardId: boardId, id: postId },
        data: { viewCount: `{results.viewCount} + 1` },
      });
      res.status(200).json(results);
    } else {
      res.status(500).send({ error: "DB ERROR!" });
    }
  }
}