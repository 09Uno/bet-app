import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { Searchbar } from 'react-native-paper';

export default function Header() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    return (
        <View style={styles.container_main}>
            <Image style={styles.logo_img} source={require('../../imgs/beta-app-logo.png')} />
            <View style={styles.search}>

                <Searchbar
                    placeholder=""
                    style={{ backgroundColor: '#3f8872', borderRadius: 10, color:'#fff'  }}
                    inputStyle={{ color: '#fff' }}
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />

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
        height: 80,
        width: '100%',
    },
    logo_img: {
        width: 120,
        height: 75,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 10,
        
    },
    hamburger_menu: {
      
    },
    search: {
        marginRight: 20,
        marginTop: 'auto',
        marginBottom: 'auto',
        width:180,
        height: 50  ,
        float: 'right',

    }



})
// Path: bet-app\src\components\header\header.scss

