import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";

interface TransactionTableProps {
  transactions: ITransaction[];
  pageRange?: number;
  onPageChange: (selectedPage: number) => void;
  viewSummary: (name: string) => void;
}
const ITEMS_PER_PAGE = 8;

const TransactionTable = ({
  transactions,
  pageRange = 3,
  onPageChange,
  viewSummary,
}: TransactionTableProps) => {
  const pageCount = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = transactions.slice(offset, offset + ITEMS_PER_PAGE);
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
    onPageChange(data.selected);
  };
  const handleTransaction = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    viewSummary(name);
  };

  return (
    <TableContainer>
      <Box className="title" pb={4}>
        <h4 className="h4"> All Transactions</h4>
      </Box>
      <Table
        variant="simple"
        size="sm"
        h="450px"
        overflow="scroll"
        marginBottom={5}
      >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Transaction Amount</Th>
            <Th>Reward Points</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>
                <Link
                  href="javascript(void 0)"
                  onClick={(e) => handleTransaction(e, transaction.name)}
                  isExternal
                >
                  {transaction.name} <ExternalLinkIcon mx="2px" />
                </Link>
              </Td>
              <Td>${transaction.transactionAmount}</Td>
              <Td>{transaction.rewardPoints}</Td>
              <Td>{transaction.date.toString()}</Td>
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
        pageCount={pageCount}
        marginPagesDisplayed={pageRange}
        pageRangeDisplayed={pageRange}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </TableContainer>
  );
};

export default TransactionTable;
