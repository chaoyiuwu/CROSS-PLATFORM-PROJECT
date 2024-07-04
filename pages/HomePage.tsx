import React from 'react'
import {StyleSheet, Text, SafeAreaView, Pressable} from 'react-native'

const HomePage = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('Login')       
    }
    return(

        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.logoText}>MixMate: Your Personal Mixing Assistant</Text>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Go to login page to get started</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper :{
        flex : 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    logoText : {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20,
        color: '#613a2b'
        
    },
    button : {
        backgroundColor: '#cbb397',
        paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 30,
    },
    buttonText : {
        color: 'white',
        fontSize:20,
    }
})

export default HomePage