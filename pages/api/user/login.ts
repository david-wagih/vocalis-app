import { NextApiRequest, NextApiResponse } from "next";

// http://localhost:3000/api/user/login

import { login } from "../../../controllers/userController";

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const newUser = await login(email, password);
  res.status(200).json(newUser);
};

export default loginUser;
