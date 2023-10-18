import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AppText({
  children,
  Color = "#000",
  Size = 14,
  Weight = "500",
  style,
}) {
  return (
    <Text
      style={[
        {
          color: Color,
          fontSize: Size,
          fontWeight: Weight,
        },
        { ...style },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
