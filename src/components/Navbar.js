import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({ title = "TITLE" }) => {
    return (
        <>
            <View style={navbar.navbar}>
                <Text style={navbar.titleText}>{title}</Text>
                <Icon name="bell" style={navbar.icon} />
            </View>
        </>
    )
}

const navbar = StyleSheet.create({
    navbar: {
        zIndex: 1,
        backgroundColor: '#3E89C7',
        height: 70,
        // borderBottomStartRadius: 10,
        // borderBottomEndRadius: 10,
        borderWidth: 0,
        paddingTop: 23,
        paddingLeft: 20,
        flexDirection: 'row',
    },
    titleText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        color: 'white',
        fontSize: 22,
        position: 'absolute',
        alignSelf: 'center',
        right: 30
    }
});
export default Navbar
