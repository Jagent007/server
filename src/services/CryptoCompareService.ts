import AxiosClient from "../helpers/AxiosClient";

class CryptoCompareService {
  private axiosClient: AxiosClient;

  constructor() {
    this.axiosClient = new AxiosClient(
      "https://min-api.cryptocompare.com/data"
    );
  }

  async getCotation(fromCurrency: String, toCurrency: String) {
    return this.axiosClient.get(
      `price?fsym=${fromCurrency}&tsyms=${toCurrency}&api_key=${process.env.CRYPTO_COMPARE_API_KEY}`
    );
  }
}

export default new CryptoCompareService();
