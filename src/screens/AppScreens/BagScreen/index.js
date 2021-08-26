import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppContainer from '../../../container/AppContainer';
import MyCart from "../../../components/MyCart"
import React, {
  useState,
} from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Colors from "../../../common/Colors";
import style from '../../../components/Footer/style';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    Name: 'Ronnie Pierce',
    discription: 'Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.    ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    Name: 'Leon Bennett',
    discription: 'Looking for butterfly shaped necklace jewelry designs in 18kt rose gold. please send me images, and price if you have. ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Name: 'Sonia Brown',
    discription: 'Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.    ',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Name: 'Pauline Fisher',
    discription: 'Please message me if you carry calibrated blue shapphire 3mm round gemstones, need 20 carats, No more tha $200?ct quality',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Name: 'Sharlene Edwards',
    discription: 'Looking for butterfly shaped necklace jewelry design in 18kt rose gold. Please send me images, videos and price if you have. ',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Name: 'International apparela',
    discription: 'Looking for butterfly shaped necklace jewelry design in 18kt rose gold. Please send me images, videos and price if you have. ',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    Name: 'International apparel',
    discription: 'Please message me if you carry calibrated blue shapphire 3mm round gemstones, need 20 carats, No more tha $200?ct quality',

  },
];
const BagScreen = ({ }) => {
  const [arrayData, setArrayData] = useState(DATA)
  console.log(arrayData.indexOf())
  const renderItem = ({ item }) => (
    <MyCart Name={item.Name} discription={item.discription} />
  );
  return (
    <AppContainer
      route={"BagScreen"}
    >
      <View style={{ flex: 10 }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 22 }}>My Cart</Text>
          <TouchableOpacity>
            <Text
              style={{ fontSize: 16, color: Colors.slideClr }}>Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 8.6
        }}>
          <FlatList
            data={arrayData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.detailView}>
          <View style={styles.datailLength}>
            <Text style={{ fontSize: 18, color: Colors.slideClr }}>
              Details: {DATA.length} item(s)
            </Text>
            <MaterialIcons
              name={"keyboard-arrow-up"}
              size={25}
              style={{ color: Colors.slideClr }}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
            <TouchableOpacity style={styles.checkOutView}>
              <Text
                style={{ color: Colors.white, fontSize: 16 }}>Check Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  header: {
    flex: 1.2,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailView: {
    flex: 1.2,
    borderTopWidth: 0.5,
    paddingHorizontal: 15,
    flexDirection: "row"
  },
  datailLength: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row"
  },
  checkOutView: {
    height: "80%",
    width: "65%",
    backgroundColor: Colors.black,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  }

});
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
})
export default connect(mapStateToProp, mapDispatchToProp)(BagScreen);