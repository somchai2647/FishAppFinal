// import React, { Component } from 'react'
// import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
// // import Spinner from "react-native-loading-spinner-overlay";
// import API, { setClientToken } from "../components/API";

// const initialState = {
//     username: '',        // Store `username` when user enters their username
//     password: '',        // Store `password` when user enters their password
//     errors: {},          // Store error data from the backend here
//     isAuthorized: false, // If auth is successful, set this to `true`
//     isLoading: false,    // Set this to `true` if You want to show spinner
// };


// export default function Login({ navigation }) {
//     // const { isLoading } = this.state;
//     return (
//         <>
//             {/* <Spinner visible={isLoading} /> */}
//             <KeyboardAvoidingView style={style.container}>
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
//                     <View style={style.hero}>
//                         <Image source={require('../assets/icon_512_c.png')} style={style.logo} />
//                         <Text style={style.colorPrimary}> ระบบสนับสนุนการตัดสินใจ</Text>
//                         <Text style={style.colorPrimary}>สำหรับการเลี้ยงปลา</Text>
//                         <View style={style.regform}>
//                             <TextInput placeholder="ชื่อผู้ใช้งาน" placeholderTextColor="#ffff" underlineColorAndroid={'transparent'} style={style.formControl} onChangeText={(username) => this.setState({ username })} onChangeText={this.onUsernameChange} />
//                             <TextInput placeholder="รหัสผ่าน" secureTextEntry={true} placeholderTextColor="#ffff" underlineColorAndroid={'transparent'} style={style.formControl}
//                                 onChangeText={this.onPasswordChange}
//                                 // onSubmitEditing={this.onPressLogin.bind(this)}
//                                 blurOnSubmit
//                             />
//                             <TouchableOpacity onPress={() => {
//                                 navigation.replace('Home')
//                             }} style={style.button}
//                                 // onPress={this.onPressLogin.bind(this)}
//                             >
//                                 <Text style={style.buttonText} >เข้าสู่ระบบ</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>
//         </>
//     )
// }
// const style = StyleSheet.create({
//     formControl: {
//         color: '#ffff',
//         height: 40,
//         marginBottom: 25,
//         borderBottomColor: '#f8f8f8',
//         borderBottomWidth: 1,
//         width: 300
//     },
//     regform: {
//         marginTop: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'stretch'
//     },
//     button: {
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: '#3E89C7',
//         marginTop: 30,
//         borderRadius: 15,

//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold'
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#48CAE4'
//     },
//     hero: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     colorPrimary: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: "center",
//     },
//     logo: {
//         width: 100,
//         height: 100,
//     }
// });





// import React, { Component } from 'react'
// import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import BtnLogin from '../components/BtnLogin'
// export default class Login extends Component {
//     state = {
//         username: '',
//         password: '',
//     }
//     render() {
//         return (
//             <KeyboardAvoidingView style={style.container}>
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
//                     <View style={style.hero}>
//                         <Image source={require('../assets/icon_512_c.png')} style={style.logo} />
//                         <Text style={style.colorPrimary}> ระบบสนับสนุนการตัดสินใจ</Text>
//                         <Text style={style.colorPrimary}>สำหรับการเลี้ยงปลา</Text>
//                         <View style={style.regform}>
//                             <TextInput placeholder="ชื่อผู้ใช้งาน" placeholderTextColor="#ffff" underlineColorAndroid={'transparent'} style={style.formControl} onChangeText={(username) => this.setState({ username })} />
//                             <TextInput placeholder="รหัสผ่าน" secureTextEntry={true} placeholderTextColor="#ffff" underlineColorAndroid={'transparent'} style={style.formControl} onChangeText={(password) => this.setState({ password })}
//                                 blurOnSubmit
//                             />
//                             <BtnLogin username={this.state.username} password={this.state.password} />
//                         </View>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>
//         )
//     }
// }
// const style = StyleSheet.create({
//     formControl: {
//         color: '#ffff',
//         height: 40,
//         marginBottom: 25,
//         borderBottomColor: '#f8f8f8',
//         borderBottomWidth: 1,
//         width: 300
//     },
//     regform: {
//         marginTop: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'stretch'
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#48CAE4'
//     },
//     hero: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     colorPrimary: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: "center",
//     },
//     logo: {
//         width: 100,
//         height: 100,
//     }
// });