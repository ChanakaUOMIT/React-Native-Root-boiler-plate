import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Container, Header, Content, Button, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import CustomHeader from "./../../components/Header/Header";

const data = [
  {
    id: 1,
    name: "Kasun Bandara",
    role: "admin"
  },

  {
    id: 2,
    name: "Dulanga Heshan"
  },
  {
    id: 3,
    name: "Nayana Supun"
  }
];

class DiscussionParticipantList extends Component {
  addParticipant = () => {
    alert("Added");
    this.props.navigation.navigate("createDiscussion");
  };
  render() {
    return (
      <ScrollView>
        <CustomHeader
          title=""
          alignItems="center"
          type="sub"
          sub="participant"
          addParticipant={this.addParticipant}
          openDrawer={() => this.props.navigation.goBack(null)}
          goCreateDiscussion={() =>
            this.props.navigation.navigate("ModifyDiscussion")
          }
        />
        {/* <ListHeader /> */}
        <ScrollView>
          <Image
            style={{ width: "100%", height: 300 }}
            source={require("./contact.jpg")}
          />
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "90%",
                position: "absolute",
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
                padding: 5
              }}
            >
              <Text style={styles.title}>What is the Discription ?</Text>
              <Text styles={styles.taskDetails}>
                Create by Jon Doe 09/06/2019, 9.11 am
              </Text>
            </View>
            {/* <View style={{width:'10%'}} >
                        <Icon_Entypo 
                            name="pencil"
                            size={24}
                        />
                    </View> */}
          </View>
        </ScrollView>
        {/* <View style={{backgroundColor:'white', height:12}} /> */}
        <View>
          <TouchableOpacity style={styles.addTask}>
            <Text>Add Task Discription</Text>
          </TouchableOpacity>
        </View>
        {/* <Divider style={{ backgroundColor: 'blue' }} />; */}
        <View style={{ backgroundColor: "#e7e3e8", height: 12 }} />

        <View style={styles.list}>
          <Text style={styles.muteLine}>Mute Notification</Text>
          <Text style={styles.taskLine}>Task media</Text>
          <Text style={styles.participent}>11 Participents</Text>

          {data.map(data => {
            return (
              <View key={data.id} style={styles.cardContainer}>
                <View style={styles.card}>
                  <View style={styles.participantList}>
                    <View
                      style={{
                        width: "15%",
                        height: 75,
                        backgroundColor: "white",
                        padding: 10
                      }}
                    >
                      {/* <Text>Image md-contact</Text> */}
                      <Icon name="md-contact" size={45} color="#616161" />
                    </View>
                    <View
                      style={{
                        width: "60%",
                        height: 75,
                        backgroundColor: "white",
                        padding: 10
                      }}
                    >
                      <Text style={styles.name}>{data.name}</Text>
                    </View>
                    <View
                      style={{
                        width: "25%",
                        height: 75,
                        backgroundColor: "white",
                        padding: 10
                      }}
                    >
                      {data.role === "admin" ? (
                        <View style={styles.badge}>
                          <Text style={{ color: "white" }}>{data.role}</Text>
                        </View>
                      ) : (
                        <Text />
                      )}
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default DiscussionParticipantList;

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  taskDetails: {
    margin: 5
  },
  addTask: {
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    padding: 15
    // #e7e3e8
  },
  participantList: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e1e6ef"
  },
  badge: {
    backgroundColor: "#6D0F49",
    borderRadius: 20,
    alignItems: "center"
  },
  list: {
    backgroundColor: "white",
    paddingLeft: 15
  },
  muteLine: {
    color: "#616161",
    paddingBottom: 8,
    fontWeight: "600"
  },
  taskLine: {
    color: "#616161",
    paddingBottom: 8,
    fontWeight: "600"
  },
  participent: {
    color: "#6D0F49",
    paddingBottom: 8,
    fontWeight: "600"
  },
  name: {
    color: "#616161"
  }
});
