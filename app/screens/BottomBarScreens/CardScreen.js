import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "../../components/appComponent/AppText";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const dummy_Task = [
  {
    color: "#ff9e2d",
    id: 1,
    text: "New",
    value: 3,
  },
  {
    id: 2,
    text: "Assigned",
    color: "#1959fa",
    value: 16,
  },
  {
    id: 3,
    text: "Closed",
    color: "#1acad7",
    value: 32,
  },
];

const SIZE = 100.0;
const { width, height } = Dimensions.get("screen");

export default function CardScreen() {
  return (
    <View>
      <Header BackgroundColor={"#fff"} />

      {/* Task summary component */}
      <View style={styles.taskSummaryComp}>
        <AppText
          children={"Task Summary"}
          Size={20}
          Color="#000"
          Weight="700"
          style={{ padding: 14 }}
        />

        <FlatList
          data={dummy_Task}
          renderItem={({ item, index }) => {
            return (
              <>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: item.color,
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "space-between",
                  }}
                >
                  <AppText children={item.text} Color="#fff" Size={16} />
                  <AppText children={item.value} Size={28} Color="#fff" />
                </View>
              </>
            );
          }}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 14,
          }}
        >
          <AppText children={"See All today tasks"} Color="#1acad7" />
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="#1acad7"
          />
        </View>
      </View>

      {/* On-Time Completion Rate */}
      <View style={styles.completionRateComp}>
        <AppText
          children={"On-time Completion Rate"}
          Color="grey"
          Weight="700"
        />
        <View
          style={{
            marginVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AppText children={"98%"} Color="#000" Size={24} Weight="700" />
            <MaterialCommunityIcons
              name="arrow-top-right-thin"
              size={20}
              color="green"
              style={{ marginRight: 4 }}
            />
            <AppText children={"2.73%"} Color="green" Weight="700" />
          </View>
        </View>
      </View>

      {/* Properties Component */}
      <View style={styles.propertiesComp}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 14,
          }}
        >
          <AppText
            children={"Properties"}
            Color="#000"
            Size={18}
            Weight="700"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AppText children={"See All today tasks"} Color="#1acad7" />
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#1acad7"
            />
          </View>
        </View>

        <View>
          <FlatList
            data={[
              { id: 1, count: 298, text: "Occupied 48%", color: "blue" },
              {
                id: 2,
                count: 249,
                text: "Vacant 39%",
                color: "aqua",
              },
              {
                id: 3,
                count: 85,
                text: "Maintaince 13%",
                color: "orange",
              },
            ]}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  margin: 14,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: `${item.color}`,
                    marginRight: 14,
                    borderRadius: 2,
                  }}
                />
                <View>
                  <AppText
                    children={item.count}
                    Color="#000"
                    Size={20}
                    Weight="700"
                  />
                  <AppText children={item.text} Color="grey" />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskSummaryComp: {
    backgroundColor: "#fff",
    marginVertical: 4,
  },
  completionRateComp: {
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 8,
  },
  propertiesComp: {
    backgroundColor: "#fff",
  },
});
