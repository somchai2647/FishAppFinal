import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from "../components/API"
export default class PondCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color,
            title: this.props.title,
            subTitle: this.props.subTitle,
            p_id: this.props.p_id
        }
    }
    delPond = (p_id) => {
        Axios.delete(`/pond/delete/${p_id}`).then(res => {
            if (res.data.code == 0) {
            }
        }).catch(err => {
            Alert.alert("Axios ERROR", err)
        })
    }
    AlertDel = () => {
        const { p_id } = this.state
        Alert.alert(
            "คุณต้องการลบ หรือไม่?",
            "หากลบแล้วไม่สามารถนำข้อมูลกลับคืนได้",
            [
                {
                    text: "ยกเลิก",
                    style: "cancel"
                },
                { text: "ลบ", onPress: () => this.delPond(p_id) }
            ],
            { cancelable: false }
        );
    }

    render() {
        const { title, subTitle, color } = this.state
        return (
            <TouchableOpacity style={[style.card, { backgroundColor: color }]} onLongPress={() => {
                this.AlertDel();
            }} onPress={() => {
                this.setState({ isLoadding: true }, this.props.CallBack)
            }}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.subtitle}>{subTitle}</Text>
                <Icon name="fish" style={style.icon} />
            </TouchableOpacity>
        )
    }
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