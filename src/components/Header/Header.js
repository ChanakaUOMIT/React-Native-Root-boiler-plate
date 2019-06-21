import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  // Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right
} from "native-base";
// import DrawerNavigation from '../../navigations/DrawerNavigation';
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon_Ionicons from "react-native-vector-icons/Ionicons";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

// dots-three-vertical

class CustomHeader extends Component {
  constructor(props) {
    super(props);
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

  gotoDiscussion = () => {
    this._menu.hide();
    this.props.navigation.navigate("DiscussionParticipantList");
  };

  option1Click = () => {
    this._menu.hide();
    this.props.option1Click();
  };

  render() {
    const {
      title,
      sub,
      openDotMenu,
      dotMenu,
      openDrawer,
      iconName,
      leftPress,
      type,
      iconNameRight,
      gotoDiscussion,
      navigation,
      add,
      goCreateDiscussion
    } = this.props;
    const rightIcon =
      type === "sub" ? (
        <Icon_Ionicons
          name="ios-arrow-back"
          size={25}
          color="white"
          onPress={openDrawer}
        />
      ) : (
        <Button transparent onPress={openDrawer}>
          <Icon name="bars" size={25} color="white" />
        </Button>
      );

    const leftIcon =
      (sub === "dotMenu") & (sub != null) ? (
        <TouchableOpacity onPress={openDotMenu}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Menu
              ref={this.setMenuRef}
              button={
                <Icon_Entypo
                  name="dots-three-vertical"
                  onPress={this.showMenu}
                  size={25}
                  color="white"
                />
              }
            >
              <MenuItem onPress={this.gotoDiscussion}>Discussion Info</MenuItem>
              <MenuItem onPress={this.hideMenu}>Group Media</MenuItem>
              <MenuItem onPress={this.hideMenu} disabled>
                Search
              </MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.hideMenu}>Mute Notification</MenuItem>
              <MenuItem onPress={this.hideMenu}>More</MenuItem>
            </Menu>
          </View>
          {/* <Icon_Entypo  name="dots-three-vertical"    
            
            size={25} color="white"
            />  */}
        </TouchableOpacity>
      ) : (
        //   : add === "participant" ? (
        //     <Icon_Ionicons
        //       name="ios-add"
        //       size={25}
        //       color="white"
        //       onPress={openDrawer}
        //     />
        //   )
        <Icon_Ionicons
          name="ios-add"
          size={25}
          color="white"
          onPress={goCreateDiscussion}
        />
        // <Icon
        //   // name="md-notifications"
        //   onPress={leftPress}
        //   name={iconName}
        //   style={{ fontSize: 23, color: "#ffffff" }}
        // />
      );

    return (
      <View>
        <Header
          style={{ backgroundColor: "#6D0F49" }}
          androidStatusBarColor={"#6D0F49"}
        >
          <Left>{rightIcon}</Left>
          <Body>
            <Title style={{ textAlign: "center" }}>{title}</Title>
          </Body>
          <Right>
            {/* <Icon                            
                                // name="md-notifications"
                                onPress={leftPress}
                                name={iconName}
                                style={{fontSize: 23,  color: '#ffffff'}}  
                            /> */}
            {leftIcon}
          </Right>
        </Header>
      </View>
    );
  }
}

export default CustomHeader;

CustomHeader.propsTypes = {
  title: PropTypes.string,
  openDrawer: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  leftPress: PropTypes.func,
  type: PropTypes.string,
  iconNameRight: PropTypes.string,
  sub: PropTypes.string,
  openDotMenu: PropTypes.func,
  gotoDiscussion: PropTypes.func,
  add: PropTypes.string,
  goCreateDiscussion: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerCenter: {
    textAlign: "center"
  }
});
