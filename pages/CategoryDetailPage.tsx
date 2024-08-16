import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const inventory = {
    Spirits: [
        "Vodka", "Gin", "Whiskey", "Rum", "Tequila", "Brandy", "Cognac", "Scotch", "Bourbon", "Absinthe",
        "Mezcal", "Pisco", "Rye Whiskey", "Sake", "Moonshine"
    ],
    Wine: [
        "Red Wine", "White Wine", "Rosé Wine", "Sparkling Wine", "Dessert Wine", "Fortified Wine",
        "Cabernet Sauvignon", "Merlot", "Pinot Noir", "Chardonnay", "Sauvignon Blanc", "Riesling"
    ],
    Liqueurs: [
        "Triple Sec", "Amaretto", "Baileys", "Kahlúa", "Grand Marnier", "Frangelico", "Campari",
        "Cointreau", "Sambuca", "Limoncello", "Jägermeister", "Aperol", "St. Germain", "Midori"
    ],
    Mixers: [
        "Tonic Water", "Club Soda", "Ginger Beer", "Cola", "Lemon-Lime Soda", "Ginger Ale",
        "Tomato Juice", "Coconut Water", "Energy Drink", "Lemonade", "Iced Tea", "Coffee", "Cream"
    ],
    Juices: [
        "Orange Juice", "Cranberry Juice", "Pineapple Juice", "Lemon Juice", "Lime Juice", "Grapefruit Juice",
        "Apple Juice", "Tomato Juice", "Carrot Juice", "Beet Juice", "Pomegranate Juice", "Mango Juice"
    ],
    Syrups: [
        "Simple Syrup", "Grenadine", "Agave Syrup", "Orgeat Syrup", "Honey Syrup", "Maple Syrup",
        "Vanilla Syrup", "Cinnamon Syrup", "Ginger Syrup", "Peppermint Syrup", "Caramel Syrup", "Hazelnut Syrup"
    ],
    Bitters: [
        "Angostura Bitters", "Orange Bitters", "Peychaud's Bitters", "Chocolate Bitters", "Grapefruit Bitters",
        "Lavender Bitters", "Cherry Bitters", "Walnut Bitters", "Mint Bitters", "Peach Bitters"
    ],
    "Herbs and Spices": [
        "Mint", "Basil", "Rosemary", "Thyme", "Cinnamon Sticks", "Cloves", "Nutmeg", "Star Anise", "Ginger", "Saffron"
    ],
    Others: [
        "Ice", "Olives", "Cherries", "Lemon Zest", "Lime Zest", "Salt", "Sugar", "Cocktail Onions", "Celery", "Cucumber"
    ]
};

const CategoryDetailPage = ({ route }) => {
    const { category } = route.params;
    const items = inventory[category.name] || [];

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.title}>Items in {category.name}:</Text>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemContainer: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
});

export default CategoryDetailPage;