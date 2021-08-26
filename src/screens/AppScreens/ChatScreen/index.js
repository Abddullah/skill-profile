import React, { useState } from "react";
import Colors from "../../../common/Colors"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Chats from "../../../components/Chats";
import AppContainer from '../../../container/AppContainer';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    Date: "Now",
    Message: "Hi Julian! How are you Sir?",
    Name: 'Julian Dasilva',

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    Date: "15.11.2020",
    Message: "Meet me by the front entrance and we'll discuss.",
    Name: 'Ronnie Pierce',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Date: "14.11.2020",
    Message: "Rose gold color is available?",
    Name: 'Brianna Black',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Date: "12.11.2020",
    Message: "How much???",
    Name: 'Aaron Rice',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Date: "11.11.2020",
    Message: "Please send me computer photos ",
    Name: 'Pat Horton',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Date: "10.11.2020",
    Message: "Total price $250.000 after discount price",
    Name: 'Sonia Brown',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Date: "06.11.2020",
    Message: "Okay sir",
    Name: 'Rhonda Pearson',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Date: "04.11.2020",
    Message: "Location",
    Name: 'Camila Hill',
  },
];
const windowHeight = Dimensions.get('window').height - 24;
const ChatScreen = () => {
  const [value, onChangeText] = useState(true)
  return (
    <AppContainer route={"ChatScreen"}   >
      <ScrollView style={{ height: windowHeight / 1.21 }}  >
        <View style={{ height: windowHeight / 1.1 }}>
          <View style={styles.header}>
            <Text style={{ fontSize: 22 }}>Messages</Text>
            <TouchableOpacity style={styles.MsgIcon}>
              <Ionicons
                name={"chatbubble-ellipses-outline"}
                size={20}
                style={{ color: Colors.white }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBarView}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
              <Feather
                name={"search"}
                size={25}
                style={{ color: Colors.slideClr }}
              />
            </View>
            <View style={{ flex: 9, justifyContent: "center" }}>
              <TextInput
                style={{ height: "100%", fontSize: 18 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={"search"}
              />
            </View>
          </View>
          <View style={{ flex: 7.2 }}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Chats
                Name={item.Name}
                Message={item.Message}
                Date={item.Date} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  switchScreens: {
    height: "50%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  switchScreensView: {
    height: "70%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  searchBarView: {
    flex: 0.8,
    marginHorizontal: 15,
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    marginBottom: 10

  },
  tradeshows: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  MsgIcon: {
    backgroundColor: Colors.black,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
});
export default ChatScreen;