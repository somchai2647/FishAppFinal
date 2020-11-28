import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Axios from "../components/API"
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BtnLogin({ username = "", password = "" }) {
    const navigation = useNavigation();
    let data = {
        username: username,
        password: password,
        isloadding: false,
        isLoginSuccess: false,
        response: []
    }
    // const storeData = async (key, value) => {
    //     try {
    //         await AsyncStorage.setItem(key, value)
    //     } catch (e) {
    //         Alert.alert('AsyncStorage', 'AsyncStorage Save Data Failed!');
    //     }
    // }
    // const storeDataJSON = async (key, value) => {
    //     try {
    //         const objData = JSON.stringify(value)
    //         await AsyncStorage.setItem(key, objData)
    //     } catch (e) {
    //         Alert.alert('AsyncStorage', 'AsyncStorage Save JSON Data Failed!');
    //     }
    // }
    const onSubmit = () => {
        Axios.post("/auth/login", data).then(res => {
            data.response = res.data;
            if (data.response.code == 1) {
                Alert.alert('Login Failed', 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
            } else {
                console.log(data.response);
                data.isLoginSuccess = true;
                // storeDataJSON(data, data.response);
                // storeData(loginstatus, data.isLoginSuccess);
                navigation.replace('Home', data)
            }
        }).catch(err => {
            Alert.alert('Network ERROR', err);
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
        height: 50,
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
