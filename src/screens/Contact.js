import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Button, Linking, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Axios from "../components/API"
import Icon from 'react-native-vector-icons/FontAwesome5'
import Navbar from "../components/Navbar2"
import CallPhone from "../components/CallPhone"

export default class Contact extends Component {
    state = {
        trainer_id: this.props.route.params.data,
        data: [],
        address: [],
        loadding: false
    }
    componentDidMount() {
        this.loadData()
    }
    loadData = () => {
        Axios.get(`/user/${this.state.trainer_id}`).then(res => {
            this.setState({ data: res.data.result });
            this.setState({ address: res.data.result.address });
            // this.state.data = res.data.result;
            // this.state.address = res.data.result.address
            console.log(res.data.result)
        }).finally(() => {
            this.setState({ loadding: true })
        });
    }
    render() {
        const { user_tel, user_firstname, user_lastname } = this.state.data;
        const { shopname, house_no, moo, sub_district, district, province, road, soi, zip_code } = this.state.address;
        return (
            <>
                <Navbar title="ติดต่อผู้ประกอบการ" />
                <Button title="DEBUG" onPress={() => {
                    // console.log(this.props.route.params.data)
                    // this.loadData();
                    Linking.openURL(`tel:0617070411`)
                }} />
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.header}>
                            <Icon name="store" style={styles.icon} />
                            <View>
                                <Text style={styles.text}>ชื่อร้าน:</Text>
                                <Text style={styles.shop_name}>{shopname}</Text>
                            </View>
                        </View>
                        <View style={styles.header2}>
                            <Icon name="user" style={styles.icon} />
                            <View>
                                <Text style={styles.text}>ชื่อ-นามสกุล:</Text>
                                {(user_firstname && user_lastname)? <Text style={styles.shop_name}>{`${user_firstname} ${user_lastname}`}</Text>: <Text style={styles.shop_name}>Loadding..</Text>}
                                
                            </View>
                        </View>
                        <TouchableOpacity style={styles.card_address}>
                            <Icon name="map-marker-alt" style={styles.icon_address} />
                            {(!this.state.loadding) ? <Text style={{ fontSize: 20, fontWeight: "bold" }}>Loadding..</Text> :
                                <View style={styles.address}>
                                    <Text style={styles.text_address}>{`บ้านเลขที่: ${house_no}`}</Text>
                                    <Text style={styles.text_address}>{`หมู่ที่: ${moo}`}</Text>
                                    <Text style={styles.text_address}>{`ซอย/ตรอก: ${soi}`}</Text>
                                    <Text style={styles.text_address}>{`ถนน: ${road}`}</Text>
                                    <Text style={styles.text_address}>{`ตำบล: ${sub_district}`}</Text>
                                    <Text style={styles.text_address}>{`อำเภอ: ${district}`}</Text>
                                    <Text style={styles.text_address}>{`จังหวัด: ${province}`}</Text>
                                    <Text style={styles.text_address}>{`รหัสไปรษณี: ${zip_code}`}</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        <CallPhone tel={user_tel} />
                        <View style={{ marginTop: 50 }}></View>
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
        alignItems: "center",
    },
    icon: {
        color: "white",
        fontSize: 42,
    },
    icon_address: {
        position: 'absolute',
        top: -30,
        left: 30,
        color: "red",
        fontSize: 60,
    },
    header: {
        backgroundColor: "#3a7ca5",
        height: 100,
        width: 370,
        marginTop: 20,
        borderRadius: 20,
        padding: 30,
        flexDirection: "row",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    header2: {
        backgroundColor: "#5aa9e6",
        height: 100,
        width: 370,
        marginTop: 20,
        borderRadius: 20,
        padding: 30,
        flexDirection: "row",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    text: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    shop_name: {
        marginLeft: 20,
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
    },
    card_address: {
        backgroundColor: "#ffb703",
        height: 300,
        width: 370,
        marginTop: 40,
        borderRadius: 20,
        padding: 40,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    address: {
        paddingTop: 0
    },
    text_address: {
        fontSize: 20,
        paddingBottom: 5,
        fontWeight: "bold"
    }
})
