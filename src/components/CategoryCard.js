import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default class CategoryCard extends Component {
    render() {
        return (
            <View style={styles.category}>
                <Text style={styles.category_title}>อาหารปลา</Text>
                <ScrollView horizontal={true} style={styles.proScroll} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.packs}>
                        <View style={styles.proItem}>
                        </View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                        <View style={styles.proItem}></View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    category_title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    category: {
        backgroundColor: "white",
        height: 200,
        padding: 10,
        marginBottom: 20
    },
    proScroll: {
        backgroundColor: "white",
    },
    packs: {
        justifyContent: "center",
        flexDirection: "row",
    },
    proItem: {
        backgroundColor: "blue",
        width: 121,
        height: 160,
        marginRight: 10
    }
})
