export const ApplicationReducer = (
  state: IAppState,
  action: IAppAction
): IAppState => {
  switch (action.type) {
    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { id: state.transactions.length + 1, ...action.payload },
        ],
      };
    default:
      return state;
  }
};
