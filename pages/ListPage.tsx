import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ImageBackground } from 'react-native'
import data from '../data/RecipeData.json'

const ListPage = ({ navigation }) => {
    const onPress = (item) => {
        navigation.navigate('CategoryDetail', { name: item.name, url: item.imageURL, desc: item.description })
    }

    const list = data.cocktails

    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity style={styles.itemBox}
                onPress={() => onPress(list.at(0))}>
                <ImageBackground
                    source={{ uri: list.at(0).imageURL }}
                    resizeMode='cover'
                    style={styles.image}>
                    <Text style={styles.text}>{list.at(0).name}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
                onPress={() => onPress(list.at(1))}>
                <ImageBackground
                    source={{ uri: list.at(1).imageURL }}
                    resizeMode='cover'
                    style={styles.image}>
                    <Text style={styles.text}>{list.at(1).name}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
                onPress={() => onPress(list.at(2))}>
                <ImageBackground
                    source={{ uri: list.at(2).imageURL }}
                    resizeMode='cover'
                    style={styles.image}>
                    <Text style={styles.text}>{list.at(2).name}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}
                onPress={() => onPress(list.at(3))}>
                <ImageBackground
                    source={{ uri: list.at(3).imageURL }}
                    resizeMode='cover'
                    style={styles.image}>
                    <Text style={styles.text}>{list.at(3).name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    itemBox: {
        backgroundColor: '#ededed',
        width: '35%',
        height: '35%',
        margin: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#000000c0',
    }
})


export default ListPage