import React from 'react'
import {StyleSheet, Text, SafeAreaView} from 'react-native'

const HomePage = () => {
    return(
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.text}>Requirements for a1:</Text>
            <Text style={styles.text}>Minimum 6 pages</Text>
            <Text style={styles.text}>Make use of flexbox to create different layout for each page</Text>
            <Text style={styles.text}>Use basic components like text, image, view, styles.. etc</Text>           
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper :{
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text : {
        fontSize: 20,
    },
})

export default HomePage