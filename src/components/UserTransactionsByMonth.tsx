import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

import { useState } from "react";
const ITEMS_PER_PAGE = 5;
interface IUserTransactionByMonth {
  transactions: ITransaction[];
  month: string;
}
const UserTransactionByMonth = ({
  transactions,
  month,
}: IUserTransactionByMonth) => {
  const pageCount = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = transactions.slice(offset, offset + ITEMS_PER_PAGE);
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <Box my={4}>
      <Box className="title" px={4}>
        <h4 className="h5"> Trasnactions for the Month: {month}</h4>
      </Box>
      {/* Table to display transactions */}
      <Table size={"sm"} mb={5}>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Transaction Amount</Th>
            <Th>Reward Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.date}</Td>
              <Td>{transaction.transactionAmount}</Td>
              <Td>{transaction.rewardPoints}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ReactPaginate
        pageClassName="page-item"
        previousLinkClassName="page-link"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousLabel={"Previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Box>
  );
};

export default UserTransactionByMonth;
