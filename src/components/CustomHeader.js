import Colors from "../common/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const CustomHeader = ({ _func, headerLeft, headerColor, fontSize, bold, marginTop }) => {
    return (
        <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: marginTop ? marginTop : 15
        }}
            onPress={_func}>
            <AntDesign
                name={"arrowleft"}
                size={25}
                style={{ color: headerColor ? headerColor : Colors.slideClr }}
            />
            <Text style={{ marginLeft: 10, fontSize: fontSize ? fontSize : 20, color: headerColor ? headerColor : Colors.black, fontWeight: bold ? "bold" : null }}>{headerLeft ? headerLeft : "Back"}</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.black, justifyContent: "center", alignItems: "center", borderRadius: 10
    }
});
export default CustomHeader;
