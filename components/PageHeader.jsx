import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PageHeader = ({ title, message }) => {
    return (
        <View>
            <Text
                style={{ 
                    fontSize: 30,
                    color: "#1F41BB",
                    fontFamily: "poppins-bold",
                    fontWeight: 800,
                    marginVertical: 30,
                    textAlign: "center",
                }}
            >
                {title}
            </Text>
            <Text
                style={{ 
                    fontFamily: "poppins-semiBold",
                    fontWeight: 500,
                    fontSize: 20,
                    textAlign: "center",
                }}
            >
                {message}
            </Text>
        </View>
    );
}

export default PageHeader;

const styles = StyleSheet.create({});