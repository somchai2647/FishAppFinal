import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Axios from "../components/API"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BtnLogin({ username = "", password = "" }) {
    const navigation = useNavigation();
    let data = {
        user_id: '',
        token: '',
        username: username,
        password: password,
        isloadding: false,
        isLoginSuccess: false,
        response: []
    }
   const save = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (err) {
            Alert.alert('storeData ERROR!', 'ไม่สามารถบันทึกข้อมูลได้');
        }
    }
    const onSubmit = () => {
        Axios.post("/auth/login", data).then(res => {
            data.response = res.data;
            if (data.response.code == 0 && data.response.result.user_role == "user") {
                console.log(data.response);
                data.isLoginSuccess = true;
                data.user_id = data.response.result._id;
                data.token = data.response.token;
                save("user_id",data.user_id);
                navigation.replace('Home', data)
            } else {
                Alert.alert('Login Failed', 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
            }
        }).catch(err => {
            Alert.alert('Network ERROR', err);
        });
    };

    return (
        <TouchableOpacity onPress={() => {
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
