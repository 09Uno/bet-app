<FlatList
data={games}

keyExtractor={item => item.id}
renderItem={(games) => 

<View style={styles.game_section}>

<View style={styles.game_match}>
  <View style={styles.game_time}>
    <Text>{games.item.games?.time}</Text>
  </View>
  <View style={styles.game_team}>
    <View style={styles.team}>
      <View style={styles.team_brand}></View>
      <Text style={styles.team_name}>{games.item.games?.home}</Text>
    </View>

    <View style={styles.team}>
      <View style={styles.team_brand}> </View>
      <Text style={styles.team_name}>{games.item.games?.away}</Text>
    </View>
  </View>
</View>


</View>

}
/>