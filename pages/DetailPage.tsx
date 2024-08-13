import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Image, ScrollView} from 'react-native'

const DetailPage = ({navigation, route})=> {
    return(
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <View style={styles.mainWrapper}>
                    <Image style={styles.image}
                    source={{uri: route.params.url}}/>
                    <Text style={styles.titleText}>{route.params.name}</Text>
                    <Text style={styles.bodyText}>{route.params.desc}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper : {
        flex : 1,

    },
    mainWrapper : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center'
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