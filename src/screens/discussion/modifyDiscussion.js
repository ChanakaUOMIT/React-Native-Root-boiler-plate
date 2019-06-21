import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon_Ionicons from "react-native-vector-icons/Ionicons";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle
} from "native-base";
import SearchInput, { createFilter } from "react-native-search-filter";
const KEYS_TO_FILTERS = ["user.name", "subject", "description"];
import { CheckBox } from "react-native-elements";
import Icon_MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomHeader from "./../../components/Header/Header";

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
      name: "Dulanga"
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

class ModifyDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", searchTerm: "", checked: true };
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  FloatingButtonEvent = () => {
    Alert.alert("Floating Button Clicked");
  };

  clickHandler = () => {
    alert("Clicked");
    this.props.navigation.navigate("Discussion");
    // this.props.navigation.goBack(null);
  };

  render() {
    const filteredEmails = data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <CustomHeader
          title="Discussion"
          alignItems="center"
          type="sub"
          // sub="dotMenu"
          openDrawer={() => this.props.navigation.goBack(null)}
        />

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.headerBlock}>
              <View
                style={{
                  width: "18%",
                  height: 75,
                  backgroundColor: "white",
                  padding: 10
                }}
              >
                <Icon name="camera" size={45} color="#6D0F49" />
              </View>
              <View
                style={{
                  width: "82%",
                  height: 75,
                  backgroundColor: "white",
                  padding: 10
                }}
              >
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 20
                  }}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  placeholder={"Type Group Desscusion here"}
                />
              </View>
            </View>
            <Subtitle style={{ color: "black" }}>
              Provide a group subject and optional group icon
            </Subtitle>
          </View>
        </View>
        <View>
          <SearchInput
            onChangeText={term => {
              this.searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="Type a message to search"
          />
        </View>
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <View key={email.id} style={styles.cardContainer}>
                <View style={styles.card}>
                  <View style={styles.headerBlock}>
                    <View
                      style={{
                        width: "15%",
                        height: 75,
                        backgroundColor: "white",
                        padding: 10
                      }}
                    >
                      <Icon_Ionicons
                        name="md-contact"
                        size={45}
                        color="#6D0F49"
                      />
                    </View>
                    {/* <View style={{width: '25%', height: 75, backgroundColor: 'powderblue',  padding:10,}} >
                    <Text style={styles.header}>
                         {email.user.name}
                    </Text>
                  </View> */}
                    <View
                      style={{
                        width: "85%",
                        height: 75,
                        backgroundColor: "white",
                        padding: 10
                      }}
                    >
                      <CheckBox
                        // center
                        title={email.user.name}
                        iconRight
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor="red"
                        checked={() =>
                          this.setState({ checked: !this.state.checked })
                        }
                        //   () => this.setState({checked: !this.state.checked})
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}
        >
          {/* <Icon_MaterialIcons  name="navigate-next"                    
                        size={45} color="black"/> */}
          <Image
            source={require("./nextButton.png")}
            //  source={{
            //     uri:'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',

            // }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent} style={styles.TouchableOpacityStyle} >
           <Image source={require('../task/contact.jpg')}  style={styles.FloatingButtonStyle} />
         </TouchableOpacity> */}
      </ScrollView>
    );
  }
}

export default ModifyDiscussion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 10
  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)"
  },
  searchInput: {
    padding: 10
    //   borderColor: '#CCC',
    //   borderWidth: 1
  },

  cardContainer: {
    // margin:10,
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
    fontSize: 24
  },

  textContainer: {
    padding: 10,
    backgroundColor: "#c7ccd6"
  },

  text: {},

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 90,
    height: 90
    //backgroundColor:'black'
  }
});
