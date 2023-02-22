import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './src/components/header/Header';
import GamesData from './src/services/requestDataFromApi/getGamesFromApi';
import { GamesToUseProps } from './src/services/requestDataFromApi/getGamesFromApi';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {  IconButton } from 'react-native-paper';
import { IconCalendar } from './src/components/icons/Icons';


export default function App() {

  

  const [gamesToUse, setGamesToUse] = useState<GamesToUseProps[] | null | undefined>(null);
  const [dates, setDates] = useState<string[]>([]);
  const [date, setDate] = useState<string>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const iconCalendar = IconCalendar;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  function handleConfirm (date : Date){
    const DateToReturn = moment(date).format('YYYY-MM-DD');
    handleDateSelected(DateToReturn)
    hideDatePicker();
  };

  
  useEffect(() => {

    const dataBase = moment();
    setDate(dataBase.format('YYYY-MM-DD'));


    const daysBeforeToday = 5;
    const daysAfterToday = 5;

    const datesBeforeToday = Array.from({ length: daysBeforeToday }, (_, i) =>
      moment(dataBase).subtract(i + 1, 'days').format('YYYY-MM-DD')
    );

    const datesAfterToday = Array.from({ length: daysAfterToday }, (_, i) =>
      moment(dataBase).add(i + 1, 'days').format('YYYY-MM-DD')
    );

    setDates([...datesBeforeToday.reverse(), dataBase.format('YYYY-MM-DD'), ...datesAfterToday]);

  }, []);


  function handleDateSelected(date: string) {

    const datePicked = date
    setDate(datePicked);
  }

 

  useEffect(() => {
    try {
      async function gamesToday() {
        const gamesToday = await GamesData(date);
        setGamesToUse(gamesToday);
      }
      gamesToday().then(() => {

      });
    } catch (error) {
      console.log(error);
    }

  }, [date]);


  return (
    <>
      <StatusBar backgroundColor="#3f8872" />

      <View style={styles.container}>
        <Header />
        <View style={styles.game_main}>
          <View style={styles.section_filter}>

            <View style={styles.calendar_item}>
            


               <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              
              <IconButton size={50} icon={iconCalendar} onPress={showDatePicker} style={styles.calendar_button} />
            

              <Picker style={styles.picker}
                mode="dialog"
                selectedValue={date}
                onValueChange={(date, index) => {
                  handleDateSelected(date)
                }

                }

                dropdownIconColor="transparent"
                dropdownIconRippleColor={'transparent'}
              >

                {dates.map((date, index) => {


                  return (

                    <Picker.Item style={styles.piker_item} label={moment(date).format("DD/MM/YYYY")} value={date} key={index} />
                  )
                })
                }


              </Picker>
            </View>
          </View>

            

         
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
    backgroundColor: '#126e51',
    padding: 0,
    height: 60,

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
    height: 70,

  },
  calendar_item: {
    height: 60,
    backgroundColor: '#126e51',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    textAlign: 'center',
    width: '70%',
    flexDirection: 'row',
    borderColor: '#3f8872',
    borderBottomColor: '#3f8872',
    borderTopColor: '#3f8872',
    borderLeftColor: '#3f8872',
    borderRightColor: '#3f8872',


  },
  calendar_button: {
   
  
    

  },
  picker: {
    width: "91%",
    height: 10,
    color: '#FFF',
    backgroundColor: '#126e51',
    justifyContent: 'center',
    borderRadius: 4,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    display: 'flex',
    paddingLeft: '2%',
    textAlign: 'center',
    marginLeft: '30%',

  },
  piker_item: {
    width: '80%',
    
    backgroundColor: '#126e51',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    

  },



  game_main: {
    display: 'flex',
    width: '100%',
    color: '#fff',
    marginTop: 0,
    borderTopColor: '#ffdf1b',
    borderTopWidth: 2,

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