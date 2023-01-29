import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItem, ScrollView, StyleSheet, Text, View, Image, AppRegistry, ImageURISource, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { setupApiGames } from './src/services/setupApiGames';


interface GamesInfoSection {

  id: string
  games: Games | null;
  infoSection: InfoSection | null
}

type InfoSection = {

  country: string | null | undefined;
  league: string | null | undefined;

}

type Games = {

  home: string | null | undefined;
  away: string | null | undefined;
  homeScore: string | null | undefined;
  awayScore: string | null | undefined;
  flagHome: number | ImageURISource | ImageURISource[];
  flagAway: number | ImageURISource | ImageURISource[];
  time: string | null | undefined;

}





export default function App() {



  const [games, setGames] = useState<GamesInfoSection[]>();
  const [filtered, setFiltered] = useState<GamesInfoSection[]>();


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

  function filterGames() {

    var dataInfo = games?.map(game => game.infoSection)
    var dataGames = games?.map(game => game.games)
    var filtered = []

    if (dataInfo) {

      filtered.push(dataInfo);

      if (dataGames) {

        filtered.push(dataGames);
      }
    }
    console.log(filtered);
  }
  filterGames







  return (
    <>

      <StatusBar style="auto" />

      <SafeAreaView style={styles.container}>
        <View style={styles.game_main}>
          <Text>Jogos de Hoje</Text>

          <View style={styles.game_info} >

            <View style={styles.game_country}>
              <Text>Brasil</Text>
            </View>

            <View style={styles.game_league}>
              <Text>Campeonato Brasileiro</Text>
            </View >

          </View>


          <View style={styles.game_section}>

            <View style={styles.game_match}>
              <View style={styles.game_time}>
                <Text>20´</Text>
              </View>

              <View style={styles.breakLine}>
              </View>

              <View style={styles.game_team}>
                <View style={styles.team}>
                  <View style={styles.team_brand}></View>
                  <Text style={styles.team_name}>Bayer de Munique</Text>
                </View>


                <View style={styles.team}>
                  <View style={styles.team_brand}> </View>
                  <Text style={styles.team_name}>Barcelona</Text>
                </View>


              </View>

              <View style={styles.breakLine}>
              </View>

              <View style={styles.score}>
                <View style={styles.team}>
                  <Text style={styles.team_name}>1</Text>
                </View>


                <View style={styles.team}>
                  <Text style={styles.team_name}>2</Text>
                </View>

              </View>



            </View>


          </View>
        </View>
      </SafeAreaView>

    </>
  )
};


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
    float: 'rigth '

  },
  country: {
    display: 'flex',
    marginLeft: 3,
    width: 30,
    height: 30,
    backgroundColor: "blue",
    float: 'rigth '
  }
});
