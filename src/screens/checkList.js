import React, { Component } from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Button, TouchableOpacity, Text } from 'react-native'
import ButtonCard from "../components/ButtonCard";
import { useNavigation } from '@react-navigation/native';

import Navbar from "../components/Navbar2";

function Apply({ toPage = "", data }) {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity style={style.apply} onPress={() => {
                navigation.navigate(toPage, data)
            }}>
                <Text style={style.apply_text}>ถัดไป</Text>
            </TouchableOpacity>
        </>
    )
}

export default function checkList({ route }) {
    const { username, response } = route.params;
    return (
        <>
            <Navbar title="ประเมินบ่อเลี้ยง" />
            <Apply toPage="addPond" data={route.params} />
            <Text>Check List</Text>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 20
    },
    apply: {
        position: 'absolute',
        zIndex: 2,
        backgroundColor: '#3E89C7',
        height: 60,
        width: 300,
        bottom: 30,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    apply_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

