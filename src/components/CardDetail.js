import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardDetail extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: this.props.title,
        //     icon: this.props.icon,
        //     text: this.props.text,
        // }
    }
    render() {
        let color = this.props.color;
        return (
            <View style={card2.card2}>
                <Icon name={this.props.icon} style={card2.icon} />
                <Text style={card2.text}>{this.props.title}: {this.props.text}</Text>
            </View>
        )
    }
}
const card2 = StyleSheet.create({
    card2: {
        backgroundColor: '#2c699a',
        height: 60,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 20,
        flexDirection: 'row',

    },
    icon: {
        color: "white",
        fontSize: 40,
        flex: 1,
        maxWidth: 60,
        width: 60
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 2,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})