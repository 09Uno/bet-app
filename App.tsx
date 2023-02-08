import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { setupApiGames } from './src/services/setupApiGames';
import Header from './src/components/header/Header';
import { ActivityIndicator, } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';



type GamesInfoSection = {

  idMain: string
  infoSection: InfoSection
  games: Games

}

type InfoSection = {
  idInfo: string
  country: string
  league: string

}

type Games = {
  idGame: string
  home: string
  away: string

  homeScore: string
  awayScore: string

  flagHome: string
  flagAway: string

  time: string
}


export default function App() {


  const [games, setGames] = useState<GamesInfoSection[]>();

  const [selectedDate, setSelectedDate] = useState('hoje');



  var days = [
    { date: '2022-12-01' },
    { date: '2022-12-31' },
    { date: '2023-01-01' },
    { date: '2023-01-02' },
    { date: '2023-01-03' },
    { date: '2023-01-04' },
    { date: '2023-01-05' },
    { date: '2023-01-06' },
    { date: '2023-01-07' },
    { date: '2023-01-08' },
    { date: '2023-01-09' },
    { date: '2023-01-10' },
    { date: '2023-01-11' },
  ]
  var today = '2023-01-05'
  var todayWorld: string = 'hoje'

  days.map((day) => {
    if (day.date == today) {
      day.date = todayWorld
    }
  })

  useEffect(() => {

    try {
      const api = setupApiGames();
      api?.get('/games').then(response => {

        setGames(response.data);

      }
      )

    } catch (error) {
      console.log(error + 'error ao acessar os Jogos');
    }


  }, [])

  const dataFilter = [{
    idMain: '' as string,
    infoSection: {
      idInfo: '',
      country: '',
      league: ''
    } as InfoSection,
    games: {
      idGame: '',
      home: '',
      away: '',
      homeScore: '',
      awayScore: '',
      flagHome: '',
      flagAway: '',
      time: "",
    } as Games
  }];

  dataFilter.shift();

  function filteredData() {


    games?.map((game) => {


      dataFilter.push({
        idMain: game.idMain as string,

      } as GamesInfoSection);

      if (game.infoSection.country != null || undefined && game.infoSection.league != null || undefined) {
        dataFilter.push({

          infoSection: {
            idInfo: game.infoSection.idInfo,
            country: game.infoSection.country,
            league: game.infoSection.league
          } as InfoSection

        } as GamesInfoSection)
      }
      else if (game.games.home != null || undefined && game.games.away != null || undefined) {
        dataFilter.push({

          games: {
            idGame: game.games.idGame,
            home: game.games.home,
            away: game.games.away,
            homeScore: game.games.homeScore,
            awayScore: game.games.awayScore,
            flagHome: game.games.flagHome,
            flagAway: game.games.flagAway,
            time: game.games.time,
          } as Games

        } as GamesInfoSection)
      }

    }
    )
  }
  filteredData();
  // console.log(games);

  return (
    <>

      <StatusBar style="auto" />

      <View style={styles.container} >
        <Header />
        <View style={styles.game_main}>
          <View style={styles.section_filter}>


            <View style={styles.calendar_filter}>
              <Icon name="date-range" size={24} color="#126e51" />


              <Picker
                mode='dialog'
                style={styles.calendar_filter_list}
                selectedValue={selectedDate}
                itemStyle={styles.calendar}

                onValueChange={(itemValue, itemIndex) =>
                  setSelectedDate(itemValue)
                }>

                {
                  days.map((day) => {
                    return (
                      
                        <Picker.Item style={styles.calendar_item} label={day.date} value={day.date} />
                     
                    )
                  })
                }


              </Picker>
            </View>



          </View>
          {dataFilter.length == 0 &&

            (
              <>
                <View style={styles.loading}>

                  <ActivityIndicator animating={true} color={"gray"} size={'large'} />

                </View>

              </>

            )

          }

         {dataFilter.map((item) => {
    if (item.infoSection?.idInfo != null || undefined) {
        for (let index = 0; index < item.infoSection?.idInfo.length; index++) {
            return (
                <>
                    <Text key={item.infoSection.idInfo[index]} style={styles.game_info}>
                        <Text style={styles.country_flag}></Text>
                        <Text style={styles.game_info_text}>
                            <Text style={styles.text}>{item.infoSection.country}</Text>
                            <Text style={styles.text}>{item.infoSection.league}</Text>
                        </Text>
                    </Text>
                </>
            )
        }
    } else if (item.games?.idGame != null || undefined) {
        for (let index2 = 0; index2 < item.games?.idGame.length; index2++) {
            return (
                <>
                    <View key={item.games.idGame[index2]} style={styles.game_section}>
                        <Text style={styles.game_match}>
                            <Text style={styles.game_time}>
                                <Text style={styles.text} >{item.games.time}</Text>
                            </Text>
                            <Text style={styles.breakLine}></Text>
                            <Text style={styles.game_team}>
                                <Text style={styles.team}>
                                    <Text style={styles.team_brand}>
                                        <Image style={styles.team_brand_img} source={{ uri: item.games.flagHome }} />
                                    </Text>
                                    <Text style={styles.text}>{item.games.home}</Text>
                                </Text>
                                <Text style={styles.team}>
                                    <Text style={styles.team_brand}>
                                        <Image style={styles.team_brand_img} source={{ uri: item.games.flagAway }} />
                                    </Text>
                                    <Text style={styles.text}>{item.games.away}</Text>
                                </Text>
                            </Text>
                            <Text style={styles.breakLine}></Text>
                            <Text style={styles.score}>
                                <Text style={styles.team}>
                                    <Text style={styles.text}>{item.games.homeScore}</Text>
                                </Text>
                                <Text style={styles.team}>
                                    <Text style={styles.text}>{item.games.awayScore}</Text>
                                </Text>
                            </Text>
                        </Text>
                    </View>
                </>
            )
        }
    }
})}




        </View>
      </View>

    </>
  )

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
    justifyContent: 'space-between',
    backgroundColor: '#3f8872',
    padding: 10,

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
  picker: {
    width: 200,
    height: 50,
    color: '#FFF',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    textAlign: 'center',
  },
  calendar_filter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  calendar_filter_list: {
    height: 30,
    color: '#126e51',
    backgroundColor: '#gray ',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    textAlign: 'center',
    width: 200,
    borderColor: '#ffffff00',

  },
  calendar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 30,
    borderRadius: 5,
    backgroundColor: '#fff',

  },
  calendar_item: {
    height: 30,
    backgroundColor: '#CCC ',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    textAlign: 'center',
    width: 150,
    borderColor: '#ffffff00',


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

