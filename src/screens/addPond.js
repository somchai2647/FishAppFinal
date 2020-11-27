import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function addPond() {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#48bfe3',
                    image: <Image style={styles.image} source={require('../assets/onboarding/onboarding-img1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#5e60ce',
                    image: <Image style={styles.image} source={require('../assets/onboarding/onboarding-img2.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.image} source={require('../assets/onboarding/onboarding-img3.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}
const styles = StyleSheet.create({

})
