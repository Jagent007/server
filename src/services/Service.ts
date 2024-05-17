import IService from "../types/service";
import IRepository from "../types/repository";

abstract class Service implements IService {
  protected repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  async save(data: any) {
    return this.repository.create(data);
  }

  async findUnique(data: any, fields?: any[]) {
    return this.repository.findUnique(data, fields);
  }

  async findMany(condition?: any, fields?: any[], options?: {}) {
    return this.repository.findMany(condition, fields, options);
  }
}

export default Service;
