import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const categoriesList = [
    {
        name: 'Spirits',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/spirit',
    },
    {
        name: 'Wine',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/wine',
    },
    {
        name: 'Liqueurs',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/liqueur',
    },
    {
        name: 'Mixers',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/mixer',
    },
    {
        name: 'Juices',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/juice',
    },
    {
        name: 'Syrups',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/syrup',
    },
    {
        name: 'Bitters',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/bitters',
    },
    {
        name: 'Herbs and Spices',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/herbsandspices',
    },
    {
        name: 'Others',
        image: 'https://npcddrdidmrwljkyxolk.supabase.co/storage/v1/object/public/Images/inventory/others',
    }
]

const InventoryPage = ({ navigation }) => {
    const onPress = (category) => {
        navigation.navigate('CategoryDetail', { category });
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                <View style={styles.container}>
                    {categoriesList.map((item) => (
                        <TouchableOpacity
                            onPress={() => onPress(item)}
                            style={styles.itemContainer}
                            key={item.name}
                        >
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={styles.backgroundStyle}
                                imageStyle={styles.image}
                            >
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
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
    image: {
        resizeMode: 'cover', // or 'contain'
        alignSelf: 'flex-end',
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