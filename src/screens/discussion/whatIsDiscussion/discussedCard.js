import React, { Component } from 'react';
import {View, Text, StyleSheet,ScrollView } from 'react-native';

class DiscussedCard extends Component{
    render(){
        return(
            <View style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={styles.headerBlock}>
              <View style={{width:  '25%', height: 75, backgroundColor: 'white',  padding:10,}}>
                  <Text>Image</Text>
              </View>
                <View style={styles.discription} >
                  <Text style={styles.header}>
                  Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                  </Text>
                </View>
            </View>
        </View>
        </View>
        )
    }
}

export default DiscussedCard;

const styles = StyleSheet.create({
    cardContainer:{
        margin:10,
    },
    card:{
        // borderLeftColor: '#6D0F49',
        // borderLeftWidth: 10,
    },
    headerBlock:{
        // flex:1,
        flexDirection:'row',
        backgroundColor:'#e1e6ef',
    },
    header:{
        // fontSize:24,
    },

    textContainer:{
        padding:10,
        backgroundColor:'#c7ccd6'
    },

    text:{
        
    },

    discription:{
        width: '75%', 
        height: 75, 
        backgroundColor: 'powderblue',  
        padding:10,
        borderRadius:75,
        marginLeft:10
    }
    
})