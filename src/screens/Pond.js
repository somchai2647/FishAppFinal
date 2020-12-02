import PondCard from "../components/PondCard";
import Navbar2 from "../components/Navbar2";
import Axios from "../components/API";
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, StyleSheet, RefreshControl, Alert, Button } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Spinner from 'react-native-loading-spinner-overlay';

export default class Pond extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            user_id: this.props.route.params.data,
            isLoading: false,
        };
    }


    loadData() {
        this.setState({ isLoadding: true });
        Axios.get(`/pond/list/${this.state.user_id}`).then(res => {
            this.setState({ data: res.data.result });
            this.setState({ isLoading: false });
            console.log(this.state)
        });
    }
    componentDidMount() {
        this.loadData()
        setTimeout(() => {
            this.loadData()
        }, 1500)
    }


    render() {
        const { data, isLoading } = this.state;
        const colors = ["#277da1", "#577590", "#43aa8b", "#90be6d"];
        function Cardcolor(colors = []) {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        return (
            <>
                <Navbar2 title="รายการบ่อเลี้ยง" />
                <SafeAreaView style={styles.container}>
                    <Button title="CLICK" onPress={()=>{
                        console.log(this.state.data)
                    }} />
                    <View>
                        {this.state.isLoading ? <Text style={styles.isLoadding}>กำลังโหลดข้อมูล...</Text> : (
                            <FlatList style={{ paddingTop: 20 }} showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                keyExtractor={({ _id }, index) => _id}
                                renderItem={({ item }) => (
                                    <PondCard p_id={item._id} title={item.p_name} color="#48bfe3" data={data} />
                                )}
                            />
                        )}
                    </View>
                </SafeAreaView>
            </>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 20
    },
    isLoadding: {
        fontSize: 30
    }
})