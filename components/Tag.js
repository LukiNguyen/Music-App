import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome' 
const Tag = ({name,icon}) => {
  const [active,setActive] = useState(true)
  // const [x,y] = useState(2)
  console.log(active)
  return (
    <TouchableOpacity style={[styles.tag,{backgroundColor:active===true ? "#4870FF" : "#21283F",}]} onPress={() => setActive('áhdjkasdhasjkd')}>
       {icon}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Tag

const styles = StyleSheet.create({
  tag:{
    minWidth:66,
    height:38,
    paddingRight:18,
    paddingLeft:10,
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