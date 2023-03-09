import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";

import { ApplicationContext } from "../context/ApplicationContext";
import {
  formatNumber,
  formatPrice,
  getLatestThreeMonthRecords,
  sortMonthsArray,
} from "../util";
import UserTransactionByMonth from "../components/UserTransactionsByMonth";
const UserTransactionList = () => {
  const { transactions } = useContext(ApplicationContext);
  let params = useParams();
  const name = params.name;
  const [customerTransactions, setCustomerTransactions] = useState<
    ITransaction[]
  >([]); // State to store transactions for selected customer

  const [monthlyDataMap, setMonthlyDataMap] = useState({});

  const [selectedMonth, setSelectedMonth] = useState<IMonthData>();

  const handleViewList = (monthData: any) => {
    setSelectedMonth(monthData);
  };
  useEffect(() => {
    if (transactions.length === 0) return;
    const list = transactions.filter(
      (transaction) => transaction.name === name
    );
    setCustomerTransactions(list);
  }, [transactions, name]);

  useEffect(() => {
    if (customerTransactions.length === 0) return;
    const threeMonthsData = getLatestThreeMonthRecords(customerTransactions);
    setMonthlyDataMap(threeMonthsData);
  }, [customerTransactions]);

  return (
    <Box pl={4}>
      <Box className="title" pl={4}>
        <Heading as="h3" size="md" mb={5}>
          Trasnactions of {name}
        </Heading>
      </Box>
      {/* Table to display transactions */}
      <Table size={"sm"}>
        <Thead>
          <Tr>
            <Th>Month</Th>
            <Th>Total Rewards</Th>
            <Th>Total Transaction Amount</Th>
            <Th>Total Transaction Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortMonthsArray(Object.values(monthlyDataMap)).map(
            (transaction: any) => (
              <Tr key={transaction.id}>
                <Td>{transaction.monthYear}</Td>
                <Td>{formatNumber(transaction.totalRewards)}</Td>
                <Td>{formatPrice(transaction.totalAmount)}</Td>
                <Td>
                  <Button
                    onClick={() => handleViewList(transaction)}
                    colorScheme="teal"
                    size="xs"
                  >
                    View list
                  </Button>
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>

      {selectedMonth && (
        <UserTransactionByMonth
          month={selectedMonth.monthYear}
          transactions={selectedMonth.records}
        />
      )}
    </Box>
  );
};

export default UserTransactionList;
