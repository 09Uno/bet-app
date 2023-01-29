<SectionList
sections={games as any}
keyExtractor={(item, index) => item + index}
renderItem={({ item }) => (

  <View style={styles.game_section}>

    <View style={styles.game_match}>
      <View style={styles.game_time}>
        <Text>{item.games?.time}</Text>
      </View>

      <View style={styles.breakLine}>
      </View>

      <View style={styles.game_team}>
        <View style={styles.team}>
          <View style={styles.team_brand}></View>
          <Text style={styles.team_name}>{item.games?.home}</Text>
        </View>


        <View style={styles.team}>
          <View style={styles.team_brand}> </View>
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
          <Text style={styles.team_name}>{item.games?.homeScore}</Text>
        </View>

      </View>
    </View>
  </View>


)}
renderSectionHeader={({ section: { infoSection } }) => (

  <View style={styles.game_info}>
    <Text style={styles.game_country}>{infoSection?.country}</Text>
    <Text style={styles.game_league}>{infoSection?.league}</Text>
  </View>
)}

/>