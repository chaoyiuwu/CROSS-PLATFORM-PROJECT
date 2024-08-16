import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, StatusBar } from 'react-native';

const LandingPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.logoArea}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/000/964/070/large_2x/cocktail-beverage-set-vector.jpg'
                    }}
                />
                <Text style={styles.logoText}>MixMate</Text>
                <Text style={styles.subtitle}>Your Personal Mixing Assistant</Text>
            </View>
            <View style={styles.buttonArea}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login', { email: undefined, password: undefined })}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    logoArea: {
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ff6347',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
    buttonArea: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#ff6347',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LandingPage;