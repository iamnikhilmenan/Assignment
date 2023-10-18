import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppDivider from "../../components/appComponent/AppDivider";
import AppGraph from "../../components/appComponent/AppGraph";
import TotalProgress from "../../components/appComponent/TotalProgress";

const MONTH = [
  "January",
  "Febuary",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SIZE = 100.0;
const { width, height } = Dimensions.get("screen");

export default function AccountingScreen() {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = useState("This Month");

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.mainContainer}>
      {/* Header ///////////////////////////////////// */}
      <View style={styles.titleContainerStyle}>
        <View>
          <Text style={styles.primaryText}>Accounting</Text>
          <Text style={styles.secondaryText}>Aug 1, 2021 - Aug 31, 2021</Text>
        </View>

        <View style={styles.accorContainer}>
          <Pressable
            style={styles.accordTitle}
            onPress={() => setExpanded(!expanded)}
          >
            <Text style={[styles.secondaryText, { fontWeight: "700" }]}>
              {expanded ? "Select Month" : selectedMonth}
            </Text>
            <MaterialCommunityIcons
              name={expanded ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </Pressable>
          {expanded && (
            <FlatList
              data={MONTH}
              renderItem={({ item }) => (
                <Text
                  style={{ marginBottom: 8 }}
                  onPress={() => {
                    setSelectedMonth(item);
                    setExpanded(!expanded);
                  }}
                >
                  {item}
                </Text>
              )}
            />
          )}
        </View>
      </View>

      <AppDivider />

      {/* Graph container /////////////////////////////////// */}
      <View style={styles.graphContainerStyle}>
        <Text style={[styles.primaryText, { fontSize: 14 }]}>
          AVG, Monthly Income
        </Text>
        <Text style={[styles.primaryText, { fontSize: 32, marginVertical: 4 }]}>
          $5, 849.36
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="arrow-top-right-thin"
            size={20}
            color="green"
            style={{ marginRight: 4 }}
          />
          <Text style={[styles.secondaryText]}>
            <Text style={{ color: "green" }}>3.89%</Text> vs{" "}
            <Text
              style={{
                fontWeight: "700",
                color: "#000",
              }}
            >
              $5.432.74
            </Text>{" "}
            prev. 90 days
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <AppGraph />
        </View>

        <AppDivider />
      </View>

      {/* Total progress ///////////////////////////////////////// */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: SIZE / 5,
        }}
      >
        <TotalProgress />
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            $89,240.38
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: "grey",
            }}
          >
            Total Income
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TotalProgress />
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            $89,240.38
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: "grey",
            }}
          >
            Total Expenses
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  accorContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    right: 0,
    paddingHorizontal: 12,
  },
  graphContainerStyle: {
    // backgroundColor: "red",
  },
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 24,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  primaryText: {
    fontSize: 22,
    fontWeight: "700",
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "grey",
  },
  titleContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
