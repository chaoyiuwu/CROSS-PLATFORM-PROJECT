import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const ServiceProviderButton = ({ logoName }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 10,
                backgroundColor: "#ECECEC",
                borderRadius: 5,
                marginHorizontal: 10,
            }}
        > 
            <Ionicons name={logoName} color="#000" size={20} />
        </TouchableOpacity>
    );
}

export default ServiceProviderButton;

const styles = StyleSheet.create({});