import Colors from "../../common/Colors";
import FastImage from 'react-native-fast-image';
import CustomButton from '../../components/CustomButton';
import CustomBackButton from '../../components/CustomBackButton';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CreateProfileCard from '../../components/CreateProfileCard';
import RespondentsScreen from '../../screens/RespondentsScreen/index';
import { connect } from 'react-redux';
import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Picker,
} from 'react-native';
import { Actions } from "react-native-router-flux";
import StepIndicator from 'react-native-step-indicator';
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10

const CreateProfile = () => {
    const [userName, setuserName] = useState("");
    const [currentPosition, setcurrentPosition] = useState(0);
    const [responder, setresponder] = useState(false);

    const slidePositionNext = () => {
        if (currentPosition < 3) {
            setcurrentPosition(currentPosition + 1)
        }
        else {
            setresponder(true)
        }
    }
    const slidePositionBack = () => {
        if (currentPosition > 0) {
            setcurrentPosition(currentPosition - 1)
        }
    }

    return (
        <View style={{ flex: 1, }} >
            {
                (responder) ? (<RespondentsScreen />) :
                    <ScrollView contentContainerStyle={{ paddingBottom: 50, }}>
                        <View style={{ height: flex1 * 3, }}>
                            <ImageBackground
                                source={require("../../assets/header.png")}
                                style={{ width: "100%", height: flex1 * 3, }}
                                resizeMode={FastImage.resizeMode.stretch}
                            >
                                <View style={styles.puzzle}>
                                    <CustomHeader _func={() => Actions.pop()}
                                        bold={true}
                                        headerColor={"white"}
                                        headerLeft={"Create a SkillProfile"}
                                        marginTop={0}
                                    />
                                </View>
                                <View style={styles.imageContainer}>
                                    <View style={{ flex: 0.4, }}>
                                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} >
                                            <FastImage
                                                style={{ height: "85%", width: "85%", }}
                                                source={require("../../assets/addImage.png")}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, marginLeft: "3%", }}>
                                        <View style={{ borderBottomColor: Colors.white, borderBottomWidth: 0.2, height: 70, }}>
                                            <CustomInput
                                                placeholder={"Your Profile Name"}
                                                _func={text => setuserName(text)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground >
                        </View>

                        <View style={{ height: flex1 * 6, top: -40 }} >
                            <View style={styles.profileSteper}>
                                <View style={styles.profileSteperImageParent}>
                                    {
                                        (currentPosition === 0) ? (
                                            <FastImage
                                                style={styles.profileSteperImage}
                                                source={require("../../assets/profile_stapper_images/generalProfile.png")}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        ) : <View style={styles.profileSteperChild}>
                                            <Text style={{ textAlign: "center", color: "grey" }}>General{"\n"} Profile</Text>
                                        </View>
                                    }
                                </View>
                                <View style={styles.profileSteperImageParent}>
                                    {
                                        (currentPosition === 1) ? (
                                            <FastImage
                                                style={styles.profileSteperImage}
                                                source={require("../../assets/profile_stapper_images/gamming.png")}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        ) : <View style={styles.profileSteperChild}>
                                            <Text style={{ textAlign: "center", color: "grey" }}>Gaming{"\n"} Profile</Text>
                                        </View>
                                    }
                                </View>
                                <View style={styles.profileSteperImageParent}>
                                    {
                                        (currentPosition === 2) ? (
                                            <FastImage
                                                style={styles.profileSteperImage}
                                                source={require("../../assets/profile_stapper_images/work.png")}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        ) : <View style={styles.profileSteperChild}>
                                            <Text style={{ textAlign: "center", color: "grey" }}>Work{"\n"} Profile</Text>
                                        </View>
                                    }
                                </View>
                                <View style={styles.profileSteperImageParent}>
                                    {
                                        (currentPosition === 3) ? (
                                            <FastImage
                                                style={styles.profileSteperImage}
                                                source={require("../../assets/profile_stapper_images/myProfile.png")}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        ) : <View style={styles.profileSteperChild}>
                                            <Text style={{ textAlign: "center", color: "grey" }}>My {"\n"} Profile</Text>
                                        </View>
                                    }
                                </View>
                            </View>

                            <View style={{ marginTop: "8%" }}>
                                <ImageBackground
                                    source={require("../../assets/profileBg.png")}
                                    style={{ width: "100%", height: "100%" }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                >
                                    <StepIndicator
                                        // customStyles={customStyles}
                                        currentPosition={currentPosition}
                                        stepCount={4}
                                    // renderStepIndicator={renderStepIndicator}
                                    />

                                    <View style={{ flex: 1, justifyContent: "flex-end", }}>
                                        <CreateProfileCard currentPosition={currentPosition} />
                                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, alignItems: "flex-end", }}>

                                            {
                                                currentPosition > 0 &&
                                                <CustomBackButton label={"Back"} width={150} height={50} _func={() => slidePositionBack()} />
                                            }
                                            <CustomButton label={"Next"} width={150} height={50} _func={() => slidePositionNext()} />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>

                        </View>
                    </ScrollView>
            }


        </View >
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
        justifyContent: "space-between",
        // backgroundColor:"green"
    },
    forget: {
        borderBottomColor: Colors.slideClr,
        borderBottomWidth: 0.5,
        alignItems: "center",
        flexDirection: "row"
    },

    imageContainer: {
        flex: 0.8,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
    },
    profileSteper: {
        width: "80%", flexDirection: "row", padding: 10, borderRadius: 15, height: 70, marginHorizontal: "10%", backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10, }, shadowOpacity: 0.53, shadowRadius: 13.97, elevation: 21,
    },
    profileSteperChild: {
        width: "80%", top: "-30%", justifyContent: "center", alignItems: "center",
    },
    profileSteperImageParent: {
        flex: 1, margin: 5, justifyContent: "center", alignItems: "center", height: 100, overflow: "visible",
    },
    profileSteperImage: {
        height: "120%", width: "120%", marginTop: -20, shadowColor: "#FF5014",
        shadowOffset: { width: 0, height: 10, }, shadowOpacity: 0.53, shadowRadius: 13.97, elevation: 21,
    },
});

const mapStateToProp = ({ root }) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(CreateProfile);
