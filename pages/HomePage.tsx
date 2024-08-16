import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native';

const HomePage = ({ navigation }) => {
    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Landing' },
                    { name: 'Login', params: { email: null, password: null } }
                ],
            })
        );
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
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
                <View style={styles.descriptionArea}>
                    <Text style={styles.description}>
                        Discover the best cocktails and mix your own unique drinks with MixMate.
                        Whether you're a home bartender or a seasoned mixologist, our app provides
                        the recipes, ingredients, and tips you need to create amazing beverages.
                    </Text>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoArea: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
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
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    descriptionArea: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        lineHeight: 24,
    },
    logoutButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomePage;