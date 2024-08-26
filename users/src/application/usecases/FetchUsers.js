export class FetchUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return await this.userRepository.fetchAllUsers();
  }
}