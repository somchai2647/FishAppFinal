import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Button } from 'react-native'
import ButtonCard from "../components/ButtonCard";
import Navbar from "../components/Navbar";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ route }) {
    const { user_firstname, user_lastname, reference_user_id } = route.params.response.result;
    return (
        <>
            <Navbar title={`${user_firstname} ${user_lastname}`} />
            <Button title="debug" onPress={() => {

                // console.log(`${user_firstname} ${user_lastname}`)
                console.log(route.params)

            }} />
            <SafeAreaView style={style.container} >
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <ButtonCard title="เพิ่มบ่อปลา" color="lightgreen" icon="plus-circle" subTitle="เพิ่มข้อมูลบ่อปลาใหม่" toPage="checkList" data={route.params} />
                    <ButtonCard title="บ่อปลา" color="lightblue" icon="fish" subTitle="ข้อมูลบ่อปลาทั้งหมด" toPage="Pond" data={route.params.user_id} />
                    <ButtonCard title="คู่มือแนะนำ" color="pink" icon="book" subTitle="ข้อมูลหรือสื่อของผู้ประกอบการ" />
                    <ButtonCard title="สถิติ" color="#e0aaff" icon="chart-area" subTitle="ข้อมูลหรือสื่อของผู้ประกอบการ" />
                    <ButtonCard title="ร้านค้า" color="#bbd0ff" icon="shopping-cart" subTitle="ข้อมูลหรือสื่อของผู้ประกอบการ" toPage="Shop" data={reference_user_id} />
                    <ButtonCard title="ติดต่อ" color="#adb5bd" icon="phone-alt" subTitle="ติดต่อกับผู้ประกอบการ" />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 20
    },
});