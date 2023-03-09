import TransactionTable from "../components/TransactionTable";
import { Box } from "@chakra-ui/react";

import { ApplicationContext } from "../context/ApplicationContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { sortByListByDate } from "../util";

const TransactionList = () => {
  const [allTranactions, setAllTransactions] = useState<ITransaction[]>([]);
  const navigate = useNavigate();

  const { transactions } = useContext(ApplicationContext);

  useEffect(() => {
    const list = sortByListByDate(transactions);
    setAllTransactions(list);
  }, [transactions]);

  const handleViewSummary = (userName: string) => {
    navigate(`/user/${userName}`);
  };
  const handlePageChange = () => {};

  return (
    <div className="transactions-list">
      <Box py={4}>
        <TransactionTable
          transactions={allTranactions}
          viewSummary={handleViewSummary}
          onPageChange={handlePageChange}
        />
      </Box>
    </div>
  );
};
export default TransactionList;
