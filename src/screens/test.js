import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, RefreshControl, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from "../components/API";
export default function ButtonCard({ title = "TITLE", subTitle = "subtitile", color = "red", p_id = "" }) {

    return (
        <>
            <TouchableOpacity style={[style.card, { backgroundColor: color }]} onLongPress={() => {
                AlertDel();
            }} onPress={() => {
                
            }}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.subtitle}>{subTitle}</Text>
                <Icon name="fish" style={style.icon} />
            </TouchableOpacity>
        </>
    )
}

const AlertDel = () => {
    Alert.alert(
        "คุณต้องการลบ หรือไม่?",
        "หากลบแล้วไม่สามารถนำข้อมูลกลับคืนได้",
        [
            {
                text: "ยกเลิก",
                style: "cancel"
            },
            { text: "ลบ", onPress: () => delPond(p_id) }
        ],
        { cancelable: false }
    );
}

const delPond = (p_id) => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
    // Axios.delete(`/pond/delete/${p_id}`).then(res => {
    //     if(res.data.code==0){
    //     }
    // }).catch(err => {
    //     Alert.alert("Axios ERROR", err)
    // })
}
const style = StyleSheet.create({
    card: {
        height: 130,
        width: 400,
        borderRadius: 20,
        // backgroundColor: 'lightblue',
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    icon: {
        color: 'white',
        fontSize: 100 * 80 / 100,
        position: 'absolute',
        right: 20,
        top: 25
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    subtitle: {
        fontSize: 16
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center"
    },
});