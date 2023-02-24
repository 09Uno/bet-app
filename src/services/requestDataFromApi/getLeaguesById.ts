import { apiRapid } from '../setupApi'


interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface Country {
  name: string;
  code: string | null;
  flag: string | null;
}

interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  };
}

export interface LeagueResponse {
  league: League;
  country: Country;
  seasons: Season[];
}

interface ApiResponse {
  get: string;
  parameters: {
    season: string;
  };
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: LeagueResponse[];
}



export default async function LeaguesById(date: string) {

  const year: string = date.slice(0, 4);
  console.log(year + " year");

  try {

    const response = await apiRapid?.get(`/leagues?season=${year}`);
    const leagues: ApiResponse = response?.data.api;

    console.log(leagues);




  } catch (error) {
    console.log(error + "error ao tentar acessar os dados da API");
  }



}
