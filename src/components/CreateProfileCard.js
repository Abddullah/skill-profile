import Colors from "../common/Colors";
import { connect } from 'react-redux';
import React, { useState } from "react";
import { Text, StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Picker, } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Actions } from "react-native-router-flux";
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10

const CreateProfileCard = ({ currentPosition }) => {
    const [selectItem, setselectItem] = useState([]);
    const itemAdd = (item, index) => {
        let cloneData = selectItem.slice(0)
        if (cloneData.length < 2) {
            cloneData.push(item)
            setselectItem(cloneData)
        }
        else {
            alert("You can not add more item at this time")
        }
    }
    const itemDelete = (item, index) => {
        let cloneData = selectItem.slice(0)
        cloneData.splice(index, 1)
        setselectItem(cloneData)
    }

    let img = [
        require("../assets/skillprofileDropdown/generalProfileDd.png"),
        require("../assets/skillprofileDropdown/skillDd.png"),
        require("../assets/skillprofileDropdown/attitudeDd.png"),
        require("../assets/skillprofileDropdown/CompetenciesDd.png"),
    ]

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={img[currentPosition]}
                style={styles.bgImage}
                resizeMode={"contain"}
            >
                <View style={{ marginTop: "12%" }}>
                    <Text>Knowledge</Text>
                </View>

                <View style={styles.pickerStyle}>
                    <Picker
                        itemStyle={{ color: "grey" }}
                        mode="dropdown"
                        selectedValue={""}
                        onValueChange={(itemValue, itemIndex) =>
                            itemAdd(itemValue, itemIndex)
                        }>
                        <Picker.Item label="Select Attributes" value="" />
                        <Picker.Item label="Accounting" value="Accounting" />
                        <Picker.Item label="Sales" value="Sales" />
                        <Picker.Item label="Miscrosoft Excel" value="Miscrosoft_Excel" />
                        <Picker.Item label="Dependability" value="Dependability" />
                        <Picker.Item label="Accountant - Entry Level" value="Accountant - Entry Level" />
                    </Picker>
                </View>

                <View style={{ flexDirection: "row" }}>
                    {
                        (selectItem && selectItem.length != 0) ? (
                            selectItem.map((key, index) => {
                                return (

                                    (currentPosition == 0) ? (
                                        <View style={styles.tags}>
                                            <Text style={{ fontSize: 12, color: "#FFB412" }}>{key}</Text>
                                            <TouchableOpacity
                                                onPress={(key, index) => {
                                                    itemDelete(key, index)
                                                }}
                                            >
                                                <Entypo name="cross" style={{ fontSize: 18, marginLeft: 10, color: "#FFB412" }} />
                                            </TouchableOpacity>
                                        </View>
                                    ) :

                                        (currentPosition == 1) ? (
                                            <View style={styles.tags1}>
                                                <Text style={{ fontSize: 12, color: "#FF5018" }}>{key}</Text>
                                                <TouchableOpacity
                                                    onPress={(key, index) => {
                                                        itemDelete(key, index)
                                                    }}
                                                >
                                                    <Entypo name="cross" style={{ fontSize: 18, marginLeft: 10, color: "#FF5018" }} />
                                                </TouchableOpacity>
                                            </View>
                                        ) :

                                            (currentPosition == 2) ? (
                                                <View style={styles.tags2}>
                                                    <Text style={{ fontSize: 12, color: "#1D5253" }}>{key}</Text>
                                                    <TouchableOpacity
                                                        onPress={(key, index) => {
                                                            itemDelete(key, index)
                                                        }}
                                                    >
                                                        <Entypo name="cross" style={{ fontSize: 18, marginLeft: 10, color: "#1D5253" }} />
                                                    </TouchableOpacity>
                                                </View>
                                            ) :

                                                (currentPosition == 3) ? (
                                                    <View style={styles.tags3}>
                                                        <Text style={{ fontSize: 12, color: "#5FA1A2" }}>{key}</Text>
                                                        <TouchableOpacity
                                                            onPress={(key, index) => {
                                                                itemDelete(key, index)
                                                            }}
                                                        >
                                                            <Entypo name="cross" style={{ fontSize: 18, marginLeft: 10, color: "#5FA1A2" }} />
                                                        </TouchableOpacity>
                                                    </View>
                                                ) : null

                                )
                            })
                        ) : null
                    }
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center", alignItems: "center", marginTop: "10%"
    },
    bgImage: {
        width: "100%", height: "120%", justifyContent: "center", alignItems: "center",
    },
    pickerStyle: {
        width: "70%", borderRadius: 5, marginTop: 10, backgroundColor: "#F5F7F7",
    },
    tags: {
        borderWidth: 1, margin: "1%", borderRadius: 10, flexDirection: "row", padding: 10, marginTop: 10, backgroundColor: "#FBEAB8", borderColor: "#FFB412",
    },
    tags1: {
        borderWidth: 1, margin: "1%", borderRadius: 10, flexDirection: "row", padding: 10, marginTop: 10, backgroundColor: "#FFEEE8", borderColor: "#FF5018",
    },
    tags2: {
        borderWidth: 1, margin: "1%", borderRadius: 10, flexDirection: "row", padding: 10, marginTop: 10, backgroundColor: "#E8EEEE", borderColor: "#1D5253",
    },
    tags3: {
        borderWidth: 1, margin: "1%", borderRadius: 10, flexDirection: "row", padding: 10, marginTop: 10, backgroundColor: "#F1F7F7", borderColor: "#5FA1A2",
    },
});

const mapStateToProp = ({ root }) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(CreateProfileCard);
