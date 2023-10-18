import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "../../components/Header";
import AccountingScreen from "../DrawerScreens/AccountingScreen";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <AccountingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    flex: 1,
  },
});
