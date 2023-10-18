import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

export default function AppGraph() {
  return (
    <BarChart
      data={data}
      chartConfig={{
        color: (opacity = 1) => `rgba(28, 196, 207, ${opacity})`,
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
      }}
      width={Dimensions.get("screen").width - 48}
      height={220}
      withInnerLines={false}
    />
  );
}

const styles = StyleSheet.create({});
