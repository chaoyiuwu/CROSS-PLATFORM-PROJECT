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
                // message="Welcome back, you've been missed!"
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

                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>
                        Forgot Your Password?
                    </Text>
                </View>

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
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginVertical: 20,
    },
    forgotPasswordText: {
        fontWeight: '500',
        fontSize: 14,
        color: "#000",
    },
});

export default LoginScreen;