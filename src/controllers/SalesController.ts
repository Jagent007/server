import { Request } from "express";
import SalesService from "../services/SalesService";
import Controller from "./Controller";
import IService from "../types/service";
import { errorResponses } from "../helpers/errorResponse";
import { badRequest, success } from "../helpers/httpResponse";

class SalesController extends Controller {
  constructor(service: IService) {
    super(service);
  }

  async create(req: Request) {
    try {
      const ip = req.socket.remoteAddress;
      console.log(req.body)
      return success(await SalesService.save({ ...req.body, ip }));
    } catch (error) {
      console.log(error)
      return errorResponses(error);
    }
  }

  async cotationValue(req: Request) {
    try {
      const fromCurrency = String(req.query.fromCurrency);
      const toCurrency = String(req.query.toCurrency);
      const value = Number(req.query.value);

      if (!fromCurrency || !toCurrency) {
        return badRequest("fromCurrency and toCurrency are required");
      }

      return success(
        await SalesService.cotationValue(value, fromCurrency, toCurrency)
      );
    } catch (error) {
      return errorResponses(error);
    }
  }


}

export default new SalesController(SalesService);
