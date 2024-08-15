import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputField from "../components/TextInputField";
import ServiceProviderButton from "../components/ServiceProviderButton";
import LargeButton from "../components/LargeButton";
import TextButton from "../components/TextButton";
import PageHeader from "../components/PageHeader";

const RegisterScreen = ({ navigation }) => {
    var email = ""
    var password = ""
    var confirmedPassword = ""
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
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
                    style={{marginVertical: 30,}}
                >
                    <TextInputField placeholder="Email"
                        onChangeText={newText => email = newText} />
                    <TextInputField placeholder="Password" secureTextEntry
                        onChangeText={newText => password = newText}/>
                    <TextInputField placeholder="Confirm Password" secureTextEntry
                        onChangeText={newText => confirmedPassword = newText}/>
                </View>

                {/* Sign Up Button */}
                <LargeButton buttonText="Sign Up"
                    onButtonPress={() => {
                        if (email == "") {
                            alert("please enter your email")
                        }
                        else if (password == "") {
                            alert("please enter your password")
                        }
                        else if (password != confirmedPassword) {
                            alert("passwords do not match")
                        }
                        else {
                            navigation.navigate("Login", {
                                    email: email,
                                    password: password
                                
                            })
                        }
                    }}
                />

                {/* Already Have An Account Button */}
                <TextButton 
                    buttonText="Already Have An Account?" 
                    onButtonPress={() => navigation.navigate("Login", {
                            email: undefined,
                            password: undefined              
                    })} 
                />

                {/* Other Service Account Providers Buttons */}
                <View 
                    style={{
                        marginVertical: 30,
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

export default RegisterScreen;

const styles = StyleSheet.create({});