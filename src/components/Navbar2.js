import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Navbar = ({ title = "TITLE", icon = "bell" }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={navbar.navbar}>
                <Icon name="chevron-left" style={navbar.icon_left} onPress={() => {
                    navigation.goBack();
                }} />
                <Text style={navbar.titleText}>{title}</Text>
                {(icon=="bell")? <Icon name="bell" style={navbar.icon_right} onPress={() => { console.log("dwadawd") }} /> : <Icon name="shopping-basket" style={navbar.icon_right} onPress={() => { console.log("dwadawd") }} /> }
                
            </View>
        </>
    )
}

const navbar = StyleSheet.create({
    navbar: {
        zIndex: 1,
        backgroundColor: '#3E89C7',
        height: 70,
        borderWidth: 0,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 20,

    },
    icon_right: {
        color: 'white',
        fontSize: 30,
        position: 'absolute',
        alignSelf: 'center',
        right: 30
    },
    icon_left: {
        color: 'white',
        fontSize: 22,
        position: 'absolute',
        alignSelf: 'center',
        left: 30
    }
});
export default Navbar
