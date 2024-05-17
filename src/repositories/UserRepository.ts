import Repository from "./Repository";
import { User } from "../database/models/UserModel";
import Database from "../database/Connection";

class UserRepository extends Repository {}

export default new UserRepository(Database.getConnection(), User.name);
