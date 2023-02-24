import { Response } from 'express';
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
  


export default async function LeaguesById(year: string) {

try {
    
    const response = await apiRapid?.get(`/leagues?season=${year}`);
    const leagues: ApiResponse = response?.data;
    
    console.log(leagues);




} catch (error) {
    console.log(error + "error");
}



}

LeaguesById("2023");