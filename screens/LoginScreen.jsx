import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TextInputField from "../components/TextInputField";
import LargeButton from "../components/LargeButton";
import TextButton from "../components/TextButton";
import PageHeader from "../components/PageHeader";
import alert from '../alert'

const LoginScreen = ({ route, navigation }) => {
    const { email: initialEmail, password: initialPassword } = route.params || {};
    const [email, setEmail] = useState(initialEmail || "");
    const [password, setPassword] = useState(initialPassword || "");

    const handleSignIn = () => {
        if (email && password) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoggedIn' }],
            });
        } else {
            alert('Please enter your credentials!');
        }
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.container}>
                <PageHeader
                    title="Login"
                
                />

                <View style={styles.inputContainer}>
                    <TextInputField
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInputField
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
                

                <TextButton
                        buttonText="Forgot Password?"
                        onButtonPress={() => navigation.navigate("ForgotPassword")} 
                    />

                <LargeButton
                    buttonText="Sign In"
                    onButtonPress={handleSignIn}
                />

                <TextButton
                    buttonText="Create New Account"
                    onButtonPress={() => navigation.navigate("Register")}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
        justifyContent: 'center',
    },
    inputContainer: {
        marginVertical: 30,
    },
    
   
});

export default LoginScreen;