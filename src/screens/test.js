import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Button, Alert, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Navbar from "../components/Navbar2";
import PondCard from "../components/PondCard";
import Axios from "../components/API";
import { useNavigation } from '@react-navigation/native';


export default function Pond({ route }) {
    const navigation = useNavigation();
    let user_id = route.params.data;
    let items = [];
    const loadPond = async () => {
        await Axios.get(`/pond/show/${user_id}`).then(res => {
            console.log(res.data.result)
            items = res.data.result;
        }).catch(err => {
            Alert.alert("CATCH!!", "Axios catch load")
        });
    }
    useEffect(() => {
        loadPond();
    })

    
    return (
        <>
            <Navbar />
            <SafeAreaView style={style.container}>
                <Button title="CLICK" onPress={() => {
                    loadPond();
                }} />

            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }
});

