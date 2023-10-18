import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Badge } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// come from server after api's integration
const profile_picture = "https://picsum.photos/50/50";

export default function Header({ BackgroundColor }) {
  return (
    <View style={[styles.container, { backgroundColor: BackgroundColor }]}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
        <Text style={styles.textStyle}>Dashboard</Text>
      </View>

      <View style={styles.iconContainer}>
        <View>
          <Entypo
            name="bell"
            size={20}
            color="black"
            style={styles.bellIconStyle}
          />
          <Badge style={styles.badgeStyle}>3</Badge>
        </View>
        <Image
          source={{ uri: profile_picture }}
          style={styles.profileImageStyle}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeStyle: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#1CC4CF",
  },
  bellIconStyle: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 8,
  },
  container: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageStyle: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
    marginLeft: 12,
  },
  textStyle: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "700",
  },
});
