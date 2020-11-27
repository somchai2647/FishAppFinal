import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Axios from "axios";


export default function BtnLogin({ username = "", password = "" }) {
    const navigation = useNavigation();
    let data = {
        username: username,
        password: password,
        isloadding: false,
        isLoginSuccess: false,
        response: {}
    }
    const onSubmit = async () => {
        await Axios.post("http://192.168.1.144:7788/auth/login", data).then(res => {
            data.response = res.data;
            if (data.response.code != 0) {
                Alert.alert('Login Failed', 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง')
            } else {

                console.log(data.response);
            }
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <TouchableOpacity onPress={() => {
            // navigation.replace('Home')
            // Alert.alert(`${username}`, `${password}`);
            onSubmit();
        }} style={styles.button}
        >
            <Text style={styles.buttonText} >เข้าสู่ระบบ</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        height: 40,
        backgroundColor: '#3E89C7',
        borderRadius: 15,
        justifyContent: 'center',
        marginHorizontal: 15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
})
