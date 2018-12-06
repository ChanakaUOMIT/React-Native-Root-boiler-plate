import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class DrawerScreen2 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text> DrawerScreen2 </Text>
             </View>
         )
     }
}
 
export default DrawerScreen2;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});