import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    const handleResetPassword = () => {
       
        alert('Password has been reset!');
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.header}>Forgot Password?</Text>
                <Text style={styles.description}>
                    Enter your email and new password to reset your password.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Create a new password"
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <Button title="Reset Password" onPress={handleResetPassword} />

                <Text
                    style={styles.backToLogin}
                    onPress={() => navigation.navigate('Login')}
                >
                    Back to Login
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
    },
    backToLogin: {
        color: '#007BFF',
        marginTop: 20,
        textAlign: 'center',
    },
    
});

export default ForgotPasswordScreen;