import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ButtonCard({ title = "TITLE", subTitle = "subtitile" }) {
    return (
        <>
            <TouchableOpacity style={[style.card, { backgroundColor: 'red' }]}>
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