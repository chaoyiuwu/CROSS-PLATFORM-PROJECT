import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import data from '../data/RecipeData.json';

const ListPage = ({ navigation }) => {
    const onPress = (item) => {
        navigation.navigate('Detail', { name: item.name, url: item.imageURL, desc: item.description, steps: item.steps });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemBox} onPress={() => onPress(item)}>
            <ImageBackground source={{ uri: item.imageURL }} resizeMode='cover' style={styles.image}>
                <View style={styles.overlay}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.wrapper}>
            <FlatList
                data={data.cocktails}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                numColumns={2}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.columnWrapper}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    listContent: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    itemBox: {
        backgroundColor: '#ededed',
        width: '48%',
        height: 200,
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});

export default ListPage;