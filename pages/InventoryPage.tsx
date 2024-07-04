import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, ScrollView } from 'react-native'

const list = [
    {
        name: 'Spirits',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Liqueurs',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Mixers',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Juices',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Syrups',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Bitters',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Herbs and Spices',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    },
    {
        name: 'Others',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/cocktails/Content.png',
    }
]

const InventoryPage = ({ navigation }) => {
    const onPress = () => {
        console.log('Item pressed!');
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {
                    list.map((item, index) => (
                        <TouchableOpacity onPress={onPress} style={styles.itemContainer} key={item.name}>
                            <ImageBackground source={{ uri: item.image }} style={styles.backgroundImage}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: '90%',
        height: 200, // Adjust height as needed
        marginVertical: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'contain'
        justifyContent: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for text
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default InventoryPage