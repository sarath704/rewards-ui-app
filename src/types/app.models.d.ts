interface ITransaction {
  id: number;
  name: string;
  transactionAmount: number;
  date: string;
  rewardPoints: number;
}
interface IAppState {
  transactions: ITransaction[];
  dispatch: React.Dispatch<IAppAction>;
  getUserTransactions?: (userName: string) => void;
}
interface IAppAction {
  type: string;
  payload?: any;
}
interface IMonthData {
  totalRewards: number;
  totalAmount: number;
  records: ITransaction[];
  monthYear: string;
}
