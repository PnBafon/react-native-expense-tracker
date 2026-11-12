import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <View style={{flex:1}}>
      <ExpensesOutput expensePeriod={'Last 7 Days'} />
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})