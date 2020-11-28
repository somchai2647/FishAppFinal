import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/Navbar2";
import Axios from "../components/API";

export default class addPond extends Component {
    state = {
        p_name: '',
        fish_type: '',
        p_width: 0.0,
        p_height: 0.0,
        p_length: 0.0,
        p_fish_date: 90,
        p_number_fish: 100,
        p_number_success: 0
    }
    render() {
        function Apply({ data }) {
            // Axios.post("/pond/add", data).then(res => {
            //     console.log(res);
            // }).catch(err => {
            //     console.log(err);
            // });
            console.log(data)
        }
        return (
            <>
                <Navbar title="เพิ่มข้อมูล" />
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.input_group}>
                            <Text style={styles.label} >ชื่อบ่อปลา</Text>
                            <TextInput style={styles.form_control} onChangeText={(p_name) => this.setState({ p_name })} ></TextInput>
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ประเภทปลา</Text>
                            <TextInput style={styles.form_control} onChangeText={(fish_type) => this.setState({ fish_type })}></TextInput>
                        </View>
                        <View style={{ marginTop: 20 }}></View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ขนาดความกว้าง</Text>
                            <TextInput style={styles.form_control} keyboardType="decimal-pad" onChangeText={(p_width) => this.setState({ p_width })}></TextInput>
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ขนาดความยาว</Text>
                            <TextInput style={styles.form_control} keyboardType="decimal-pad" onChangeText={(p_length) => this.setState({ p_length })}></TextInput>
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ขนาดความสูง</Text>
                            <TextInput style={styles.form_control} keyboardType="decimal-pad" onChangeText={(p_height) => this.setState({ p_height })}></TextInput>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.apply} onPress={() => {
                                let data = this.state;
                                Axios.post("/pond/add", { data }).then(res => {
                                    console.log(res.data);
                                }).catch(err => {
                                    console.log(err);
                                });
                            }}>
                                <Text style={styles.apply_text}>ถัดไป</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    input_group: {
        marginTop: 20
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    form_control: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        width: 360,
        maxWidth: 360,
        padding: 10
    },
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
    },
    apply_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
