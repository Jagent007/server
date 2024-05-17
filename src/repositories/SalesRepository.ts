import Repository from "./Repository";
import { Sales } from "../database/models/SalesModel";
import Database from "../database/Connection";

class SalesRepository extends Repository {}

export default new SalesRepository(Database.getConnection(), Sales.name);
