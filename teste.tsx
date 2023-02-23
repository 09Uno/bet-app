import { View } from "react-native"

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
          <View  style={styles.game_info}>
              <View style={styles.country_flag}></View>
              <Text style={styles.game_info_text}>
                  <Text  style={styles.text}>Alemanha</Text>
                  <Text style={styles.text}>Bundesleague</Text>
              </Text>
          </View>
      </>
  )
}
} else if (item.games?.idGame != null || undefined) {
for (let index2 = 0; index2 < item.games?.idGame.length; index2++) {
  return (
      <>
          <View key={item.games.idGame} style={styles.game_section}>
              <Text style={styles.game_match}>
                  <Text style={styles.game_time}>
                      <Text style={styles.text} key={"time" + item.games.time} >{item.games.time}</Text>
                  </Text>
                  <Text style={styles.breakLine}></Text>
                  <Text style={styles.game_team}>
                      <Text style={styles.team}>
                          <Text style={styles.team_brand}>
                              <Image style={styles.team_brand_img} key={"flagHome" + item.games.flagHome } source={item.games.flagHome ? { uri: item.games.flagHome } : require('./src/imgs/teamIMG.png')} />
                          </Text>
                          <Text style={styles.text} key={item.games.home} >{item.games.home}</Text>
                      </Text>
                      <Text style={styles.team}>
                          <Text style={styles.team_brand}>
                              <Image style={styles.team_brand_img} key={"flagAway" + item.games.flagAway } source={item.games.flagAway ? { uri: item.games.flagAway } : require('./src/imgs/teamIMG.png')}/>
                          </Text>
                          <Text key={item.games.away} style={styles.text}>{item.games.away}</Text>
                      </Text>
                  </Text>
                  <Text style={styles.breakLine}></Text>
                  <Text style={styles.score}>
                      <Text style={styles.team}>
                          <Text key={ "homeScore" +  item.games.homeScore} style={styles.text}>{item.games.homeScore}</Text>
                      </Text>
                      <Text style={styles.team}>
                          <Text key={"awayScore" + item.games} style={styles.text}>{item.games.awayScore}</Text>
                      </Text>
                  </Text>
              </Text>
          </View>
      </>
  )
}
}
})}

<View style={styles.game_section}>
<Text style={styles.game_match}>
  <Text style={styles.game_time}>
    <Text style={styles.text} >Hora</Text>
  </Text>
  <Text style={styles.breakLine}></Text>
  <Text style={styles.game_team}>
    <Text style={styles.team}>
      <Text style={styles.team_brand}>
      </Text>
      <Text style={styles.text}  >Home</Text>
    </Text>
    <Text style={styles.team}>
      <Text style={styles.team_brand}>
      </Text>
      <Text style={styles.text}>Away</Text>
    </Text>
  </Text>
  <Text style={styles.breakLine}></Text>
  <Text style={styles.score}>
    <Text style={styles.team}>
      <Text style={styles.text}>2</Text>
    </Text>
    <Text style={styles.team}>
      <Text style={styles.text}>5</Text>
    </Text>
  </Text>
</Text>
</View>
