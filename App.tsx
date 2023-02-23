import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './src/components/header/Header';
import GamesData from './src/services/requestDataFromApi/getGamesFromApi';
import { GamesToUseProps } from './src/services/requestDataFromApi/getGamesFromApi';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { IconButton } from 'react-native-paper';
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

  function handleConfirm(date: Date) {
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

          <View style={styles.games}>

            <View style={styles.game_info}>
              <View style={styles.country_flag}></View>
              <View style={styles.game_info_text}>
                <Text style={styles.text}>Alemanha</Text>
                <Text style={styles.text}>Bundesleague</Text>
              </View>
            </View>




            <View style={styles.game_section}>
              <View style={styles.game_match}>
                <View style={styles.game_time}>
                  <Text style={styles.text} >ENCERRADO</Text>
                </View>
                <View style={styles.game_team}>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text} >Atletico Mineiro</Text>
                  </View>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text}>Raja caza Blanca</Text>
                  </View>
                </View>
                <View style={styles.score}>
                  <View style={styles.team}>
                    <Text style={styles.text}>2</Text>
                  </View>
                  <View style={styles.team}>
                    <Text style={styles.text}>5</Text>
                  </View>
                </View>

              </View>


            </View>



            <View style={styles.game_section}>
              <View style={styles.game_match}>
                <View style={styles.game_time}>
                  <Text style={styles.text} >Hora</Text>
                </View>
                <View style={styles.game_team}>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text} >Home</Text>
                  </View>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text}>Away</Text>
                  </View>
                </View>
                <View style={styles.score}>
                  <View style={styles.team}>
                    <Text style={styles.text}>2</Text>
                  </View>
                  <View style={styles.team}>
                    <Text style={styles.text}>5</Text>
                  </View>
                </View>

              </View>


            </View>





                
            <View style={styles.game_section}>
              <View style={styles.game_match}>
                <View style={styles.game_time}>
                  <Text style={styles.text} >Hora</Text>
                </View>
                <View style={styles.game_team}>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text} >Home</Text>
                  </View>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text}>Away</Text>
                  </View>
                </View>
                <View style={styles.score}>
                  <View style={styles.team}>
                    <Text style={styles.text}>2</Text>
                  </View>
                  <View style={styles.team}>
                    <Text style={styles.text}>5</Text>
                  </View>
                </View>

              </View>


            </View>








            <View style={styles.game_section}>
              <View style={styles.game_match}>
                <View style={styles.game_time}>
                  <Text style={styles.text} >Hora</Text>
                </View>
                <View style={styles.game_team}>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text} >Home</Text>
                  </View>
                  <View style={styles.team}>
                    <View style={styles.team_brand}>
                    </View>
                    <Text style={styles.text}>Away</Text>
                  </View>
                </View>
                <View style={styles.score}>
                  <View style={styles.team}>
                    <Text style={styles.text}>2</Text>
                  </View>
                  <View style={styles.team}>
                    <Text style={styles.text}>5</Text>
                  </View>
                </View>

              </View>


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
    fontSize: 20,
    fontWeight: '600',
  },
  text_league: {
    color: '#fff',

    fontSize: 25,
    fontWeight: '600',
    marginLeft: 22
  }
  ,
  container: {

    display: 'flex',
    backgroundColor: 'g',
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

  games: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  game_info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 90,
    backgroundColor: '#585858',
    padding: 10,
    paddingTop: 20,

  },
  game_info_text: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 90,
    textAlign: 'end',
  },
  game_country: {
  },
  game_league: {

  },
  country_flag: {
    width: 70,
    height: 50,
    backgroundColor: 'blue',
    marginRight: 30,
    marginLeft: 5,

  },
  game_section: {
    padding: 2,

    width: '100%',
    height: 120,
    backgroundColor: '#3f3d3d',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#126e51',
    borderBottomWidth: 3,

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
    width:116,

  },
  game_team: {
    display: 'flex',
    flexDirection: 'column',
    width: '62%',
    height: 'auto',
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    color: '#fff',
    marginLeft: 5,
    justifyContent: 'center',
    borderLeftColor: '#eeeeee17',
    borderLeftWidth: 1,
    borderRightColor: '#eeeeee17',
    borderRightWidth: 1,

  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 5,
    marginRight: 5,
    width: '10%',
    padding: 5,
  },
  game_match: {
    display: 'flex',
    flexDirection: 'row',
  },
  team: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,

  },
  team_name: {

    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
  },

  team_brand: {
    display: 'flex',
    marginLeft: 3,
    marginRight: 15,
    width: 30,
    height: 30,
    position: 'relative',
    margin: 2,
    backgroundColor: "blue",



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