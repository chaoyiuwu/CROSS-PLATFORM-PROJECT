import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { CommonActions } from '@react-navigation/native';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Button} from 'react-native'

const HomePage = ({ navigation }) => {
    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {name: 'Landing'},
                    { name: 'Login', params: { email: null, password: null } }
                ],
            })
          );
      };

    return(
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.logoArea}>
                <Image
                style={styles.logo}
                source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/000/964/070/large_2x/cocktail-beverage-set-vector.jpg'
                }}
                />
                <Text style={styles.logoText}>MixMate: Your Personal Mixing Assistant</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    logoArea: {
        flex: 0.5,
        flexDirection: 'column'
    },
    logo: {
        flex: 1,
        aspectRatio: 1,
        resizeMode:'contain'
    },
    logoText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: '#613a2b'
    },
    logoutButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        position: "absolute",
        top: 25,
        left: 25,
      },
      logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default HomePage