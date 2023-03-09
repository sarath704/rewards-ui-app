import HttpService from "./HttpService";

class TransactionService {
  private httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  async getTransactions() {
    try {
      const transactions = await this.httpService.get<ITransaction[]>(
        "/MOCK_DATA.json"
      );
      return transactions;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
const transactionService = new TransactionService();

export { transactionService };
