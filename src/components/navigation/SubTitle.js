import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ name }) => {
  return (
    <View style={styles.containerSubTitle}>
      <Text style={styles.subTitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSubTitle: {
    backgroundColor: "#121212",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 10,
    width: "100%",
  },
  subTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default SubTitle;
