import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/Navbar2";

export default class addPond extends Component {
    render() {
        function Apply({ toPage = "", data }) {
            const navigation = useNavigation();
            return (
                <>
                    <TouchableOpacity style={styles.apply} onPress={() => {
                        navigation.navigate(toPage, data)
                    }}>
                        <Text style={styles.apply_text}>ถัดไป</Text>
                    </TouchableOpacity>
                </>
            )
        }
        return (
            <>
                <Navbar title="เพิ่มข้อมูล" />
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ชื่อบ่อปลา</Text>
                            <TextInput style={styles.form_control} ></TextInput>
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ประเภทปลา</Text>
                            <TextInput style={styles.form_control} ></TextInput>
                        </View>
                        <View style={{ marginTop: 20 }}></View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ขนาดความกว้าง</Text>
                            <TextInput style={styles.form_control} keyboardType="decimal-pad"  ></TextInput>
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ขนาดความยาว</Text>
                            <TextInput style={styles.form_control} keyboardType="decimal-pad"  ></TextInput>
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>ขนาดความสูง</Text>
                            <TextInput style={styles.form_control} keyboardType="decimal-pad"  ></TextInput>
                        </View>
                        <View>
                            <Apply />
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
