import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react' 
const CardSound = ({text,backgroundColor,icon}) => {
  return (
    <View style={styles.card}>
        <View style={[styles.iconBox,{backgroundColor:backgroundColor,}]}>
        {icon}
        </View>
        <View style={styles.bottomBox}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </View>
  )
}

export default CardSound

const styles = StyleSheet.create({
    card:{
        width:100,
        height:125,  
    },
    iconBox:{ 
        height:93,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBox:{
        backgroundColor:"#2D344B",
        height:32,
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:10,
        fontWeight:"bold",
        color:"#fff",
        lineHeight:12
    }
})