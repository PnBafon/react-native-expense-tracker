import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();

  function ExpensesOverview() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="RecentExpenses" component={RecentExpenses} />
        <Tabs.Screen name="AllExpenses" component={AllExpenses} />
      </Tabs.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
