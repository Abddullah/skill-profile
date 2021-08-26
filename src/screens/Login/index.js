import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import GoogleButton from '../../components/GoogleButton';
import SteamButton from '../../components/SteamButton';
import { connect } from 'react-redux';
import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    TextInput,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Actions } from "react-native-router-flux";
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                        <Text style={{ fontSize: 38, marginBottom: 40 }}>Get Started</Text>
                    </View >
                    <View style={{ width: "50%", }}>
                        <View style={{ alignItems: "flex-end", }}>
                            <FastImage
                                style={{ height: "100%", width: "60%", marginRight: 10 }}
                                source={require("../../assets/puzzle.png")}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>

                    </View >
                </View >
                <View style={{ height: flex1 * 4.8, paddingHorizontal: "5%" }}>
                    <Text style={{ fontSize: 18, letterSpacing: 0.2, color: Colors.slideClr }}>Enter your email address and password to get access to your account.</Text>
                    <View style={{ borderBottomColor: Colors.gray, borderBottomWidth: 1 }}>
                        <CustomInput
                            placeholder={"Email Address"}
                            _func={text => setEmail(text)}
                        />
                    </View>
                    <View style={styles.forget}>
                        <CustomInput width={"65%"} secureTextEntry={true}
                            placeholder={"Password"}
                            _func={text => setPassword(text)}
                        />
                        <TouchableOpacity onPress={() => { Actions.ForgotPassword() }}>
                            <Text style={{ color: Colors.primry }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "flex-end", marginTop: 15 }}>
                        <CustomButton label={"Start"} width={180} height={50} _func={() => Actions.AppContainer()} />
                    </View>
                    < FastImage
                        style={{ height: "12%", width: "100%", marginTop: "5%" }}
                        source={require("../../assets/or.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View >
                <View style={{ height: flex1 * 2.5, alignItems: "center", }}>
                    <GoogleButton _func={() => alert("google login")} />
                    <SteamButton _func={() => alert("steam login")} />
                    <View style={styles.Footer}>
                        <Text
                            style={{ fontSize: 15, color: Colors.slideClr, }}>Don't Have an Account? </Text>
                        <TouchableOpacity onPress={() => Actions.Signup()}>
                            <Text
                                style={{ color: "#ff835b", fontSize: 15, textDecorationLine: "underline" }}> Sign Up
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ScrollView >
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    Footer: {
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 10
    },
    puzzle: {
        marginLeft: "5%",
        marginTop: "5%",
        justifyContent: "space-between",
        height: "100%"
    },
    forget: {
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        alignItems: "center",
        flexDirection: "row"
    },
});

const mapStateToProp = ({ root }) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(Login);
