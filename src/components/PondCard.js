import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from "../components/API"
import { useNavigation } from '@react-navigation/native';

export default function PondCard({ color = 'red', title = "TITLE", subTitle = "SubTitle", data, p_id = "" }) {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity style={[style.card, { backgroundColor: color }]}
                onPress={() => {
                    navigation.navigate("pondDetail", p_id)
                    // console.log(p_id)
                }}
            >
                <Text style={style.title}>{title}</Text>
                <Text style={style.subtitle}>{subTitle}</Text>
                <Icon name="fish" style={style.icon} />
            </TouchableOpacity>
        </>
    )
}
const style = StyleSheet.create({
    card: {
        height: 130,
        width: 400,
        borderRadius: 20,
        // backgroundColor: 'lightblue',
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    icon: {
        color: 'white',
        fontSize: 100 * 80 / 100,
        position: 'absolute',
        right: 20,
        top: 25
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    subtitle: {
        fontSize: 16
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center"
    },
});