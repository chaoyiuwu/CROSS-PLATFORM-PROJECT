import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Pressable, Image} from 'react-native'

const LandingPage = ({ navigation }) => {
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
        <View style={styles.buttonArea}>
        <Pressable style={styles.button} onPress={() => {
            navigation.navigate('Register')
        }}>
            <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=> {
            navigation.navigate('Login', {
                    email: undefined,
                    password: undefined
            })
        }}>
            <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        </View>
    </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper: {
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
        color: '#ff6347'
    },
    buttonArea: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'space-evenly',
    },
    button: {
        backgroundColor: '#ff6347',
        paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
})

export default LandingPage