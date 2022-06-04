import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const DetailMusic = ({ navigation,route }) => {
  return (
    <SafeAreaView style={{backgroundColor:'green'}}>
      <View
        style={{
          backgroundColor: "red",
          height: 50,
          width: Dimensions.get("window").width,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}>
          DetailMusic
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{position: "absolute",left:20}}> 
          <Ionicons name="keypad" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image source={route.params.image} alt='/' style={{width:Dimensions.get("window").width,height:Dimensions.get("window").height}} />
      <Text>{route.params.name}</Text>
    </SafeAreaView>
  );
};

export default DetailMusic;

const styles = StyleSheet.create({});
