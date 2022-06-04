import { StyleSheet, Text, View, Image, Dimensions,TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo"; 
const CardContent = ({ image, title, numberSong, category }) => {
  const [status, setStatus] = useState(false);
  return (
    <View style={{ marginBottom: 8 }}>
      <View style={styles.top}>
        <Image style={styles.image} source={image} alt="/" />
        <TouchableWithoutFeedback onPress={() => setStatus(!status)}>
          <View style={styles.icon}>
            <Entypo name={!status ? "controller-play" : "controller-paus"}  size={16} color="#fff" />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.bottom}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            lineHeight: 22,
            color: "#fff",
          }}
        >
          {title}
        </Text>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              lineHeight: 18,
              color: "rgba(235, 235, 245, 0.6)",
            }}
          >
            {numberSong} Songs
          </Text>
          <Entypo name="dot-single" size={16} color="#fff" />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              lineHeight: 18,
              color: "rgba(235, 235, 245, 0.6)",
            }}
          >
            {category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  top: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    height: 164,
    width: (Dimensions.get("window").width - 16 * 2 - 15) / 2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#21283F",
  },
  icon: {
    backgroundColor: "rgba(0,0,0,0.72)",
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    position: "absolute",
    top: 16,
    left: 8,
  },
});
