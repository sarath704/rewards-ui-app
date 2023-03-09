function parseDate(dateString: string): Date {
  const [month, day, year] = dateString.split("/");
  return new Date(Number(year), Number(month) - 1, Number(day));
}
export const sortByListByDate = (list: ITransaction[]): ITransaction[] => {
  return list.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );
};

export const calculateRewardPoints = (amountSpent: number) => {
  let rewardPoints = 0;
  if (amountSpent > 50) {
    rewardPoints += amountSpent - 50;
  }
  if (amountSpent > 100) {
    rewardPoints += amountSpent - 100;
  }
  return rewardPoints;
};

export const formattedDate = (date: string) => {
  var selectedDate = new Date(date);
  return (
    selectedDate.getMonth() +
    1 +
    "/" +
    selectedDate.getDate() +
    "/" +
    selectedDate.getFullYear()
  );
};

export const getLatestThreeMonthRecords = (transactions:ITransaction[]) => {
  // Get the date three months ago
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 2);

  // Filter transactions within the last three months
  const recentTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= threeMonthsAgo;
  });

  // Group transactions by month
  const groupedTransactions = recentTransactions.reduce((acc:any, transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.toLocaleString("default", {
      month: "short",
    });
    const monthYear = `${transactionMonth} ${transactionDate.getFullYear()}`;
    if (!acc[monthYear]) {
      acc[monthYear] = { totalRewards: 0, totalAmount: 0, records: [], monthYear };
    }
    acc[monthYear].totalRewards += transaction.rewardPoints;
    acc[monthYear].totalAmount += transaction.transactionAmount;
    acc[monthYear].records.push(transaction);
    return acc;
  }, {});
  return groupedTransactions;
};


const sortByDateDesc = (a: IMonthData, b: IMonthData): number => {
  const dateA: Date = new Date(a.monthYear);
  const dateB: Date = new Date(b.monthYear);
  return dateB.getTime() - dateA.getTime();
};

export const sortMonthsArray = (months:any) => {
  const sortedMonths: string[] = months.sort(sortByDateDesc);
return sortedMonths
}

export const formatPrice = (amount:number = 0) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export function formatNumber(num:number) {
  return num.toLocaleString();
}