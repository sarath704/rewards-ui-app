import { createContext, useReducer } from "react";
import { ApplicationReducer } from "./reducer";
const initialState: IAppState = {
  transactions: [],
  dispatch: () => {},
};
export const ApplicationContext = createContext<IAppState>(initialState);
const ApplicationState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ApplicationReducer, initialState);

  const getUserTransactions = (userName: string) => {
    return state.transactions.filter(
      (transaction) => transaction.name === userName
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        getUserTransactions,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationState;
