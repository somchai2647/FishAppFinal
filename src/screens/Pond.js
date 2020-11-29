import PondCard from "../components/PondCard";
import Navbar2 from "../components/Navbar2";
import Axios from "../components/API";
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default class Pond extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            user_id: this.props.route.params.data,
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({ isLoadding: true });
        Axios.get(`/pond/show/${this.state.user_id}`).then(res => {
            this.setState({ data: res.data.result });
            this.setState({ isLoading: false });
            console.log(this.state)
        });
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <>
                <Navbar2 title="รายการบ่อเลี้ยง" />
                <SafeAreaView style={styles.container}>
                    <View>
                        {isLoading ? <ActivityIndicator /> : (
                            <FlatList
                                data={data}
                                keyExtractor={({ _id }, index) => _id}
                                renderItem={({ item }) => (
                                    // <Text>{item.p_name}</Text>
                                    <PondCard title={item.p_name} color="green" />
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
    }
})