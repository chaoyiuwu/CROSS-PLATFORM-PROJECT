import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const LargeButton = ({ buttonText }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 20,
                backgroundColor: "#1F41BB",
                marginVertical: 30,
                borderRadius: 10,
                shadowColor: "#1F41BB",
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
            }}
        >
            <Text
                style={{
                    fontFamily: "poppins-bold",
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