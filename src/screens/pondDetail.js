import React, { Component } from 'react'
import { Alert, Button, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Axios from "../components/API"
import Navbar from "../components/Navbar2";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Card2 from "../components/CardDetail";

export default class pondDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_id: this.props.route.params,
            isLoadding: false,
            data: [],
            fish_type: ''
        }
    }
    loadData(data) {
        this.setState({ isLoadding: true });
        Axios.get(`/pond/${data}`).then(res => {
            this.setState({ data: res.data.result });
            this.setState({ isLoadding: false });
            console.log(this.state.data);
            this.loadFistType(this.state.data.fish_type)
        }).catch(err => {
            Alert.alert("Axios Error", err);
        });
    }
    loadFistType(fish_id) {
        this.setState({ isLoadding: true });
        Axios.get(`/fish/${fish_id}`).then(res => {
            this.setState({ isLoadding: false });
            this.setState({ fish_type: res.data.result.fish_name })
            // console.log(res.data.result.fish_name)
            console.log(this.state.fish_type)
        });
    }
    componentDidMount() {
        this.loadData(this.state.p_id)
    }
    render() {
        const p_id = this.state.p_id;
        return (
            <>
                <Navbar title="รายละเอียด" />
                <Button title="CLICK" onPress={() => {
                    console.log(this.state.data)
                }} />
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={card1.card1}>
                            <Text style={card1.title}>ชื่อบ่อเลี้ยง:</Text>
                            <Text style={card1.title}>{this.state.data.p_name}</Text>
                        </View>
                        <Card2 text={this.state.fish_type} color="red" icon="fish" title="ประเภทปลา" />
                        <Card2 text={this.state.data.p_width} icon="circle" title="ความกว้าง" />
                        <Card2 text={this.state.data.p_length} icon="circle" title="ความยาว" />
                        <Card2 text={this.state.data.p_fish_date} icon="clock" title="เวลาเลี้ยงปัจุบัน" />
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
    },
})
const card1 = StyleSheet.create({
    card1: {
        backgroundColor: "#80ced7",
        height: 130,
        width: 370,
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
        shadowColor: "#000",
    },
    title: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 23
    }
})
