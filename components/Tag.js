import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome' 
const Tag = () => {
  const [active,setActive] = useState(true)
  // const [x,y] = useState(2)
  console.log(active)
  return (
    <TouchableOpacity style={[styles.tag,{backgroundColor:active===true ? "red" : "green",}]} onPress={() => setActive('áhdjkasdhasjkd')}>
      <FontAwesome name="female" size={20} color="#fff" />
      <Text style={styles.text}>All</Text>
    </TouchableOpacity>
  )
}

export default Tag

const styles = StyleSheet.create({
  tag:{
    width:66,
    height:38,
    paddingRight:16,
    paddingLeft:8,
    paddingVertical:8, 
    borderRadius:19,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize:17,
    fontWeight:"600",
    lineHeight:22,
    color:"#fff",
    marginLeft:4,
  }
})