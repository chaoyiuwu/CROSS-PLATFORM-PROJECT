import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputField from "../components/TextInputField";
import ServiceProviderButton from "../components/ServiceProviderButton";
import LargeButton from "../components/LargeButton";
import TextButton from "../components/TextButton";
import PageHeader from "../components/PageHeader";

const LoginScreen = ({ navigation }) => {
    return ( 
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
            <View
                style={{ 
                    padding: 20,
                    justifyContent: 'center',
                }}
            >
            {/* Login and Welcome Message */}
                <PageHeader 
                    title="Login"
                    message="Welcome back you've been missed!"
                />

                {/* Email and Password Input Fields */}
                <View
                    style={{
                        marginVertical: 30,
                    }}
                >
                    <TextInputField placeholder="Email" />
                    <TextInputField placeholder="Password" secureTextEntry />
                </View>

                {/* Forgot Password Message */}
                <View>
                    <Text
                        style={{
                            //fontFamily: "poppins-semiBold",
                            fontWeight: 500,
                            fontSize: 14,
                            color: "#000",
                            alignSelf: "flex-end",
                        }}
                    >
                        Forgot Your Password?
                    </Text>
                </View>

                {/* Sign In Button */}
                <LargeButton buttonText="Sign In" />

                {/* Create New Account Button */}
                <TextButton 
                    buttonText="Create New Account" 
                    onButtonPress={() => navigation.navigate("Register")} 
                />

                {/* Other Service Account Providers Buttons */}
                <View 
                    style={{
                        marginVertical: 30,
                    }}
                >
                    <Text
                        style={{
                            //fontFamily: "poppins-semiBold",
                            fontWeight: 500,
                            color: "#000",
                            textAlign: "center",
                            fontSize: 14,
                        }}
                    >
                        Or continue with
                    </Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        {/* Google Service Account Provider Button*/}
                        <ServiceProviderButton logoName="logo-google" />
                        {/* Apple Service Account Provider Button*/}
                        <ServiceProviderButton logoName="logo-apple" />
                        {/* Facebook Service Account Provider Button*/}
                        <ServiceProviderButton logoName="logo-facebook" />
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});