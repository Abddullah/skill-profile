import Colors from "../common/Colors";
import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const CustomBackButton = ({ width, height, label, _func }) => {
    return (
        <TouchableOpacity
            onPress={_func}
            style={[styles.btn, { width, height, }]} >
            <Text style={{ color: Colors.black }}>{label}</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    btn: {
        borderWidth: 1, borderColor: "#B8B8B8", justifyContent: "center", alignItems: "center", borderRadius: 10
    }
});
export default CustomBackButton;
