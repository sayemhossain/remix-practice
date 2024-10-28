import prisma from "./db";

export const addExpense = async (expenseData: any) => {
  try {
    const expense = await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: parseFloat(expenseData.amount),
        date: new Date(expenseData.date),
      },
    });

    return expense;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
};

export const getExpenses = async () => {
  try {
    const expenses = await prisma.expense.findMany();
    return expenses;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
};

export const deleteExpense = async (id: string) => {
  try {
    const expense = await prisma.expense.delete({
      where: { id },
    });
    return expense;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
};
