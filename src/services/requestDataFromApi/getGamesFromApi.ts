import { apiRapid } from '../setupApi'

export interface Game {

  [id: string]: {
    fixture_id: string;
    event_timestamp: string;
    event_date: string;
    league_id: string;
    round: string;
    homeTeam_id: string;
    awayTeam_id: string;
    homeTeam: string;
    awayTeam: string;
    status: string;
    statusShort: string;
    goalsHomeTeam: string | null;
    goalsAwayTeam: string | null;
    halftime_score: string | null;
    final_score: string | null;
    penalty: string;
    elapsed: string;
    firstHalfStart: string;
    secondHalfStart: string;
  };


}


export interface GamesToUseProps {
  game : Game;
  homeTeamLogo:  string;
  awayTeamLogo:  string
}


export default async function GamesData() {
  try {
    const response = await apiRapid?.get("fixtures/date/2023-02-13");
    const games: Game[] = response?.data.api.fixtures


    const gamesToArray: Game[] = Object.values(games).map(game => {
      return {
        id: game.fixture_id,
        fixture_id: game.fixture_id,
        event_timestamp: game.event_timestamp,
        event_date: game.event_date,
        league_id: game.league_id,
        round: game.round,
        homeTeam_id: game.homeTeam_id,
        awayTeam_id: game.awayTeam_id,
        homeTeam: game.homeTeam,
        awayTeam: game.awayTeam,
        status: game.status,
        statusShort: game.statusShort,
        goalsHomeTeam: game.goalsHomeTeam,
        goalsAwayTeam: game.goalsAwayTeam,
        halftime_score: game.halftime_score,
        final_score: game.final_score,
        penalty: game.penalty,
        elapsed: game.elapsed,
        firstHalfStart: game.firstHalfStart,
        secondHalfStart: game.secondHalfStart,
      };
    });

    const gamesToUseProps :GamesToUseProps[] = gamesToArray?.map(game => {
      
      return {


        ...game as Game,
        homeTeamLogo: `https://media.api-sports.io/football/teams/${game.homeTeam_id}.png` as string,
        awayTeamLogo: `https://media.api-sports.io/football/teams/${game.awayTeam_id}.png` as string,

      } as GamesToUseProps;
    });
    
    const gamesToUse = await Promise.all(gamesToUseProps);
    // console.log(gamesToUseProps);
    // console.log(gamesToUse);
    return gamesToUse;
  } catch (error) {
    console.log(error);
  }
}
