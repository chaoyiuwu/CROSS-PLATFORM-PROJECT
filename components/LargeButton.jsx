import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const LargeButton = ({ buttonText, onButtonPress,}) => {

    return (
        <TouchableOpacity
            style={{
                padding: 20,
                backgroundColor: "#ff6347",
                marginVertical: 30,
                borderRadius: 10,
                shadowColor: "#ff6347",
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            }}
            onPress={onButtonPress}
        >
            <Text
                style={{
                    //fontFamily: "poppins-bold",
                    fontWeight: 800,
                    color: "#fff",
                    textAlign: "center",
                    fontSize: 20,
                }}
            >
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}

export default LargeButton;

const styles = StyleSheet.create({});