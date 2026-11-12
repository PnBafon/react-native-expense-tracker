import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  function renderItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
