import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { RiUserSettingsFill } from 'react-icons/ri'
import HamburgerMenu from "../hamburguerMenu/HamburguerMenu";


export default function Header() {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={styles.container_main}>

            <View style={styles.hamburger_menu}>
                <HamburgerMenu />
            </View>

            <Image style={styles.logo_img} source={require('../../imgs/beta-app-logo.png')} />
            <View style={styles.userConfig}>

                <RiUserSettingsFill size={30} color="#fff" />

            </View>

        </View>



    )


}
const styles = StyleSheet.create({
    container_main: {

        backgroundColor: '#126e51',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        height: 'auto',
        width: '100%',
    },
    logo_img: {
        height: 60,
        width: 80,
        marginTop: 10,
        marginBottom: 10,

    },
    hamburger_menu: {
        height: 'auto',
        width: 'auto',
        marginTop: 25,
        marginLeft: 10,

    },
    userConfig: {
        height: 45,
        width: 45,
        marginTop: 25,

    }



})
// Path: bet-app\src\components\header\header.scss

