import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, FlatList, SafeAreaView } from 'react-native';

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
];

const InventoryPage = ({ navigation }) => {
    const onPress = (category) => {
        navigation.navigate('CategoryDetail', { category });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)} style={styles.itemContainer}>
            <ImageBackground source={{ uri: item.image }} style={styles.backgroundStyle} imageStyle={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.wrapper}>
            <FlatList
                data={categoriesList}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.container}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemContainer: {
        width: '100%',
        height: 150,
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    backgroundStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'cover',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});

export default InventoryPage;