import { NextApiRequest, NextApiResponse } from "next";

// http://localhost:3000/api/user/register

import { user } from "../../../@types/user";
import { register } from "../../../controllers/userController";

const registerNewUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const u: user = req.body;
  const newUser = await register(u);
  res.status(200).json(newUser);
};

export default registerNewUser;
