import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import CardSound from '../../components/CardSound'
import Feather from 'react-native-vector-icons/Feather'
const ComposerScreen = () => {
  const [status,setStatus] = useState(false) 
  //Sau khi set => numberCount =2
  //=> trả lại giao diện theo logic được xử lý
  useEffect(() => {
    Alert.alert("OK")
  },[])
  return (
    <View style={{flex: 1,backgroundColor: 'orange',alignItems: 'center',justifyContent: 'center'}}>
    <TouchableOpacity onPress={() => {
      setStatus(!status) 
      }}>
      <CardSound text={'ok'} backgroundColor={status ?"green": 'red'  } icon={<Feather name='activity' color='#fff' size={25} />} />
    </TouchableOpacity>
    </View>
  )
}

export default ComposerScreen

const styles = StyleSheet.create({})





// Chia làm 2 loại CHÍNH
// - Không có dependency
// - Có dependency

// -Dependency trống
// - Dependency không trống