import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginDTO } from "../types/login";
import Service from "./Service";
import UserRepository from "../repositories/UserRepository";
import SalesService from "./SalesService";

class UserService extends Service {
  async login(data: loginDTO) {
    console.log(data)
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");

    const { password, ...payload } = await super.findUnique({
      email: data.email,
    });

    if (!payload) throw new Error("Login ou senha inválidos");

    const user = {
      ...payload,
    };

    delete user.id;
    delete user.password;

    const isPasswordValid = await bcrypt.compare(data.password, password);

    if (!isPasswordValid) throw new Error("Login ou senha inválidos");
    console.log("chegou aqui");
    return {
      user,
      token: jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1d",
      }),
    };
  }

  async findMany(condition?: any, fields?: any[], options?: {}) {
    return await SalesService.findMany(condition, fields, options);
  }
}

export default new UserService(UserRepository);
