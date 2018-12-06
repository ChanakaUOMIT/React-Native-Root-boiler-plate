import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigator from '../tabNavigation/TabNavigator'
import DrawerScreen1 from '../../screens/drawerScreen/DrawerScreen1'
import DrawerScreen2 from '../../screens/drawerScreen/DrawerScreen2'
import DrawerScreen3 from '../../screens/drawerScreen/DrawerScreen3'
// import { Right } from 'native-base';

const CustomDrawerComponent = (props)=>(
  <SafeAreaView>
      <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../../Images/user.jpg')} style={{height:120, width:120, borderRadius:60}} />
      </View>
      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView>
)


export default createDrawerNavigator({
  Home: {
    screen: TabNavigator, 
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
    }
  },

  DrawerScreen1: {
    screen: DrawerScreen1,
    navigationOptions: {
      drawerLabel: 'DrawerScreen1',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },

  DrawerScreen2: {
    screen: DrawerScreen2,
    navigationOptions: {
      drawerLabel: 'DrawerScreen2',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },

  DrawerScreen3: {
    screen: DrawerScreen3,
    navigationOptions: {
      drawerLabel: 'DrawerScreen3',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },
},
{
  drawerPosition :"right",
  contentComponent:CustomDrawerComponent

});  

