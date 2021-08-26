import Colors from "../common/Colors";
import FastImage from 'react-native-fast-image';
import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const SteamButton = ({_func }) => {
    return (
        <TouchableOpacity 
        onPress={_func}
        style={[styles.google, { marginTop: "5%", backgroundColor: Colors.black }]}>
            < FastImage
                style={styles.imgGoogle}
                source={require("../assets/steam.png")}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{ color: Colors.white, fontSize: 18 }}>Sign In/Sign Up With Steam</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    google: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: Colors.primry,
        height: 50,
        width: "80%",
        borderRadius: 10
    },
    imgGoogle: {
        marginLeft: 10,
        height: "70%",
        width: "11%",
        backgroundColor: Colors.white,
        borderRadius: 5
    },
});
export default SteamButton;
