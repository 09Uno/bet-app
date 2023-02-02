{filtered?.map((item) => (

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
))
}