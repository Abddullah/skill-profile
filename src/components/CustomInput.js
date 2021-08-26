import React from "react";
import {
    TextInput,
    StyleSheet,
} from 'react-native';
const CustomInput = ({ width, placeholder, secureTextEntry, _func }) => {
    return (
        <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={{ marginTop: "5%", fontSize: 17, height: 45, width }}
            onChangeText={text => _func(text)}
        />
    )
};
const styles = StyleSheet.create({

});
export default CustomInput;
