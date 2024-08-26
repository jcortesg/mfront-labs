import { UserRepository } from "../../domain/repositories/UserRepository";
import { fetchUsersFromApi } from "../api/UserApi";

export class UserRepositoryImpl extends UserRepository {
  async fetchAllUsers() {
    return await fetchUsersFromApi();
  }
}