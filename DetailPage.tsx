import React from 'react'
import {StyleSheet, Text, SafeAreaView, View} from 'react-native'

const DetailPage = ({navigation, route})=> {
    return(
        <SafeAreaView>
            <Text>Detail Page for {route.params.category}</Text>
        </SafeAreaView>
    )
}

export default DetailPage