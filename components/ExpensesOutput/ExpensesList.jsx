import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesList = ({expenses}) => {
  return (
    <FlatList data={expenses} renderItem={expense => <Text key={expense.index}>{expense.item.description}</Text> }  />
  )
}

export default ExpensesList

const styles = StyleSheet.create({})