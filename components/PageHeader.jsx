import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PageHeader = ({ title, message }) => {
    return (
        <View>
            <Text
                style={{ 
                    fontSize: 30,
                    color: "#ff6347",
                    fontWeight: 800,
                    marginVertical: 30,
                    textAlign: "center",
                }}
            >
                {title}
            </Text>
            <Text
                style={{ 
                    fontWeight: 500,
                    color: "#ff6347",
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