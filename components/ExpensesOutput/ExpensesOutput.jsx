import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
    {
        id: 'ei', 
        description: 'A pair of shoes', 
        amount: 58.99,
        date: new Date('2025-12-23')
    },
    {
        id: 'e2', 
        description: 'A pair of trausers', 
        amount: 90,
        date: new Date('2025-12-23')
    },
    {
        id: 'e3', 
        description: 'Bananas', 
        amount: 10,
        date: new Date('2024-1-23')
    },
    {
        id: 'e5', 
        description: 'Tablet', 
        amount: 100,
        date: new Date('2026-11-03')
    },
]
const ExpensesOutput = ({expenses, periodName, }) => {
  return (
    <View>
        <ExpenseSummary expenses={DUMMY_EXPENSES} />
        <ExpensesList expenses={DUMMY_EXPENSES}/>

      
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})