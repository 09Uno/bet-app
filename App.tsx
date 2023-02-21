import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './src/components/header/Header';

import GamesData from './src/services/requestDataFromApi/getGamesFromApi';
import { GamesToUseProps } from './src/services/requestDataFromApi/getGamesFromApi';
import { Picker } from '@react-native-picker/picker';
import { BsCalendar3 } from 'react-icons/bs'


export default function App() {

  const [gamesToUse, setGamesToUse] = useState<GamesToUseProps[] | null | undefined>(null);

  useEffect(() => {
    try {
      async function gamesToday() {
        const gamesToday = await GamesData();
        setGamesToUse(gamesToday);
        // console.log(gamesToday);
      }
      gamesToday().then(() => {

      });
    } catch (error) {
      console.log(error);
    }

  }, []);

  //pegar datas do calendário e mandar para o getGamesFromApi
  function handleCalendar(data: string) {

  }


  //retornar os jogos do dia no front


  function handleGamesToday() {



  }


  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <Header />
        <View style={styles.game_main}>
          <View style={styles.section_filter}>

            <View style={styles.calendar_item}>
              <BsCalendar3 size={17} color="#fff" />
              <Picker style={styles.picker}
                mode="dialog"
                selectedValue="option1"
                dropdownIconColor="transparent"
              >
                <Picker.Item style={styles.piker_item} label="Option 1" value="option1" />
                <Picker.Item style={styles.piker_item} label="Option 1" value="option1" />
                <Picker.Item style={styles.piker_item} label="Option 1" value="option1" />


              </Picker>
            </View>
          </View>
          <Text>Teste</Text>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({

  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  container: {

    display: 'flex',
    backgroundColor: '#404046',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    color: '#fff ',


  },
  section_filter: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#3f8872',
    padding: 5,

  },
  loading: {
    display: 'flex',
    marginTop: 160,

    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  loading_img: {
    width: 200,
    height: 200,
  },
  filter: {
    marginRight: 10,
    marginLeft: 10,
  },
  calendar_item: {
    height: 40,
    backgroundColor: '#126e51',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
    flexDirection: 'row',
    borderColor: '#3f8872',
    borderBottomColor: '#3f8872',
    borderTopColor: '#3f8872',
    borderLeftColor: '#3f8872',
    borderRightColor: '#3f8872',


  },
  picker: {
    width: "90%",
    height: 23,
    color: '#FFF',
    backgroundColor: '#126e51',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    textAlign: 'center',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',

  },
  piker_item: {
    height: 17,
    backgroundColor: '#126e51',
    color: '#FFF',
    shadowColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },






  game_main: {
    display: 'flex',
    width: '100%',
    color: '#fff',

  },
  game_info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
    backgroundColor: '#505050',
    padding: 10,
    marginBottom: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#126e51',

    borderTopWidth: 2,
    borderTopColor: '#126e51',

  },
  game_info_text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 40,

  },
  game_country: {
  },
  game_league: {

  },
  country_flag: {

  },
  game_section: {
    padding: 2,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3,
    width: 'auto',
    height: 'auto',
    backgroundColor: '#404046',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  game_date: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,


  },
  game_time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 70,

  },
  game_team: {
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    height: 'auto',
    marginTop: 5,
    marginBottom: 5,
    color: '#fff',

  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 5,
    marginRight: 5,
  },
  game_match: {
    display: 'flex',
    flexDirection: 'row',
  },
  team: {
    display: 'flex',
    flexDirection: 'row',
  },
  team_name: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 15,
    color: '#fff',
  },
  breakLine: {
    width: 1,
    height: "100%",
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',


  },
  team_brand: {
    display: 'flex',
    marginLeft: 3,
    marginRight: 3,
    width: 23,
    height: 23,
    position: 'relative',
    margin: 2,



  },
  team_brand_img: {
    width: 23,
    height: 23,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
  },
  game_icons: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  tournament: {
    display: 'flex',
    marginLeft: 3,
    width: 30,
    height: 30,
    backgroundColor: "blue",
    position: 'relative',
    float: 'right '

  },
  country: {
    display: 'flex',
    marginLeft: 3,
    width: 30,
    height: 30,
    backgroundColor: "blue",
    float: 'right '
  }
})