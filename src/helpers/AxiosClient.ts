import axios, { AxiosInstance } from "axios";
import { APIExternalError } from "../errors/APIExternalError";

class AxiosClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  async get(url: string) {
    try {
      const response = await this.instance.get(url);
      return response.data;
    } catch (error: any) {
      throw new APIExternalError(error.message);
    }
  }
}

export default AxiosClient;
