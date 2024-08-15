import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const TextButton = ({ buttonText, onButtonPress }) => {
    return (
        <TouchableOpacity
            onPress={onButtonPress}
            style={{
                padding: 10,
            }}
        >
            <Text
                style={{
                    fontWeight: 500,
                    color: "#ff6347",
                    textAlign: "center",
                    fontSize: 14,
                }}
            >
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}

export default TextButton;

const styles = StyleSheet.create({});