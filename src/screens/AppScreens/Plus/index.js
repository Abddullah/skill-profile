import Colors from "../../../common/Colors";
import LoginBtn from "../../../components/LoginBtn";
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import Tags from "react-native-tags";
import FastImage from 'react-native-fast-image';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from "react-native-router-flux";
const screenHeight = Dimensions.get('window').height - 24;
const flex1 = screenHeight / 10;
const Plus = () => {
  const [title, setTitle] = useState();
  const [imageUri, setImageUri] = useState("");
  const [image1Uri, setImage1Uri] = useState("");
  const [image2Uri, setImage2Uri] = useState("");
  const getDocument = async (stName) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (stName == "imageUri") {
        setImageUri(res.uri)
      } else if (stName == "image1Uri") {
        setImage1Uri(res.uri)
      } else if (stName == "image2Uri") {
        setImage2Uri(res.uri)
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  return (
    <ScrollView   >
      <View style={{ height: flex1 * 3, borderBottomWidth: 0.5, }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>Post New Item</Text>
          <TouchableOpacity
            onPress={() => Actions.pop()}>
            <Entypo
              name="cross"
              style={{ fontSize: 30, color: Colors.slideClr }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 7, paddingHorizontal: 15, paddingBottom: 10 }}>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={{ fontSize: 15 }}>Pictures</Text>
          </View>
          <View style={{ flex: 8, justifyContent: "space-between", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => getDocument("imageUri")}
              style={[styles.ImagePic, {
                borderWidth: imageUri == "" ? 1 : 0,
                borderStyle: imageUri == "" ? "dashed" : "solid"
              }]}>
              {imageUri == "" ?
                <FontAwesome
                  name="photo"
                  style={{ fontSize: 40, color: Colors.gray }}
                /> :
                < FastImage
                  style={{ height: "100%", width: "100%", }}
                  source={{ uri: imageUri }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              }
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => getDocument("image1Uri")}
              style={[styles.ImagePic, {
                borderWidth: image1Uri == "" ? 1 : 0,
                borderStyle: image1Uri == "" ? "dashed" : "solid"
              }]}>
              {image1Uri == "" ?
                <FontAwesome
                  name="photo"
                  style={{ fontSize: 40, color: Colors.gray }}
                /> :
                < FastImage
                  style={{ height: "100%", width: "100%", }}
                  source={{ uri: image1Uri }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              }
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => getDocument("image2Uri")}
              style={[styles.ImagePic, {
                borderWidth: image2Uri == "" ? 1 : 0,
                borderStyle: image2Uri == "" ? "dashed" : "solid"
              }]}>
              {image2Uri == "" ?
                <FontAwesome
                  name="photo"
                  style={{ fontSize: 40, color: Colors.gray }}
                /> :
                < FastImage
                  style={{ height: "100%", width: "100%", }}
                  source={{ uri: image2Uri }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: flex1 * 7, paddingHorizontal: 15 }}>
        <View style={{ flex: 2, justifyContent: "space-evenly" }}>
          <Text>Title</Text>
          <TextInput
            style={{ height: 50, paddingHorizontal: 10, borderWidth: 0.5 }}
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder={"Enter Title..."}
          />
        </View>
        <View style={{ flex: 3, justifyContent: "space-evenly" }}>
          <Text>Discription</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder={"Write a detailed discription..."}
            style={styles.textArea} />
        </View>
        <View style={{ flex: 3 }}>
          <View style={{ height: "60%", justifyContent: "space-evenly" }}>
            <Text>Tags</Text>
            <ScrollView>
              <Tags
                initialText="Type new tag"
                textInputProps={{
                  placeholder: "Any type of animal"
                }}
                onChangeTags={tags => console.log(tags)}
                onTagPress={(index, tagLabel, event, deleted) =>
                  console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                }
                containerStyle={{ marginTop: 10, borderWidth: 0.5, paddingVertical: 5 }}
                inputStyle={{ backgroundColor: "white" }}
                renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                  <TouchableOpacity
                    style={styles.tagOpacity}
                    key={`${tag}-${index}`} onPress={onPress}>
                    <View>
                      <Text>{tag}</Text>
                    </View>
                    <View
                      style={styles.tagText}>
                      <Entypo
                        name="cross"
                        style={{ fontSize: 15, color: Colors.white }}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <LoginBtn
            _func={() => Actions.Home()}
            name={"Post"}
            backgroundColor={Colors.black}
            textColor={Colors.white}
            borderRadius={0} />
        </View>
      </View>
    </ScrollView >
  )
};
const styles = StyleSheet.create({
  header: {
    flex: 3,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  ImagePic: {
    width: "32%",
    borderRadius: 10,
    borderColor: Colors.slideClr,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    height: 100,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    textAlignVertical: 'top',
  },
  tagOpacity: {
    backgroundColor: Colors.gray,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 15
  },
  tagText: {
    height: 18,
    width: 18,
    marginLeft: 15,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black
  }
});
export default Plus;