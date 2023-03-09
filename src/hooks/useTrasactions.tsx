import { useCallback, useEffect, useState } from "react";
import { transactionService } from "../services/TranscationService";
function parseDate(dateString: string): Date {
  const [month, day, year] = dateString.split("/");
  return new Date(Number(year), Number(month) - 1, Number(day));
}
function useTransactions() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const prepareList = useCallback((list: ITransaction[]): ITransaction[] => {
    return list.sort(
      (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      const list = await transactionService.getTransactions();
      setTransactions(prepareList(list));
    };
    fetchTransactions();
  }, [prepareList]);

  return transactions;
}
export default useTransactions;
