import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FontAwesome } from "@expo/vector-icons";

const SIZE = 100.0;

export default function TotalProgress({ progress = 50, size }) {
  return (
    <>
      <View style={styles.mainContainer}>
        <AnimatedCircularProgress
          size={SIZE / 2}
          width={SIZE / 20}
          fill={progress}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        />
        <FontAwesome
          name="dollar"
          size={SIZE / 4}
          color="black"
          style={styles.iconStyle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZE,
    elevation: 5,
  },
  iconStyle: {
    position: "absolute",
  },
});
