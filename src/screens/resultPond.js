import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Navbar2 from "../components/Navbar2"
import NumberFormat from 'react-number-format';
export default class resultPond extends Component {
    render() {
        const { p_fish_date, p_width, p_length } = this.props.route.params;
        const recommend_num_fish = (p_width * p_length) * 50;
        return (
            <>
                <Navbar2 />
                <Button title="DEBUG" onPress={() => {
                    console.log(this.props.route.params)
                }} />
                <View>
                   <NumberFormat displayType={"text"} value={recommend_num_fish} />
                </View>

            </>
        )
    }
}
