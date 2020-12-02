import React, { Component } from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Navbar from "../components/Navbar2";
import AccessBtn from "../components/AccessBtn";
import { FlatList } from 'react-native-gesture-handler';
function Apply({ toPage = "", data }) {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity style={style.apply} onPress={() => {
                navigation.navigate(toPage, data)
            }}>
                <Text style={style.apply_text}>ถัดไป</Text>
            </TouchableOpacity>
        </>
    )
}

export default function checkList({ route }) {
    const fake = [
        {
            id: 1,
            title: 'ปรับหน้าดิน',
            detail: 'ขุดดินแล้วทิ้งให้แห้ง ประมาน 2 วัน'
        },
        {
            id: 2,
            title: 'ใส่ปูนขาว',
            detail: 'เพื่อปรับสภาพดินในอัตรา  60-100  กิโลกรัม/ไร่  โดยให้ทั่วพื้นบ่'
        },
        {
            id: 3,
            title: 'ใส่ปุ๋ยคอก',
            detail: 'อัตรา  200  กิโลกรัม/ไร่  โดยโรยให้ทั่วบ่อ'
        },
        {
            id: 4,
            title: 'เติมน้ำในบ่อ',
            detail: 'เติมน้ำให้ได้ระดับ  40-50  เซนติเมตร  ทิ้งไว้  3-5  วัน  จนน้ำเริ่มเป็นสีเขียวระวังอย่าให้เกิดแมลง หรือศัตรูปลา '
        },
    ]
    return (
        <>
            <Navbar title="ประเมินบ่อเลี้ยง" />
            <SafeAreaView style={style.container}>
                {/* <ScrollView style={style.scoll} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}> */}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={fake}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <AccessBtn title={item.title} detail={item.detail} />
                    )}
                >
                </FlatList>
                <View style={{ paddingTop: 120 }}></View>
                {/* </ScrollView> */}
                <Apply toPage="addPond" data={route.params.data.user_id} />
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 20l
    },
    apply: {
        position: 'absolute',
        zIndex: 2,
        backgroundColor: '#28a745',
        height: 60,
        width: 300,
        top: 500,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    apply_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

