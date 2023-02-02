import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageURISource, SafeAreaView, SectionList, FlatList, ListRenderItem } from 'react-native';
import React, { useEffect, useState } from 'react';
import { setupApiGames } from './src/services/setupApiGames';
import { groupBy } from 'lodash';


type GamesInfoSection = {

  id: string
  infoSection: InfoSection
  games: Games

}

type InfoSection = {
  id: string | undefined | null
  country: string | undefined | null
  league: string | undefined | null

}

type Games = {
  id: string | undefined | null
  home: string | undefined | null
  away: string | undefined | null

  homeScore: string | undefined | null
  awayScore: string | undefined | null

  flagHome: string | undefined | null
  flagAway: string | undefined | null

  time: string | undefined | null
}

type GamesFilter = {
  idSection: string 
  id: string

  country: string
  league: string

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
  const [filtered, setFiltered] = useState<GamesFilter[]>();

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


  function filteredData(): GamesFilter[] {


    var data = new Array();

    games?.map((game) => {

      if (game.infoSection?.country && game.infoSection?.league) {

        data.push(game.infoSection?.id);
        data.push(game.infoSection?.id);
        data.push(game.infoSection?.country);
        data.push(game.infoSection?.league);

      }
      // console.log(game.info?.country)
      if (game.games?.home && game.games?.away && game.games?.homeScore
        && game.games?.awayScore && game.games?.time) {

        data.push(game.games?.id);
        data.push(game.games?.home);
        data.push(game.games?.away);
        data.push(game.games?.homeScore);
        data.push(game.games?.awayScore);
        data.push(game.games?.time);
      }


        return data;
    })
    return data;
  }

  const data = filteredData() as GamesFilter[];

  useEffect(() => {

    return setFiltered(data);

  }
    , [games])


  filteredData();

  function renderItem({ item }: { item: GamesFilter }) {
    return (
      <><View key={item.id} style={styles.game_info}>
        <Text style={styles.game_country}></Text>
        <Text style={styles.game_league}>{item.league}</Text>
      </View>
        <View style={styles.game_section}>

          <View style={styles.game_match}>
            <View style={styles.game_time}>
              <Text>{item.time}</Text>
            </View>

            <View style={styles.breakLine}>
            </View>

            <View style={styles.game_team}>
              <View style={styles.team}>
                <View style={styles.team_brand}></View>
                <Text style={styles.team_name}>{item.home}</Text>
              </View>


              <View style={styles.team}>
                <View style={styles.team_brand}> </View>
                <Text style={styles.team_name}>{item.away}</Text>
              </View>


            </View>

            <View style={styles.breakLine}>
            </View>

            <View style={styles.score}>
              <View style={styles.team}>
                <Text style={styles.team_name}>{item.homeScore}</Text>
              </View>

              <View style={styles.team}>
                <Text style={styles.team_name}>{item.awayScore}</Text>
              </View>

            </View>
          </View>
        </View></>
    )
  }

  return (
    <>

      <StatusBar style="auto" />

      <SafeAreaView style={styles.container} >
        <View style={styles.game_main}>
          <Text>Jogos de Hoje</Text>

          <FlatList data={filtered}
            keyExtractor={item => item.idSection}
            renderItem={renderItem}

          />
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
