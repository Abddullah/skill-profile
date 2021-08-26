import React, { useState } from "react";
import FastImage from 'react-native-fast-image';
import Colors from "../../../common/Colors"
import AntDesign from 'react-native-vector-icons/AntDesign';
import ColumnWise from "../../../components/ColumnWise";
import RowWise from "../../../components/RowWise";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
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
    title: 'CES Tech',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'The National Sports',
    title2: 'NSCC',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'International apparel',
    title2: '& Textile Fair',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hong Kong Jewelry',
    title2: '& Gem Fair',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Las Vegas Antique',
    title2: 'Jewelry & Watch Show',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'International apparela',
    title2: '& Textile fair',
  },
];
const windowHeight = Dimensions.get('window').height - 24;
const Home = () => {
  const [twoScreen, setTwoScreen] = useState(true) 
  const [value, onChangeText] = useState(true)
  const renderItem = ({ item }) => (
    twoScreen ?
      <RowWise title={item.title} title2={item.title2} />
      :
      <ColumnWise title={item.title} title2={item.title2} />
  );
  return (
    <AppContainer route={"Home"}   >
      <ScrollView style={{ height: windowHeight / 1.21 }}  >
        <View style={{ height: windowHeight / 1.1, paddingHorizontal: 15 }}>
          <View style={styles.header}>
            <View style={{ flex: 1.2, justifyContent: "center" }}>
              < FastImage
                style={{ height: "80%", width: "80%", }}
                source={require("../../../assets/Group.png")}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 6.3, justifyContent: "center" }}>
              <Text style={{ fontSize: 18 }}>POSTBYS</Text>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center", alignItems: 'center' }}>
              <View style={styles.switchScreens}>
                <TouchableOpacity
                  onPress={() => setTwoScreen(!twoScreen)}
                  style={[styles.switchScreensView, {
                    backgroundColor: twoScreen ? Colors.white : null
                  }]}>
                  <FontAwesome5
                    name={"equals"}
                    size={18}
                    style={{ color: Colors.slideClr }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setTwoScreen(!twoScreen)}
                  style={[styles.switchScreensView, {
                    backgroundColor: !twoScreen ? Colors.white : null
                  }]}>
                  <AntDesign
                    name={"appstore1"}
                    size={16}
                    style={{ color: Colors.slideClr }}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
          <View style={styles.tradeshows}>
            <Text style={{ fontSize: 20 }}>Tradeshows</Text>
            <TouchableOpacity>
              <Entypo
                name={"flow-parallel"}
                size={25}
                style={{ color: Colors.slideClr }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 7.2 }}>
            {twoScreen == true ?
              <FlatList
                key={'#'}
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              /> :
              <FlatList
                key={'_'}
                numColumns={2}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            }
          </View>
        </View>
      </ScrollView>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row"
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
    backgroundColor: Colors.lightGray,
    flexDirection: "row"
  },
  tradeshows: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
   
   
});
export default Home;