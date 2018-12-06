import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class TabScreen1 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <CustomHeader 
                    title="TabScreen1"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-checkmark-circle"
                />
                <Text> TabScreen1 </Text>
             </View>
         )
     }
}
 
export default TabScreen1;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});