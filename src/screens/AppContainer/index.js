import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text, StatusBar, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import { Footer, FooterTab, } from 'native-base';
import CreateProfile from '../CreateProfile/index'
import RespondentsScreen from "../RespondentsScreen/index"
const AppContainer = () => {
    const [rout, setrout] = useState("Create_Profile");
    
    return (
        <View style={{ flex: 1, }}>
            <StatusBar backgroundColor="#7AB0B1" barStyle="dark-content" />
            {/* //body// */}
            {/* {
                (rout === "RespondentsScreen") ? (
                    <RespondentsScreen />
                ) : null
            } */}
            {
                (rout === "Home") ? (
                    <View style={{ flex: 6, backgroundColor: "white" }}>
                        <Text>Home </Text>
                    </View>
                ) : null
            }
            {
                (rout === "Create_Profile") ? (
                    <CreateProfile />
                ) : null
            }
            {
                (rout === "Feedback") ? (
                    <ScrollView style={{ flex: 6, backgroundColor: "white" }}>
                        <Text>feedback</Text>
                    </ScrollView>

                ) : null
            }
            {
                (rout === "settings") ? (
                    <ScrollView style={{ flex: 6, backgroundColor: "white" }}>
                        <Text>settings</Text>
                    </ScrollView>
                ) : null
            }

            <Footer style={{ backgroundColor: "#F9F9F9" }}>
                <FooterTab style={{ backgroundColor: "#FEFEFE", borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <TouchableOpacity style={{ flex: rout === "Home" ? 2 : 1, justifyContent: "center", alignItems: "center" }} onPress={() => { setrout("Home") }} >
                        {
                            (rout === "Home") ? (
                                <Image source={require('../../assets/footerIcons/selected/home.png')} resizeMode="contain"
                                    style={{ width: "75%", }}
                                />
                            ) : <Image source={require('../../assets/footerIcons/unselected/home.png')} resizeMode="contain"
                                style={{ width: "40%", height: "40%", }}
                            />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: rout === "Create_Profile" ? 2 : 1, justifyContent: "center", alignItems: "center" }} onPress={() => { setrout("Create_Profile") }} >
                        {
                            (rout === "Create_Profile") ? (
                                <Image source={require('../../assets/footerIcons/selected/createProfile.png')} resizeMode="contain"
                                    style={{ width: "100%", }}
                                />
                            ) : <Image source={require('../../assets/footerIcons/unselected/createProfile.png')} resizeMode="contain"
                                style={{ width: "40%", height: "40%", }}
                            />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: rout === "Feedback" ? 2 : 1, justifyContent: "center", alignItems: "center" }} onPress={() => { setrout("Feedback") }} >
                        {
                            (rout === "Feedback") ? (
                                <Image source={require('../../assets/footerIcons/selected/feedback.png')} resizeMode="contain"
                                    style={{ width: "100%", }}
                                />
                            ) : <Image source={require('../../assets/footerIcons/unselected/feedback.png')} resizeMode="contain"
                                style={{ width: "40%", height: "40%", }}
                            />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: rout === "settings" ? 2 : 1, justifyContent: "center", alignItems: "center" }} onPress={() => { setrout("settings") }} >
                        {
                            (rout === "settings") ? (
                                <Image source={require('../../assets/footerIcons/selected/settings.png')} resizeMode="contain"
                                    style={{ width: "75%", }}
                                />
                            ) : <Image source={require('../../assets/footerIcons/unselected/settings.png')} resizeMode="contain"
                                style={{ width: "40%", height: "40%", }}
                            />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 0, justifyContent: "center", alignItems: "center" }} onPress={() => { setrout("RespondentsScreen") }} >
                        {
                            (rout === "RespondentsScreen") ? (
                                <Image source={require('../../assets/footerIcons/selected/settings.png')} resizeMode="contain"
                                    style={{ width: "75%", }}
                                />
                            ) : <Image source={require('../../assets/footerIcons/unselected/settings.png')} resizeMode="contain"
                                style={{ width: "40%", height: "40%", }}
                            />
                        }
                    </TouchableOpacity>

                </FooterTab>
            </Footer>
        </View>
    );

}

function mapStateToProp(state) {
    return ({
    })
}
function mapDispatchToProp(dispatch) {
    return ({
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(AppContainer);