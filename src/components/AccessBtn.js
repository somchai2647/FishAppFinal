import React, { Component } from 'react'
import {
    Text, View, StyleSheet, TouchableHighlight, Alert,
    Modal
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class AccessBtn extends Component {
    state = {
        click: true,
        modalVisible: false,
        title: this.props.title,
        detail: this.props.detail
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { modalVisible, title, detail } = this.state;
        return (
            <>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    if (!this.state.click != this.state.click) {
                        this.setState({ click: !this.state.click })
                    }
                    console.log(this.props)
                }} onLongPress={() => {
                    this.setModalVisible(true);
                }}>
                    {this.state.click ? <Icon name="circle" style={styles.icon} /> : <Icon name="check-circle" style={styles.icon} />}
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{detail}</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        height: 80,
        backgroundColor: '#0096c7',
        width: 370,
        color: 'white',
        marginTop: 20,
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: "bold"
    },
    icon: {
        color: 'white',
        fontSize: 40,
        marginRight: 15
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
