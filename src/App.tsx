import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { ApplicationContext } from "./context/ApplicationContext";
import useTransactions from "./hooks/useTrasactions";
import TransactionList from "./pages/transactionsList.page";
import UserTransactionList from "./pages/userTransactions.page";
import { useColorModeValue, Box } from "@chakra-ui/react";
import AddNewTransaction from "./pages/addTransaction.page";
import { transactionService } from "./services/TranscationService";
function App() {
  const { dispatch } = useContext(ApplicationContext);

  useEffect(() => {
    const fetchTransactions = async () => {
      const list = await transactionService.getTransactions();
      dispatch({ type: "SET_TRANSACTIONS", payload: list });
    };
    fetchTransactions();
  }, [dispatch]);

  return (
    <Box className="App" bg={useColorModeValue("gray.100", "gray.900")}>
      <Header></Header>
      <div className="main-container">
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<TransactionList />}></Route>
            <Route index path="/user/:name" element={<UserTransactionList />} />
            <Route index path="/add" element={<AddNewTransaction />} />
            <Route path="*" element={<TransactionList />} />
          </Routes>
        </main>
      </div>
      {/* <Footer></Footer> */}
    </Box>
  );
}

export default App;
