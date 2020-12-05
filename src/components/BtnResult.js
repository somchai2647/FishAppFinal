import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Axios from "../components/API"
import { useNavigation } from '@react-navigation/native';


export default function BtnResult({ data }) {
    return (
        <TouchableOpacity style={styles.apply} onPress={() => {
            const { p_name, p_length, p_width } = data;
            if (p_name != "" && p_length != "" && p_width != "") {
                uploadPond(data)

            }
        }}>
            <Text style={styles.apply_text}>ถัดไป</Text>
        </TouchableOpacity>
    )
}

export function BtnResult2({data}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.apply} onPress={() => {
            // console.log(data);
            navigation.navigate("resultPond", data)
        }}>
            <Text style={styles.apply_text}>ถัดไป</Text>
        </TouchableOpacity>
    )
}
function uploadPond(payload) {
    Axios.post("/pond/add", payload).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}
const styles = StyleSheet.create({
    apply: {
        backgroundColor: '#28a745',
        margin: 30,
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    apply_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
