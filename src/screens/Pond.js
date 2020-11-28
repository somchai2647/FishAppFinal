import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Navbar from "../components/Navbar2";
import PondCard from "../components/PondCard";
import Axios from "../components/API";

export default function Pond({ navigation }) {
    return (
        <>
            <Navbar />
            <SafeAreaView style={style.container}>
                <ScrollView>
                    <PondCard />
                </ScrollView>
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

