import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageURISource, SafeAreaView, SectionList, FlatList, ListRenderItem, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { setupApiGames } from './src/services/setupApiGames';
import { groupBy, indexOf } from 'lodash';


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
  console.log(dataFilter);

  return (
    <>

      <StatusBar style="auto" />

      <SafeAreaView style={styles.container} >
        <View style={styles.game_main}>
          <Text>Jogos de Hoje</Text>

          {dataFilter.map((item) => {


            if (item.infoSection?.idInfo != null || undefined) {
              for (let index = 0; index < item.infoSection?.idInfo.length; index++) {

                return (
                  <>

                    <View key={item.infoSection?.idInfo} style={styles.game_info}>
                      <Text style={styles.game_country}>{item.infoSection?.country}</Text>
                      <Text style={styles.game_league}>{item.infoSection?.league}</Text>
                    </View>
                  </>
                )
              }
            } else if (item.games?.idGame != null || undefined) {
              for (let index2 = 0; index2 < item.games?.idGame.length; index2++) {
                return (
                
                  <>
                  <View key={item.games?.idGame} style={styles.game_section}>

                  <View style={styles.game_match}>
                    <View style={styles.game_time}>
                      <Text>{item.games?.time}</Text>
                    </View>

                    <View style={styles.breakLine}>
                    </View>

                    <View style={styles.game_team}>
                      <View style={styles.team}>
                        <Text style={styles.team_brand}></Text>
                        <Text style={styles.team_name}>{item.games?.home}</Text>
                      </View>


                      <View style={styles.team}>
                        <Text style={styles.team_brand}> </Text>
                        <Text style={styles.team_name}>{item.games?.away}</Text>
                      </View>


                    </View>

                    <View style={styles.breakLine}>
                    </View>

                    <View style={styles.score}>
                      <View style={styles.team}>
                        <Text style={styles.team_name}>{item.games?.homeScore}</Text>
                      </View>

                      <View style={styles.team}>
                        <Text style={styles.team_name}>{item.games?.awayScore}</Text>
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
  container: {

    display: 'flex',
    backgroundColor: '#a1b9bd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 'auto',
    color: '#fff ',

  },
  game_main: {
    display: 'flex',
    width: '100%',

  },
  game_info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '95%',
    height: 'auto',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 3,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,


  },
  game_country: {

  },
  game_league: {

  },
  game_section: {
    padding: 2,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 3,
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'


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
    width: 70
  },
  game_team: {
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    height: 'auto',
    marginTop: 5,
    marginBottom: 5,
  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 6,
    marginBottom: 4,
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
  },
  breakLine: {
    width: 1,
    height: "100%",
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
  },
  team_brand: {
    display: 'flex',
    marginLeft: 2,
    width: 20,
    height: 20,
    backgroundColor: "blue",
    position: 'relative',
    margin: 2,


  },
  team_brand_img: {
    width: 20,
    height: 20,
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

