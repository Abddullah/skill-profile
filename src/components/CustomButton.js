import Colors from "../common/Colors";
import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const CustomButton = ({ width, height, label, _func }) => {
    return (
        <TouchableOpacity
            onPress={_func}
            style={[styles.btn, { width, height, }]} >
            <Text style={{ color: Colors.white }}>{label}</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.black, justifyContent: "center", alignItems: "center", borderRadius: 10
    }
});
export default CustomButton;
