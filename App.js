import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Button from "./components/ButtonCustom";
import CardSound from "./components/CardSound";
import Tag from './components/Tag'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      
      <View style={{ marginVertical: 10, marginHorizontal: 32 }}>
        <Button text={"Next"} onPress={() => Alert.alert("Next")} />
      </View>
      <View style={{ marginVertical: 10, marginHorizontal: 32 }}>
        <Button text={"Next"} onPress={() => Alert.alert("Next")} />
      </View>



      <View style={{ flexWrap: "nowrap", flexDirection: "row", marginLeft: 16 }}>
        <View  style={{ marginRight: 16 }}>
        <Tag />
        </View>
        {/* </View>
        <View  style={{ marginRight: 16 }}>
        <Tag />
        </View>
        <View  style={{ marginRight: 16 }}>
        <Tag />
        </View> */}
      </View>



      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{ flexWrap: "nowrap", flexDirection: "row", marginLeft: 16 }}
        >
          <View style={{ marginRight: 16 }}>
            <CardSound
              text={"Female voice"}
              backgroundColor={"#4870FF"}
              icon={<FontAwesome name="female" size={30} color="#fff" />}
            />
          </View>
          <View style={{ marginRight: 16 }}>
            <CardSound
              text={"White noize"}
              backgroundColor={"#00D971"}
              icon={<Entypo name="sound" size={30} color="#fff" />}
            />
          </View>
          <View style={{ marginRight: 16 }}>
            <CardSound
              text={"Lullaby"}
              backgroundColor={"#FF9C41"}
              icon={<FontAwesome5 name="cloud-moon" size={30} color="#fff" />}
            />
          </View>

          <View style={{ marginRight: 16 }}>
            <CardSound
              text={"Lullaby"}
              backgroundColor={"#FF9C41"}
              icon={<FontAwesome5 name="cloud-moon" size={30} color="#fff" />}
            />
          </View>

          <View style={{ marginRight: 16 }}>
            <CardSound
              text={"Lullaby"}
              backgroundColor={"#FF9C41"}
              icon={<FontAwesome5 name="cloud-moon" size={30} color="#fff" />}
            />
          </View>

          <View style={{ marginRight: 16 }}>
            <CardSound
              text={"Lullaby"}
              backgroundColor={"#FF9C41"}
              icon={<FontAwesome5 name="cloud-moon" size={30} color="#fff" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090E18",
  },
});
