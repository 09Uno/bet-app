import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { RiUserSettingsFill } from 'react-icons/ri'

export default function Header() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    return (
        <View style={styles.container_main}>

            <View style={styles.hamburger_menu}>
                <RiUserSettingsFill size={30} color="#fff" />
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
        height: 75,
        width: '100%',
    },
    logo_img: {
        height: 60,
        width: 80,
        marginTop: 10,
        marginBottom: 10,

    },
    hamburger_menu: {
        height: 45,
        width: 45,
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

