import { useFormik } from "formik";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { calculateRewardPoints, formattedDate } from "../util";
const UsersList = ["John", "Ram", "Sarath", "Ramesh", "Anusha", "Mythili"];
const AddNewTransaction = () => {
  const { dispatch } = useContext(ApplicationContext);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      transactionAmount: "",
      date: "",
    },
    onSubmit: (values) => {
      const rewardPoints = calculateRewardPoints(+values.transactionAmount);
      const userTransaction: ITransaction = {
        name: values.name,
        id: 0,
        rewardPoints,
        transactionAmount: +values.transactionAmount,
        date: formattedDate(values.date),
      };

      dispatch({
        type: "ADD_TRANSACTION",
        payload: { ...values, ...userTransaction },
      });

      toast({
        title: "Transaction added successfully.",
        description: `${values.name} spent ${values.transactionAmount} and got ${rewardPoints} Reward Points`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      formik.resetForm();
    },
  });
  return (
    <Box width={300}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select
            name="name"
            placeholder="Select User"
            value={formik.values.name}
            onChange={formik.handleChange}
          >
            {UsersList.map((user) => (
              <option value={user}>{user}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Transaction Amount</FormLabel>
          <Input
            id="transactionAmount"
            name="transactionAmount"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.transactionAmount}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Transaction Date</FormLabel>
          <Input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </FormControl>

        <Button type="submit" my={10}>
          Submit
        </Button>
      </form>
    </Box>
  );
};
export default AddNewTransaction;
