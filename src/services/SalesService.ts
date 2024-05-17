import Service from "./Service";
import SalesRepository from "../repositories/SalesRepository";
import IRepository from "../types/repository";
import { salesDTO } from "../types/sales";
import CryptoCompareService from "./CryptoCompareService";
import { NotFoundError } from "../errors/NotFoundError";

class SalesService extends Service {
  constructor(repo: IRepository) {
    super(repo);
  }

  async save(data: salesDTO) {
    return super.save([data]);
  }

  async cotationValue(value: number, fromCurrency: String, toCurrency: String) {
    const cotation = await CryptoCompareService.getCotation(
      fromCurrency,
      toCurrency
    );

    if (!cotation) {
      throw new NotFoundError("Cotation not found");
    }

    const convertedValue = value / cotation.BRL;

    return { USDTValue: convertedValue.toFixed(2) };
  }
}

export default new SalesService(SalesRepository);
