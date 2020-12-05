import React from 'react'
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CallPhone({ tel = "" }) {
    return (
        <TouchableOpacity onPress={() => {  Linking.openURL(`tel:${tel}`) }} style={styles.btn}>
            <Icon name="phone-alt" style={styles.icon} />
            <Text style={styles.text}>{`โทร: ${tel}`}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        marginTop: 40,
        backgroundColor: "#28a745",
        height: 80,
        borderRadius: 20,
        // justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flexDirection: "row"
    },
    icon: {
        fontSize: 40,
        color: 'white'
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: "bold",
        marginLeft: 20
    }
})
