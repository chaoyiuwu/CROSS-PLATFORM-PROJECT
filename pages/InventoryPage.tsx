import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const list = [
    {
        name: 'Wine',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/wine.png',
    },
    {
        name: 'Liqueurs',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/liquor.png',
    },
    {
        name: 'Mixers',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/cocktail_and_shaker.jpg',
    },
    {
        name: 'Juices',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/juices.png',
    },
    {
        name: 'Syrups',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/syrup.png',
    },
    {
        name: 'Bitters',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/bitters.png',
    },
    {
        name: 'Herbs and Spices',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/herbsandspices.png',
    },
    {
        name: 'Others',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/tools.png',
    }
]

const InventoryPage = ({ navigation }) => {
    const onPress = () => {
        console.log('Item pressed!');
    }
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <View style={styles.container}>
                    {
                        list.map((item, index) => (
                            <TouchableOpacity
                            onPress={onPress}
                            style={styles.itemContainer}
                            key={item.name}>
                                <ImageBackground
                                source={{ uri: item.image }}
                                 style={styles.backgroundStyle}
                                 imageStyle= {styles.image}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const imageContainerHeight = 150

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: '90%',
        height: imageContainerHeight,
        marginVertical: 5,
    },
    backgroundStyle: {
        width: '100%',
        height: imageContainerHeight,
        overflow: 'hidden',
    },
    image : {
        resizeMode: 'cover', // or 'contain'
        alignSelf:'flex-end',
        height: 200,
        top: undefined
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