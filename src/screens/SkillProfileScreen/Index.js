import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

const SkillProfile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={{ flex: 5, alignItems: "center", }}>
                < FastImage
                    style={{ height: "100%", width: "85%", }}
                    source={require("../../assets/Startscreen.png")}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
            <View style={{ flex: 5, paddingHorizontal: 20 }}>
                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                    <Text
                        style={{ fontSize: 30, letterSpacing: 0.5, fontWeight: "bold" }}>SkillProfile
                    </Text>
                </View>
                <View style={styles.aboutYourSelf}>
                    <Text
                        style={{ fontSize: 20, letterSpacing: 3, }}>Learn More About Yourself
                     </Text>
                </View>
                <View style={{ flex: 3.5, alignItems: "center" }}>
                    <Text
                        style={styles.About}>Create a SkillProfile by adding things you know or do and then request anonymous rating from friends. colleague, schoolmates and others.
                    </Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", }}>
                    <TouchableOpacity
                    onPress={()=>Actions.Login()}
                    style={styles.btn}>
                        <Text
                            style={{ color: Colors.white, fontWeight: "bold", fontSize: 15 }}>Get Started
                        </Text>
                        <Fontisto
                            name={"arrow-right-l"}
                            size={20}
                            style={{ color: Colors.slideClr }}
                        />
                    </TouchableOpacity>
                    <View style={styles.Footer}>
                        <Text
                            style={{ fontSize: 15, color: Colors.slideClr, }}>No Account? </Text>
                        <TouchableOpacity onPress={()=>Actions.Signup()}>
                            <Text
                                style={{ color: "#ff835b", fontSize: 15, textDecorationLine: "underline" }}> Sign Up
                                  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </View >
    )
};
const styles = StyleSheet.create({
    aboutYourSelf: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    About: {
        lineHeight: 25,
        marginTop: 5,
        width: "90%",
        letterSpacing: 1,
        fontSize: 15,
        color: Colors.slideClr,
        textAlign: "center"
    },
    btn: {
        marginTop: 10,
        height:55,
        borderRadius: 10,
        backgroundColor: "black",
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    Footer: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 15
    }
});

const mapStateToProp = ({ root }) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(SkillProfile);
