import { user } from "../@types/user";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

// this function should handle new users registeration
const register = async (u: user) => {
  if (!u.name || !u.email || !u.password) {
    return { msg: "Please provide all fields" };
  }
  await prisma.user.create({
    data: {
      name: u.name,
      email: u.email,
      password: u.password,
    },
  });
  return { msg: "User created", user: u };
};

const login = async (email: string, password: string) => {
  const checkUser: user | null = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!checkUser) {
    return { msg: "User not found" };
  } else {
    if (checkUser.password !== password) {
      return { msg: "Password is incorrect" };
    } else {
      const token = createToken(checkUser);
      return { token: token, user: checkUser };
    }
  }
};

const createToken = (user: user) => {
  const secret = config.secret;
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
    },
    secret
  );
  return token;
};
const getUserFromToken = async (token: string) => {
  const secret = config.secret;
  const decoded: any = jwt.verify(token, secret);
  // todo : this should be separated to get all needed info about the user one time not just name and email
  const user = await prisma.user.findFirst({
    where: {
      email: decoded.email,
    },
  });
  return user;
};
export { register, login, getUserFromToken };
