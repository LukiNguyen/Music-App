import { StyleSheet, Text, View, ScrollView, Dimensions,SafeAreaView } from "react-native";
import React from "react";
import Tag from "../../components/Tag";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CardContent from "../../components/CardContent";
const SleepScreen = () => {
  const dataMusic = [
    {
      title: "Guitar Camp",
      image: require("../../assets/images/album_01.png"),
      numberSong: 7,
      category: "Instrumental",
    },
    {
      title: "Chill-hop",
      image: require("../../assets/images/album_02.png"),
      numberSong: 7,
      category: "Jaz",
    },
    {
      title: "Pack name",
      image:require("../../assets/images/album_03.png"),
      numberSong: 5,
      category: "Ballad",
    },
    {
      title: "Guitar Camp",
      image:require("../../assets/images/album_04.png"),
      numberSong: 6,
      category: "Instrumental",
    },
    {
      title: "Guitar Camp",
      image: require("../../assets/images/album_01.png"),
      numberSong: 12,
      category: "Instrumental",
    },
    {
      title: "Guitar Camp",
      image:require("../../assets/images/album_01.png"),
      numberSong: 12,
      category: "Instrumental",
    },
  ];
  return (
    
    <SafeAreaView style={styles.containerMain}> 
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <View style={{ marginTop: 44, marginBottom: 16 }}>
          <Text style={styles.title}>Sleep</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexWrap: "nowrap", flexDirection: "row" }}>
            <View style={{ marginRight: 16 }}>
              <Tag
                name={"All"}
                icon={<Ionicons name="keypad" size={20} color="#fff" />}
              />
            </View>
            <View style={{ marginRight: 16 }}>
              <Tag
                name={"Ambient"}
                icon={<FontAwesome name="female" size={20} color="#fff" />}
              />
            </View>
            <View style={{ marginRight: 16 }}>
              <Tag
                name={"For Kids"}
                icon={
                  <MaterialIcons name="child-friendly" size={20} color="#fff" />
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{ height: Dimensions.get("window").height - 240 }}>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 16,
          }}
        >
          {dataMusic.map((element, index) => {
            return (
              <View key={index}>
                <CardContent image={element.image} title={element.title} numberSong={element.numberSong} category={element.category}/>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default SleepScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 41,
    color: "#fff",
  },
  containerMain: {
    flex: 1,
    backgroundColor: "#090E18",
  },
});
