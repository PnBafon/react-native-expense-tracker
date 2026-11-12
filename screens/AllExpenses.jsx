import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensePeriod={'Total'} />
    </View>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})