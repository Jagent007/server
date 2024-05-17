import { Request, Response } from "express";
import Controller from "./Controller";
import UserService from "../services/UserService";
import IService from "../types/service";
import { errorResponses } from "../helpers/errorResponse";
import { badRequest, success } from "../helpers/httpResponse";

class UserController extends Controller {
  constructor(service: IService) {
    super(service);
  }

  async findMany({ user, query }: Request) {
    try {
      if (user.type !== "ADMIN") return badRequest("Unauthorized");

      return success(await UserService.findMany(query));
    } catch (error) {
      return errorResponses(error);
    }
  }

  async login(req: Request) {
    try {
      return success(await UserService.login(req.body));
    } catch (error: any) {
      return errorResponses("Email ou senha inválidos");
    }
  }
}

export default new UserController(UserService);
