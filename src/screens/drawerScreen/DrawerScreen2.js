import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomHeader from "./../../components/Header/Header";

class DrawerScreen2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <CustomHeader
          title="Discussion Feed"
          openDrawer={() => this.props.navigation.openDrawer()}
          iconName="md-checkmark-circle"
        />

        <Text> Discussion Feed </Text>
      </View>
    );
  }
}

export default DrawerScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
