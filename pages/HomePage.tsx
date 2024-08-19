import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Landing' },
                    { name: 'Login', params: { email: null, password: null } }
                ],
            })
        );
    };

    const recipeOfTheDay = [
        {
            "name": "Whiskey Sour",
            "imageURL": "https://images.pexels.com/photos/6542662/pexels-photo-6542662.jpeg",
            "description": "A classic cocktail with whiskey, lemon juice, and sugar.",
        },
        


    ];

    const recommendedRecipes = [
        {
            "name": "Vodka Martini",
            "imageURL": "https://images.pexels.com/photos/4786625/pexels-photo-4786625.jpeg",
            "description": "A clean and crisp vodka-based martini.",
        },
        {
            "name": "Old Fashioned",
            "imageURL": "https://images.pexels.com/photos/19252758/pexels-photo-19252758/free-photo-of-whiskey-with-ice-cubes-and-orange-peel-in-lowball-glass.jpeg",
            "description": "A timeless cocktail with bourbon, sugar, and bitters.",
        },
        {
            "name": "Negroni",
            "imageURL": "https://ginsiders.com/wp-content/uploads/2023/07/negroni-1200-630-500x500.png",
            "description": "A bittersweet cocktail with gin, Campari, and vermouth.",
        },
        {
            "name": "Cosmopolitan",
            "imageURL": "https://www.simplyrecipes.com/thmb/8pwOxG3ixdp4wFzfKKG-u22dGrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__09__Classic-Cosmopolitan-LEAD-2-9cee143d9ac04733bb3463edd9d01ae9.jpg",
            "description": "A modern cocktail with vodka, cranberry juice, and lime juice.",
        },
        {
            "name": "Mojito",
            "imageURL": "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg",
            "description": "A refreshing mix of rum, mint, lime, and soda.",
        },
        {
            "name": "Margarita",
            "imageURL": "https://recipes.net/wp-content/uploads/2023/05/classic-margarita-recipe_780ef5cf753cf58502c26278fa094aa1.jpeg",
            "description": "A classic cocktail with tequila, lime juice, and orange liqueur.",
        },
        {
            "name": "Mai Tai",
            "imageURL": "https://www.allrecipes.com/thmb/us4SAuawmMYcrDiZAxfZ2e5c3PE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73287-mai-tai-ddmfs-hero-3x4-1001-44ffd41d2ea94e15ba63bac042cffac2.jpg",
            "description": "A tropical cocktail with rum, lime juice, and orange liqueur.",
        }
    ];

    const renderRecipe = (recipe) => (
        <View style={styles.recipeCard} key={recipe.name}>
            <Image source={{ uri: recipe.imageURL }} style={styles.recipeImage} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.recipeDescription}>{recipe.description}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoArea}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://static.vecteezy.com/system/resources/previews/000/964/070/large_2x/cocktail-beverage-set-vector.jpg'
                        }}
                    />
                    <Text style={styles.logoText}>MixMate</Text>
                    <Text style={styles.subtitle}>Your Personal Mixing Assistant</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recipe of the Day</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {recipeOfTheDay.map(renderRecipe)}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recommended Recipes</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {recommendedRecipes.map(renderRecipe)}
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    logoArea: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ff6347',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    section: {
        width: '100%',
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    recipeCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginRight: 20, 
        width: 200, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    recipeImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    recipeDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginTop: 20,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomePage;