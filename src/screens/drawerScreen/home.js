import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomHeader from "../../components/Header/Header";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <CustomHeader
          title="TabScreen2"
          openDrawer={() => this.props.navigation.openDrawer()}
          iconName="md-checkmark-circle"
        />
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
