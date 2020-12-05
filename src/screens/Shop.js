import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Navbar from "../components/Navbar2"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from "../components/API"
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default class Shop extends Component {
    state = {
        user_id: this.props.route.params.data.user_id,
        reference_user_id: this.props.route.params.data.reference_user_id,
        isloadding: false
    }
    render() {
        return (
            <>
                <Navbar title="ร้านค้า" icon="shop" />
                <View style={styles.search}>
                    <TextInput placeholder="ค้นหาสินค้า" style={styles.search_box} />
                    <TouchableOpacity style={styles.btnsearch}>
                        <Icon name="search" style={styles.search_icon} />
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                        <View style={{marginBottom: 80}}></View>
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
                        <View style={{marginTop: 80}}></View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9ecef"
    },
    search: {
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 20,
        width: 340,
        padding: 10,
        alignItems: "center",
        marginBottom: 15,
        alignSelf: "center",
        position: "absolute",
        top: 60,
        zIndex: 1,
        backgroundColor: "#3E89C7"
    },
    search_box: {
        borderColor: 'black',
        padding: 10,
        borderRadius: 8,
        width: 270,
        height: 40,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    btnsearch: {
        backgroundColor: "#48cae4",
        width: 40,
        height: 40,
        marginLeft: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    search_icon: {
        color: "white",
        fontSize: 20
    },
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
