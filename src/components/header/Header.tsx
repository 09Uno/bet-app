import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"


export default function Header() {

    return (
        <View style={styles.container_main}>

                <Image style={styles.logo_img} source={require('../../imgs/beta-app-logo.png')} />
        </View>



    )


}
const styles = StyleSheet.create({
    container_main: {

        backgroundColor: '#126e51',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        height: 70,
        width: '100%',
    },
    logo_img: {
        width: 100,
        height: 60,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    hamburger_menu: {
        width: 30,
        height: 30,
    },
    search: {
        width: 30,
        height: 30,
        backgroundColor: 'white',

    }



})
// Path: bet-app\src\components\header\header.scss

