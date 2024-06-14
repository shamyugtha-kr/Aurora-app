import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigations/StackNavigator"; // Adjust the path as necessary

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
