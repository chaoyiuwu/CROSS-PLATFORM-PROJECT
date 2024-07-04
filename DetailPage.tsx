import React from 'react'
import {StyleSheet, Text, SafeAreaView, Image, ScrollView} from 'react-native'

const DetailPage = ({navigation, route})=> {
    return(
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <Image style={styles.image}
                source={{uri: route.params.url}}/>
                <Text style={styles.titleText}>{route.params.name}</Text>
                <Text style={styles.bodyText}>{route.params.desc}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper : {
        flex: 1,
    },
    image : {
        width: 400,
        height: 400,
        resizeMode: 'center'
    },
    titleText : {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color: "#9b6a5b",
    },
    bodyText : {
        marginHorizontal: 40,
        fontSize: 18,
        textAlign:'justify',
        color: "#4b4d26"
        
    }
})
export default DetailPage