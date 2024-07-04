import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputField from "../components/TextInputField";
import ServiceProviderButton from "../components/ServiceProviderButton";
import LargeButton from "../components/LargeButton";
import TextButton from "../components/TextButton";
import PageHeader from "../components/PageHeader";

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View
                style={{ 
                    padding: 20,
                    justifyContent: 'center',
                }}
            >
            {/* Create An Account and Welcome Message */} 
                <PageHeader 
                    title="Create An Account"
                    message="Join today and become a member!"
                />

                {/* Email, Password, and Confirm Password Input Fields */}
                <View
                    style={{
                        marginVertical: 30,
                    }}
                >
                    <TextInputField placeholder="Email" />
                    <TextInputField placeholder="Password" secureTextEntry />
                    <TextInputField placeholder="Confirm Password" secureTextEntry />
                </View>

                {/* Sign Up Button */}
                <LargeButton buttonText="Sign Up" />

                {/* Already Have An Account Button */}
                <TextButton 
                    buttonText="Already Have An Account" 
                    onButtonPress={() => navigation.navigate("Login")} 
                />

                {/* Other Service Account Providers Buttons */}
                <View 
                    style={{
                        marginVertical: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "poppins-semiBold",
                            fontWeight: 500,
                            color: "#1F41BB",
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
        </SafeAreaView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({});