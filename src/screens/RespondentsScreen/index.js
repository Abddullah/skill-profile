import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomHeader from '../../components/CustomHeader';
import { connect } from 'react-redux';
import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Actions } from "react-native-router-flux";
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10
const RespondentsScreen = () => {
    return (
        <View style={{ flex: 1,  }} >
            <ImageBackground
                source={require("../../assets/bg.png")}
                style={{ width: "100%", height: "100%", }}
                resizeMode={FastImage.resizeMode.stretch}
            >
                <View style={{ height: flex1 * 2.3, }}>
                    <ImageBackground
                        source={require("../../assets/header.png")}
                        style={{ width: "100%", height: "85%", }}
                        resizeMode={FastImage.resizeMode.stretch}
                    >
                        <View style={styles.puzzle}>
                            <CustomHeader _func={() => Actions.pop()}
                                bold={true}
                                headerColor={"white"}
                                headerLeft={"Select Respondents"}
                                marginTop={"5%"}
                            />
                        </View>
                    </ImageBackground >
                    <View style={styles.ProfileImg}>
                        <View style={styles.profileLogo}>
                            < FastImage
                                style={{ height: "100%", width: "100%", }}
                                source={require("../../assets/Imagef.png")}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ height: flex1 * 7.7 }} >
                    <View style={styles.discriptionView}>
                        <Text style={styles.discription}>We recommend that you send your feedback request to 10 recipents to get enough responses to show you the results and keep the people's feedback anonymous. Select friends!
                    </Text>
                    </View>
                    <View style={styles.boxMainView}>
                        <View style={styles.boxesView}>
                            <Entypo
                                name={"mobile"}
                                size={45}
                                style={{ color: Colors.secondary, marginTop: "15%" }}
                            />
                            <Text style={styles.boxText}>Phone Contacts
                        </Text>
                        </View>
                        <View style={styles.boxesView}>
                            <Entypo
                                name={"mobile"}
                                size={45}
                                style={{ color: Colors.secondary, marginTop: "15%" }}
                            />
                            <Text style={styles.boxText}>Email Contacts
                        </Text>
                        </View>
                    </View>
                    <View style={{ flex: 3.5 }}>
                        <View style={{ flex: 4, justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ height: "35%" }}>
                                <Text style={{ fontWeight: "bold", }}>Share Link
                            </Text>
                            </View>
                            <View style={styles.LinkView}>
                                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                    <Entypo
                                        name={"attachment"}
                                        size={20}
                                    />
                                </View>
                                <View style={{ flex: 7 }}>
                                    <Text style={{ marginTop: "1%" }}>sklilprofile.com/share45link
                                </Text>
                                </View>
                                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                    < FastImage
                                        style={{ height: "95%", width: "95%", }}
                                        source={require("../../assets/profile_stapper_images/work.png")}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 6, alignItems: "center", justifyContent: "space-evenly" }}>
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>What do my friend see?
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Colors.primry, textDecorationLine: "underline" }}> Learn More
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Review our
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Colors.primry, textDecorationLine: "underline" }}> Privacy Policy
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View >
    )
};
const styles = StyleSheet.create({
    puzzle: {
        marginLeft: "5%",
        justifyContent: "space-between",
    },
    ProfileImg: {
        height: "100%",
        width: "100%",
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    discription: {
        textAlign: "center",
        width: "85%",
        letterSpacing: 1,
        color: Colors.slideClr,
        lineHeight: 23
    },
    discriptionView: {
        flex: 2.5,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    boxesView: {
        height: "80%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 10,
        borderRadius: 10,
        width: "35%",
        backgroundColor: Colors.white,
        alignItems: "center"
    },
    profileLogo: {
        height: 96,
        width: 96,
        borderRadius: 48,
        borderWidth: 5,
        borderColor: Colors.white
    },
    boxMainView: {
        flex: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    LinkView: {
        width: "80%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        height: "65%",
        backgroundColor: Colors.white,
        flexDirection: "row",
        borderRadius: 10
    },
    boxText: {
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginTop: "5%"
    }
});

const mapStateToProp = ({ root }) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(RespondentsScreen);
