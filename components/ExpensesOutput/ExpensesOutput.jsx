import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'

const ExpensesOutput = ({expenses}) => {
  return (
    <View>
        <ExpenseSummary />
        <ExpensesList expense={expense}/>

      
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})