import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';

const DetailPage = ({ route }) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image 
                    style={styles.image}
                    source={{ uri: route.params.url }}
                />
                <Text style={styles.titleText}>{route.params.name}</Text>
                <Text style={styles.bodyText}>{route.params.desc}</Text>
                <Text style={styles.stepsTitle}>Steps:</Text>
                <View style={styles.stepsWrapper}>
                    {route.params.steps.map((step, index) => (
                        <Text key={index} style={styles.stepText}>
                            {index + 1}. {step}
                        </Text>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    scrollContent: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#333",
        marginBottom: 10,
    },
    bodyText: {
        fontSize: 16,
        textAlign: 'justify',
        color: "#555",
        marginBottom: 20,
        lineHeight: 24,
    },
    stepsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#333",
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    stepsWrapper: {
        alignSelf: 'stretch',
    },
    stepText: {
        fontSize: 16,
        marginVertical: 5,
        color: "#555",
        lineHeight: 22,
    }
});

export default DetailPage;