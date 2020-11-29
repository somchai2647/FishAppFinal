import React from 'react'
import { SafeAreaView, StyleSheet, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Navbar from "../components/Navbar2";
import PondCard from "../components/PondCard";
import Axios from "../components/API";
import { useNavigation } from '@react-navigation/native';

export default function Pond({ route }) {
    const navigation = useNavigation();
    let user_id = route.params.data;
    const loadPond = async () => {
        await Axios.get(`/pond/show/${user_id}`).then(res => {
            console.log(res.data)
        }).catch(err => {

        });
    }
    return (
        <>
            <Navbar />
            <SafeAreaView style={style.container}>
                <ScrollView>
                    <Button title="CLICK" onPress={() => {

                        loadPond();

                    }} />
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

