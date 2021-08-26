import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { connect } from 'react-redux';
import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Actions } from "react-native-router-flux";
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    return (
        <ImageBackground
            source={require("../../assets/bg.png")}
            style={{ width: "100%" }}
            resizeMode={FastImage.resizeMode.stretch}
        >
            <ScrollView contentContainerStyle={{}}>
                <View style={{ height: flex1 * 3.2, flexDirection: "row", }}>
                    <View style={styles.puzzle}>
                        <CustomHeader _func={() => Actions.pop()} headerLeft={"Back to Get Started"} />
                        <Text style={{ fontSize: 38, marginBottom: 40 }}>Forgot Password</Text>
                    </View >
                </View >
                <View style={{ height: flex1 * 8, paddingHorizontal: "5%", }}>
                    <Text style={{ fontSize: 18, letterSpacing: 0.2, color: Colors.slideClr }}>Enter your email address to reset your password.</Text>
                    <View style={{ borderBottomColor: Colors.gray, borderBottomWidth: 1 }}>
                        <CustomInput
                            placeholder={"Email Address"}
                            _func={text => setEmail(text)}
                        />
                    </View>
                    <View style={{ marginTop: "5%" }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18, letterSpacing: 0.2, color: Colors.slideClr }}>You may need to check your spam folder or unblock no-reply@skillprofile.com.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "flex-end", marginTop: 15 }}>
                        <CustomButton label={"Submit"} width={180} height={50} _func={() => alert(email)} />
                    </View>
                    <FastImage
                        style={{ height: "50%", width: "95%", marginTop: 20 }}
                        source={require("../../assets/4puzzle.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
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

export default connect(mapStateToProp, mapDispatchToProp)(ForgotPassword);
