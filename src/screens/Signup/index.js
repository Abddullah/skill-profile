import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import GoogleButton from '../../components/GoogleButton';
import SteamButton from '../../components/SteamButton';
import CheckBox from '@react-native-community/checkbox';
import data from '../../components/Signup/data';
import { connect } from 'react-redux';
import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    FlatList,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Actions } from "react-native-router-flux";
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <ImageBackground
            source={require("../../assets/bg.png")}
            style={{ width: "100%" }}
            resizeMode={FastImage.resizeMode.stretch}
        >
            <ScrollView contentContainerStyle={{}}>
                <View style={{ height: flex1 * 3.2, flexDirection: "row", }}>
                    <View style={styles.puzzle}>
                        <CustomHeader _func={() => Actions.pop()} />
                        <Text style={{ fontSize: 38, marginBottom: 40 }}>Sign Up</Text>
                    </View >
                    <View style={{ width: "50%", }}>
                        <View style={{ alignItems: "flex-end", }}>
                            < FastImage
                                style={{ height: "100%", width: "60%", marginRight: 10 }}
                                source={require("../../assets/Puzzle_2.png")}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </View >
                </View >
                <View style={{ height: flex1 * 7, paddingHorizontal: "5%" }}>
                    <Text style={{ fontSize: 18, letterSpacing: 0.2, color: Colors.slideClr }}>Let’s create your Skillprofile account.</Text>
                    <FlatList
                        style={{}}
                        data={data}
                        renderItem={({ item }) =>
                            <View style={{ paddingHorizontal: "5%", borderBottomColor: Colors.gray, borderBottomWidth: 1 }}>
                                <CustomInput
                                    placeholder={item}
                                    _func={text => setEmail(text)}
                                />
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />

                    <View style={[styles.Footer,{justifyContent:"flex-start"}]}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text
                            style={{ fontSize: 16, color: Colors.slideClr, }}>Accept </Text>
                        <TouchableOpacity onPress={() => Actions.Signup()}>
                            <Text
                                style={{ color: "#ff835b", fontSize: 16, textDecorationLine: "underline" }}> Accept Terms & Conditions
                                </Text>
                        </TouchableOpacity>
                        <Text
                            style={{ fontSize: 16, color: Colors.slideClr, }}> & </Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.Signup()}>
                    <Text
                        style={{ color: "#ff835b", fontSize: 16, textDecorationLine: "underline" }}> Privacy Policy
                                </Text>
                </TouchableOpacity>

                    <View style={{ alignItems: "flex-end", marginTop: 15 }}>
                        <CustomButton label={"Sign Up"} width={180} height={50} _func={() => alert(email + password)} />
                    </View>
                    < FastImage
                        style={{ height: "10%", width: "100%", marginTop: "5%" }}
                        source={require("../../assets/or.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View >
                <View style={{ height: flex1 * 2.5, alignItems: "center",marginTop:"5%" }}>
                    <GoogleButton _func={() => alert("google login")} />
                    <SteamButton _func={() => alert("steam login")} />
                    <View style={styles.Footer}>
                        <Text
                            style={{ fontSize: 15, color: Colors.slideClr, }}>Have an Account? </Text>
                        <TouchableOpacity onPress={() => Actions.Login()}>
                            <Text
                                style={{ color: "#ff835b", fontSize: 15, textDecorationLine: "underline" }}> Sign In
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ScrollView >
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    puzzle: {
        marginLeft: "5%",
        marginTop: "5%",
        justifyContent: "space-between",
        height: "100%",
    },
    Footer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingTop: 10
    },
    forget: {
        borderBottomColor: Colors.slideClr,
        borderBottomWidth: 0.5,
        alignItems: "center",
        flexDirection: "row"
    },
});

const mapStateToProp = ({ root }) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(Signup);
