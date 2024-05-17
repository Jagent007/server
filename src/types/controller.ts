import { Request } from "express";

export default interface IController {
  create(req: Request): Promise<any>;
  findUnique(req: Request): Promise<any>;
  findMany(req: Request): Promise<any>;
}
