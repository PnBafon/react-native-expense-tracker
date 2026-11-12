import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpenseSummary = ({ expensePeriod, expenses }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  return (
    <View>
      <Text>{expensePeriod}</Text>
      <Text>$ {expensesSum.toFixed(2)} </Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({});
