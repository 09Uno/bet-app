import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { setupApiGames } from './src/services/setupApiGames';
import Header from './src/components/header/Header';

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
  console.log(games);

  return (
    <>

      <StatusBar style="auto" />

      <SafeAreaView style={styles.container} >
        <Header />
        <View style={styles.game_main}>
          <View style={styles.section_filter}>


            <Text style={styles.filter}>Datas Menu</Text>
            <Text style={styles.filter}>Item de Busca</Text>

          </View>
          {dataFilter.length == 0 &&

            (
              <>
                <View style={styles.loading}>

                  <Image style={styles.loading_img} source={require('./src/imgs/loading.gif')} />

                </View>

              </>

            )

          }

          {dataFilter.map((item) => {


            if (item.infoSection?.idInfo != null || undefined) {
              for (let index = 0; index < item.infoSection?.idInfo.length; index++) {

                return (
                  <>

                    <View key={item.infoSection.idInfo} style={styles.game_info}>
                      <View style={styles.country_flag}></View>
                      <View style={styles.game_info_text}>
                        <Text style={styles.text}>{item.infoSection.country}</Text>
                        <Text style={styles.text}>{item.infoSection.league}</Text>
                      </View>
                    </View>
                  </>
                )
              }
            } else if (item.games?.idGame != null || undefined) {
              for (let index2 = 0; index2 < item.games?.idGame.length; index2++) {
                return (

                  <>
                    <View key={item.games.idGame} style={styles.game_section}>

                      <View style={styles.game_match}>
                        <View style={styles.game_time}>
                          <Text style={styles.text} >{item.games.time}</Text>
                        </View>

                        <View style={styles.breakLine}>
                        </View>

                        <View style={styles.game_team}>
                          <View style={styles.team}>
                            <View style={styles.team_brand}> <Image style={styles.team_brand_img} source={{ uri: item.games.flagHome }} />  </View>
                            <Text style={styles.text}>{item.games.home}</Text>
                          </View>


                          <View style={styles.team}>
                            <View style={styles.team_brand}><Image style={styles.team_brand_img} source={{ uri: item.games.flagAway }} /></View>
                            <Text style={styles.text}>{item.games.away}</Text>
                          </View>


                        </View>

                        <View style={styles.breakLine}>
                        </View>

                        <View style={styles.score}>
                          <View style={styles.team}>
                            <Text style={styles.text}>{item.games.homeScore}</Text>
                          </View>

                          <View style={styles.team}>
                            <Text style={styles.text}>{item.games.awayScore}</Text>
                          </View>

                        </View>
                      </View>
                    </View>
                  </>

                )
              }
            }
          })}



        </View>
      </SafeAreaView>

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
  loading:{
    display: 'flex',
    marginTop: 160,
    
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  loading_img:{
    width: 200,
    height: 200,
  },
  filter: {
    marginRight: 10,
    marginLeft: 10,
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
    borderBottomWidth: 1,
    borderBottomColor: '#126e51',
    borderStartWidth: 1,
    borderStartColor: '#126e51',


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
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 45,
    height: 35,
    backgroundColor: '#000',
    float: 'right',
    display: 'flex',
    marginRight: 20,
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

