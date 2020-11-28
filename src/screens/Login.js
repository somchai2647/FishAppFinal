import React, { Component } from 'react'
import BtnLogin from '../components/BtnLogin';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    Button
} from 'react-native';
const screen = Dimensions.get("screen");
const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value;
        }
    } catch (e) {
        // error reading value
    }
}
const checkLogin = async (status) => {
    if (status !== false) {
        navigation.replace('Home');
    }
}
export default class Login extends Component {
    state = {
        username: '',
        password: '',
        isLoginSuccess: ''
    }
    componentDidMount() {
        // this.state.isLoginSuccess = getData("isLoginSuccess");
        // checkLogin(getData("isLoginSuccess"));
    }
    render() {
        return (

            <>
                <SafeAreaView style={styles.background}>
                    <View style={styles.backPath}>
                        {/* <View style={styles.logo} /> */}
                        <Text style={styles.title}>ระบบสนับสนุนการตัดสินใจ{"\n"}สำหรับการเลี้ยงปลา</Text>

                    </View>
                    <View style={styles.fromField}>
                        <Text style={{ textAlign: 'center', fontSize: 25, color: '#3E89C7' }}>เข้าสู่ระบบ</Text>
                        <View style={styles.username_textfield}>
                            {/* <Image source={require('./assets/email.png')} style={styles.username_textfield_trailing} /> */}
                            <TextInput style={styles.username_textfield_input} placeholder="รหัสผู้ใช้งาน" onChangeText={(username) => this.setState({ username })} />
                        </View>
                        <View style={styles.password_textfield}>
                            <TextInput secureTextEntry={true} style={styles.password_textfield_input} placeholder="รหัสผ่าน" onChangeText={(password) => this.setState({ password })} />
                            {/* <Image source={require('./assets/email.png')} style={styles.password_textfield_trailing} /> */}
                        </View>
                        <BtnLogin username={this.state.username} password={this.state.password} />
                    </View>
                    {/* <Text style={styles.footerText}>เทคโนโลยีสารสนเทศ{"\n"}วิทยาลัยอาชีวศึกษาเชียงราย</Text> */}

                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    title: { width: screen.width, position: 'absolute', fontSize: 22.5, textAlign: 'center', marginTop: screen.height * 0.150, color: 'white' },
    background: {
        backgroundColor: '#3E89C7',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    backPath: {
        width: screen.width,
        height: screen.height * 0.4,
        backgroundColor: '#48CAE4',
        borderBottomEndRadius: 17.5,
        borderBottomLeftRadius: 17.5
    },
    fromField: {
        position: 'absolute',
        width: screen.width * 0.80,
        height: 350,
        backgroundColor: 'white',
        marginLeft: screen.width * 0.1,
        marginTop: screen.height * 0.25,
        borderRadius: 40,
        flexDirection: 'column',
        alignContent: 'center',
        padding: 25
    },
    username_textfield: {
        flexDirection: 'row',
        height: 42.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: '#f0f0f0',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    username_textfield_input: {
        flex: 1
    },
    username_textfield_trailing: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        marginRight: 5
    },
    password_textfield: {
        flexDirection: 'row',
        height: 42.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 35,
        borderRadius: 15,
        backgroundColor: '#f0f0f0',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    password_textfield_input: {
        flex: 1
    },
    password_textfield_trailing: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        marginRight: 5
    },
    loginButton: {
        backgroundColor: 'red',
        borderRadius: 20
    },
    footerText: {
        position: 'absolute',
        alignSelf: 'center',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: 'white'
    },
    logo: { width: 100, height: 100, backgroundColor: 'black', position: 'absolute', alignSelf: 'center', marginTop: screen.height * 0.05 }
})