// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string, 
  username: string, 
  email: string, 
  password: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(   {
    id: "user1", 
    username: "señorJuan", 
    email: "C1@mail.com",
    password: "password"
  } )
}
