import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputField from "../components/TextInputField";
import LargeButton from "../components/LargeButton";
import TextButton from "../components/TextButton";
import PageHeader from "../components/PageHeader";
import alert from '../alert'

const LoginScreen = ({ route, navigation }) => {
    const {email, password} = route.params

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
                    //message="Welcome back you've been missed!"
                />

                {/* Email and Password Input Fields */}
                <View
                    style={{
                        marginVertical: 30,
                    }}
                >
                    <TextInputField 
                        placeholder="Email"  
                        onChangeText={newText => {
                            navigation.setParams({
                                email: newText
                            })
                        }}
                        defaultValue={email}
                    />
                    <TextInputField 
                        placeholder="Password"
                        secureTextEntry 
                        onChangeText={newText => {
                                navigation.setParams({
                                password: newText
                            })
                        }}
                        defaultValue={password}
                    />
                </View>

                {/* Forgot Password Message */}
                <View>
                    <Text
                        style={{
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
                <LargeButton 
                    buttonText='Sign In'
                    onButtonPress={()=> {
                        if (email != "" && password != "") {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'LoggedIn'}],
                            })
                        }
                        else {
                            alert('please enter your credentials!')
                        }
                    }}/>
                {/* Create New Account Button */}
                <TextButton 
                    buttonText="Create New Account" 
                    onButtonPress={() => navigation.navigate("Register")} 
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});