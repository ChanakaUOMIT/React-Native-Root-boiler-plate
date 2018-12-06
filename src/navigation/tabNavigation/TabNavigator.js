import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import IconIonic from 'react-native-vector-icons/Ionicons';
import TabScreen1 from '../../screens/tabscreen/TabScreen1'
import TabScreen2 from '../../screens/tabscreen/TabScreen2'
import TabScreen3 from '../../screens/tabscreen/TabScreen3'
import colors from '../../styles/colors';

const TabNavigation = createMaterialTopTabNavigator({
    Screen1:{
        screen:TabScreen1,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-book"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    Screen2:{
        screen:TabScreen2,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-notifications"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    Screen3:{
        screen:TabScreen3,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-locate"
                    size={30}
                    color={tintColor} />
            )
        }
    },

},{
    tabBarPosition:'bottom',
    // initialRouteName:'Notice',
    animationEnabled:true,
    tabBarOptions: {
        showIcon:true,
        // labelStyle: {
        //   fontSize: 12,
        // },
        // tabStyle: {
        //   width: 100,
        // },
        style: {
          backgroundColor: colors.greenPrimary,
          height:60,

        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});