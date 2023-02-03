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