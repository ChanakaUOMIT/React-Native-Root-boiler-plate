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
  AsyncStorage
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
// import DiscussionCard from "./discussionCard/discussionCard";
// import SearchBar from "./search/search";
import Icon_Ionicons from "react-native-vector-icons/Ionicons";
import Icon_Material from "react-native-vector-icons/MaterialCommunityIcons";
import SearchInput, { createFilter } from "react-native-search-filter";
import CustomHeader from "../../components/Header/Header";
const KEYS_TO_FILTERS = ["user.name", "subject", "description"];

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  ",
    notification: 10
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

//const  { width: WIDTH } = Dimentions.get()
class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  readDiscussion = () => {
    // this.props.navigation.navigate("Login");
    alert("Read Discussion");
  };

  render() {
    const filteredEmails = data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <ScrollView>
        <View>
          <CustomHeader title="Discussion" alignItems="center" sub="dotMenu" />
        </View>
        <View style={{ height: 60 }}>
          {/* <SearchBar /> */}
          <Header
            style={{ backgroundColor: "#9F035C", height: 70, padding: 15 }}
            androidStatusBarColor={"#6D0F49"}
          >
            {/* <Left>
                    <Button transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left> */}
            <View style={{ width: "90%" }}>
              {/* <Title>Header</Title> */}
              <SearchInput
                onChangeText={term => {
                  this.searchUpdated(term);
                }}
                style={styles.searchInput}
                placeholder="Type a message to search"
              />
            </View>
            <TouchableOpacity style={{ width: "10%" }}>
              <Button transparent>
                <Icon_Material name="pencil" color="white" size={25} />
              </Button>
            </TouchableOpacity>
          </Header>
        </View>
        <View>
          {/* <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard /> */}

          <ScrollView>
            {filteredEmails.map(email => {
              return (
                //   <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                //     <View>
                //       <Text>{email.user.name}</Text>
                //       <Text style={styles.emailSubject}>{email.subject}</Text>
                //       <Text>{email.description}</Text>

                //     </View>
                //   </TouchableOpacity>

                <TouchableOpacity
                  key={email.id}
                  style={styles.cardContainer}
                  onPress={this.readDiscussion}
                >
                  <View style={styles.card}>
                    <View style={styles.headerBlock}>
                      <View
                        style={{
                          width: "25%",
                          height: 75,
                          backgroundColor: "#F5F5F5",
                          padding: 10
                        }}
                      >
                        <Icon_Ionicons
                          name="md-contact"
                          size={45}
                          color="#6D0F49"
                        />
                      </View>
                      <View
                        style={{
                          width: "50%",
                          height: 75,
                          backgroundColor: "#F5F5F5",
                          padding: 10
                        }}
                      >
                        <Text style={styles.header}>{email.user.name}</Text>
                        <Text>Today, 12 AM</Text>
                      </View>
                      <View
                        style={{
                          width: "25%",
                          height: 75,
                          backgroundColor: "#F5F5F5",
                          padding: 10
                        }}
                      >
                        <Text>{email.notification}</Text>
                        {email.notification == 10 ? (
                          <Text>{email.notification}</Text>
                        ) : (
                          <Text />
                        )}
                      </View>
                    </View>

                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        {/* Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. */}
                        {email.description}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.clickHandler}
              style={styles.TouchableOpacityStyle}
            >
              <Image
                //We are making FAB using TouchableOpacity with an image
                //We are using online image here
                source={{
                  uri:
                    "https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png"
                }}
                //You can use you project image Example below
                //source={require('./images/float-add-icon.png')}
                style={styles.FloatingButtonStyle}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Discussion;

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
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 25,
    width: "100%"
  },

  cardContainer: {
    margin: 10
  },
  card: {
    borderLeftColor: "#6D0F49",
    borderLeftWidth: 10
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
    backgroundColor: "#EEEEEE"
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
    width: 50,
    height: 50
    //backgroundColor:'black'
  }
});
