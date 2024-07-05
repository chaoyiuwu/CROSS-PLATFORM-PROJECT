import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const TextInputField = ({ ...otherProps }) => {
    const [focused, setFocused] = useState(false);
    return (
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholderTextColor={"#626262"}
            style={[
                {
                    //fontFamily: "poppins-regular",
                    fontSize: 14,
                    padding: 20,
                    backgroundColor: "#f1f4ff",
                    borderRadius: 10,
                    marginVertical: 10,
                },
                focused && { 
                    borderWidth: 3,
                    borderColor: "#1F41BB",
                    shadowOffset: {width: 4, height: 10}, 
                    shadowColor: "#1F41BB",
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                },
            ]}
            {...otherProps}
        />
    );
}

export default TextInputField;

const styles = StyleSheet.create({});