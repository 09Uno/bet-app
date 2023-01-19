import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>

      <StatusBar style="auto" />

      <View style={styles.container}>

        <FlatList
          style={styles.game_main}
          data={[{
            key: "test"
          }]}

          renderItem={({ item }) =>
            <>



              <View style={styles.game_date}>

                <Text>12/12/12</Text>

              </View>

              <View style={styles.game_section}>
                <View style={styles.game_section}>
                  <View style={styles.game_time}>

                    <Text>12:00</Text>

                  </View>

                  <View style={styles.game_macth}>
                    <View style={styles.team}>
                      <Text style={styles.team_name}>{item.key}</Text>
                      <View style={styles.team_brand}></View>
                    </View>

                    <View style={styles.team}>
                      <Text style={styles.team_name}>{item.key}</Text>
                      <View style={styles.team_brand}></View>
                    </View>

                  </View>
                </View>
                <View style={styles.game_icons}>
                  <View style={styles.tournament}>

                  </View>

                  <View style={styles.country}>

                  </View>
                </View>
              </View>






            </>


          }

        />

      </View>


    </>
  );
}

const styles = StyleSheet.create({
  container: {

    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 70,
    width: '100%',
    height: 'auto',
  },
  game_main: {
    display: 'flex',
    width: '100%',
  },
  game_info: {
    width: '90%',
    height: 'auto',
    
  },
  game_section: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',



  },
  game_date: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,

  },
  game_time: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 20,
    width:'100%',
  },
  game_macth: {

  },
  team: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  team_name: {
    margin: 5,
    fontSize: 25,
  },

  team_brand: {
    display: 'flex',
    marginLeft: 20,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    position: 'relative',
    float: 'rigth ',
    margin: 2,


  },
  game_icons: {
    alignSelf: 'center',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',

  },
  tournament: {
    display: 'flex',
    marginLeft: 20,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    position: 'relative',
    float: 'rigth '

  },
  country: {
    display: 'flex',
    marginLeft: 20,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    float: 'rigth '
  }
});
