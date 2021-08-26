import React from "react";
import AppContainer from '../../../container/AppContainer';
import FastImage from 'react-native-fast-image';
import Colors from '../../../common/Colors';
import Setting from "../../../components/Settings";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Actions } from "react-native-router-flux";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: "Notifications"

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: "Payment"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Transactions"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Location"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Password"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Support"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "About"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Sign Out"
  },
];
const SettingScreen = () => {
  const renderItem = ({ item }) => (
    <Setting title={item.title} />
  );
  return (
    <AppContainer route={"SettingScreen"} >
      {/* body */}
      <View style={{ flex: 7.8, width: "100%", }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => Actions.MyProfileScreen()}
            activeOpacity={0.8}
            style={{ flex: 2.2, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.profilePhoto}>
              < FastImage
                style={{ height: "80%", width: "80%", }}
                source={require("../../../assets/Imageb.png")}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.MyProfileScreen()}
            activeOpacity={0.8}
            style={{ flex: 5.8, justifyContent: "center", }}>
            <Text
              style={{ fontSize: 20 }}>Linda jhonston
            </Text>
            <Text
              style={{ fontSize: 13, color: Colors.slideClr }}>Show Profile
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 2, justifyContent: "center", alignItems: "flex-end" }}>
            <FastImage
              style={{ height: "60%", width: "60%", }}
              source={require("../../../assets/google.png")}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
        <View style={{ flex: 8.5, paddingHorizontal: 20 }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  profilePhoto: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
  },
  header: {
    flex: 1.5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    flexDirection: "row"
  }
});
export default SettingScreen;