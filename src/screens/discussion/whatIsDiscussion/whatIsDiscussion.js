import React, { Component } from "react";
import {
  Text,
  Platform,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import CustomHeader from "../../../components/Header/Header";
import DiscussedCard from "./discussedCard";
import Icon_Ionicons from "react-native-vector-icons/Ionicons";
import Icon_Material from "react-native-vector-icons/MaterialCommunityIcons";
import Icon_MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

data = [
  {
    id: 1,
    user: {
      name: "Juniper"
    },
    subject: "Hello World!",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 2,
    user: {
      name: "Robert"
    },
    subject: "React is <3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  },
  {
    id: 3,
    user: {
      name: "you can search for me using a regex : `java$`"
    },
    subject: "What's Up?",
    description:
      "Reference site about Lorem Ipsum, giving  chanaka information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 4,
    user: {
      name: "Georgia"
    },
    subject: "How are you today?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  },
  {
    id: 5,
    user: {
      name: "Albert"
    },
    subject: "Hey!",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 6,
    user: {
      name: "Zoey"
    },
    subject: "React Native!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  },
  {
    id: 7,
    user: {
      name: "Cody"
    },
    subject: "is super!",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 8,
    user: {
      name: "Chili"
    },
    subject: "Awesome!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  }
];

class WhatIsDiscussion extends Component {
  constructor() {
    super();
    this.state = { text: "", isLoading: true };
    this.fetchDiscussion();
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  fetchDiscussion = async () => {
    console.log("Fetching.... Discussion");
    await fetch("http://cupdes.com/api/v1/get-question/1", {
      method: "GET",
      headers: {
        "X-AUTH-TOKEN": "Px7zgU79PYR9ULEIrEetsb",
        "Content-Type": "XMLHttpRequest"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.datahandler(responseJson);
        this.fetchAnswer();
        // console.log("Fetch Discussion ", responseJson);
      })
      // .then((res) => {
      //     console.log("############ "+res+" ########### ")
      //     if (res.state === true) {
      //       this.removeToken()

      //     } else {
      //         alert(res.msg)
      //     }
      // })
      .done();
  };

  datahandler(data) {
    console.log("in dataHandler what is discussions ", data);

    this.setState({
      discussions: data
    });

    console.log(this.state.discussions, " ***********");
    console.log(this.state.discussions.data.question, " ***********");
  }

  fetchAnswer = async () => {
    console.log("Fetching.... Discussion Answer");
    await fetch("http://cupdes.com/api/v1/get-answers/1", {
      method: "GET",
      headers: {
        "X-AUTH-TOKEN": "Px7zgU79PYR9ULEIrEetsb",
        "Content-Type": "XMLHttpRequest"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.ansdatahandler(responseJson);
        // console.log("Fetch Discussion ", responseJson);
      })
      // .then((res) => {
      //     console.log("############ "+res+" ########### ")
      //     if (res.state === true) {
      //       this.removeToken()

      //     } else {
      //         alert(res.msg)
      //     }
      // })
      .done();
  };

  ansdatahandler(data) {
    console.log("in dataHandler what is discussions answers ", data);

    this.setState({
      answers: data,
      isLoading: false
    });

    console.log(this.state.answers, " ***********");
    console.log(this.state.answers.data.data, " ***********");

    // console.log(this.state.discussions.data.question, " ***********");
  }

  createAnswer() {
    // alert(this.state.text);
    this.putAnswer();
  }

  async putAnswer() {
    var data = {
      // email: this.state.email,
      // password: this.state.password

      user_id: 5,
      question_id: 1,
      answer: this.state.text
    };

    try {
      let response = await fetch("http://cupdes.com/api/v1/create-answer", {
        method: "POST",
        headers: {
          "X-AUTH-TOKEN": "Px7zgU79PYR9ULEIrEetsb",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log("Put answer: ", responseJson);
          alert(responseJson.message);
        });
    } catch (errors) {
      alert(errors);
    }
    this.fetchDiscussion();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerWait}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, paddingBottom: 75 }}>
          <ScrollView style={{ paddingBottom: 300 }}>
            <CustomHeader
              title=""
              alignItems="center"
              type="sub"
              sub="dotMenu"
              openDotMenu={() => alert("Clicked")}
              openDrawer={() => this.props.navigation.goBack(null)}
              navigation={this.props.navigation}
            />

            <View>
              {/* <SearchBar /> */}
              <Header
                style={{ backgroundColor: "#6D0F49" }}
                androidStatusBarColor={"#6D0F49"}
              >
                <Left>
                  <TouchableOpacity transparent>
                    {/* <Icon name='md-contact' /> */}
                    <Icon_Ionicons name="md-contact" color="white" size={30} />
                  </TouchableOpacity>
                </Left>
                <Body>
                  {/* <Title>Header</Title> */}
                  <Text style={styles.title}>
                    {this.state.discussions.data.question}
                  </Text>
                </Body>
                <Right>
                  {/* <TouchableOpacity transparent>
                    <Icon_Ionicons name="md-contacts" color="white" size={30} />
                    <Text style={{ color: "white" }}>05</Text>
                  </TouchableOpacity> */}

                  <TouchableOpacity onPress={() => alert("Clicked")}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Menu
                        ref={this.setMenuRef}
                        button={
                          <View>
                            <Icon_Ionicons
                              name="md-contacts"
                              color="white"
                              size={30}
                            />
                            <Text style={{ color: "white" }}>05</Text>
                          </View>
                        }
                      >
                        <MenuItem onPress={this.gotoDiscussion}>
                          Discussion Info
                        </MenuItem>
                        <MenuItem onPress={this.hideMenu}>Group Media</MenuItem>
                        <MenuItem onPress={this.hideMenu} disabled>
                          Search
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.hideMenu}>
                          Mute Notification
                        </MenuItem>
                        <MenuItem onPress={this.hideMenu}>More</MenuItem>
                      </Menu>
                    </View>
                    {/* <Icon_Entypo  name="dots-three-vertical"    
              
              size={25} color="white"
              />  */}
                  </TouchableOpacity>
                </Right>
              </Header>
            </View>
            {/* <DiscussedCard /> */}

            {this.state.answers.data.data.map(email => {
              return (
                <View key={email.id} style={styles.cardContainer}>
                  <View style={styles.card}>
                    <View style={styles.headerBlock}>
                      <View style={{ width: "23%", height: 75, padding: 10 }}>
                        <Icon_Ionicons
                          name="md-contact"
                          size={70}
                          color="blue"
                        />
                      </View>
                      <View style={styles.discription}>
                        <Text style={styles.header}>{email.answer}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              alignSelf: "flex-end"
            }}
          >
            <View style={styles.card}>
              <View style={styles.headerBlock}>
                <View
                  style={{
                    width: "85%",
                    height: 75,
                    backgroundColor: "#9F035C",
                    padding: 10
                  }}
                >
                  <TextInput
                    style={styles.textArea}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Input your Discussion"}
                  />
                </View>
                <View
                  style={{
                    width: "15%",
                    height: 75,
                    backgroundColor: "#9F035C",
                    padding: 10
                  }}
                >
                  <TouchableOpacity onPress={this.createAnswer.bind(this)}>
                    <Icon_Ionicons name="md-send" size={40} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

export default WhatIsDiscussion;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10
  },
  card: {
    // borderLeftColor: '#6D0F49',
    // borderLeftWidth: 10,
  },
  headerBlock: {
    // flex:1,
    flexDirection: "row",
    backgroundColor: "#e1e6ef"
  },
  header: {
    // fontSize:24,
  },

  textContainer: {
    padding: 10,
    backgroundColor: "#c7ccd6"
  },

  text: {},

  discription: {
    width: "75%",
    height: 75,
    backgroundColor: "powderblue",
    padding: 10,
    borderRadius: 75,
    marginLeft: 10
  },

  textArea: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    width: "100%",
    fontFamily: "MyriadProBoldSemiExtended"
  },

  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "400"
  }
});
