import React from 'react'
import {StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ImageBackground} from 'react-native'

let itemname1 = 'Whiskey Sour'
let itemname2 = 'vodka martini'
let itemname3 = 'mojito'
let itemname4 = 'old-fashioned'

const ListPage = ({navigation}) => {
    return(
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity style={styles.itemBox}
                onPress={() => navigation.navigate('Detail', {category: itemname1})}>
                <ImageBackground 
                source={{uri:'https://images.pexels.com/photos/6542662/pexels-photo-6542662.jpeg'}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname1}</Text>
                </ImageBackground>          
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
            onPress={() => navigation.navigate('Detail', {category: itemname2})}>
                <ImageBackground 
                source={{uri:'https://images.pexels.com/photos/4786625/pexels-photo-4786625.jpeg'}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname2}</Text>
                </ImageBackground>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
            onPress={() => navigation.navigate('Detail', {category: itemname3})}>
            <ImageBackground 
                source={{uri:'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg'}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname3}</Text>
                </ImageBackground>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
            onPress={() => navigation.navigate('Detail', {category: itemname4})}>
                <ImageBackground 
                source={{uri:'https://images.pexels.com/photos/19252758/pexels-photo-19252758/free-photo-of-whiskey-with-ice-cubes-and-orange-peel-in-lowball-glass.jpeg'}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname4}</Text>
                </ImageBackground>  
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper: {
        flex : 1,
        flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemBox: {
        backgroundColor: '#ededed',
        width: '30%',
        height: '30%',
        margin: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        flex:1,
        justifyContent: 'center'
    },
    text:{
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#000000c0',
    }
})


export default ListPage