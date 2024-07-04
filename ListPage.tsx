import React from 'react'
import {StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ImageBackground} from 'react-native'
import data from './data/RecipeData.json'

let itemname1 = 'Whiskey Sour'
let itemname2 = 'vodka martini'
let itemname3 = 'mojito'
let itemname4 = 'old-fashioned'

const ListPage = ({navigation}) => {
    const onPress = (item) => {
        navigation.navigate('Detail', {name: item.name, url: item.imageURL, desc: item.description})
    }

    const list = data.cocktails
    
    return(
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity style={styles.itemBox}
                onPress={() => onPress(list.at(0))}>
                <ImageBackground 
                source={{uri:list.at(0).imageURL}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname1}</Text>
                </ImageBackground>          
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
            onPress={() => onPress(list.at(1))}>
                <ImageBackground 
                source={{uri:list.at(1).imageURL}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname2}</Text>
                </ImageBackground>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
            onPress={() => onPress(list.at(2))}>
            <ImageBackground 
                source={{uri: list.at(2).imageURL}}
                resizeMode='cover'
                style={styles.image}>
                    <Text style={styles.text}>{itemname3}</Text>
                </ImageBackground>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
            onPress={() => onPress(list.at(3))}>
                <ImageBackground 
                source={{uri:list.at(3).imageURL}}
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