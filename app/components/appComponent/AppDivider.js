import React from "react";
import { StyleSheet, View } from "react-native";

export default function AppDivider() {
  return <View style={styles.appDividerStyles} />;
}

const styles = StyleSheet.create({
  appDividerStyles: {
    backgroundColor: "#000",
    width: "100%",
    height: 2,
    opacity: 0.1,
    marginVertical: 14,
  },
});
