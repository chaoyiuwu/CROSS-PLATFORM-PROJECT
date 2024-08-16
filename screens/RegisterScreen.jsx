import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TextInputField from "../components/TextInputField";
import ServiceProviderButton from "../components/ServiceProviderButton";
import LargeButton from "../components/LargeButton";
import TextButton from "../components/TextButton";
import PageHeader from "../components/PageHeader";

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const handleSignUp = () => {
        if (email === "") {
            alert("Please enter your email");
        } else if (password === "") {
            alert("Please enter your password");
        } else if (password !== confirmedPassword) {
            alert("Passwords do not match");
        } else {
            navigation.navigate("Login", {
                email,
                password
            });
        }
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.container}>
                <PageHeader
                    title="Create An Account"
                    message="Join today and become a member!"
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
                    <TextInputField
                        placeholder="Confirm Password"
                        secureTextEntry
                        onChangeText={setConfirmedPassword}
                        value={confirmedPassword}
                    />
                </View>

                <LargeButton
                    buttonText="Sign Up"
                    onButtonPress={handleSignUp}
                />

                <TextButton
                    buttonText="Already Have An Account?"
                    onButtonPress={() => navigation.navigate("Login", {
                        email: undefined,
                        password: undefined
                    })}
                />

                <View style={styles.providerContainer}>
                    <Text style={styles.orText}>Or continue with</Text>
                    <View style={styles.providerButtons}>
                        <ServiceProviderButton logoName="logo-google" />
                        <ServiceProviderButton logoName="logo-apple" />
                        <ServiceProviderButton logoName="logo-facebook" />
                    </View>
                </View>
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
    providerContainer: {
        marginVertical: 30,
        alignItems: 'center',
    },
    orText: {
        fontWeight: '500',
        color: "#ff6347",
        textAlign: "center",
        fontSize: 14,
        marginBottom: 10,
    },
    providerButtons: {
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default RegisterScreen;