import { getGames } from "./apiGames";

export function setupApiGames() {
    const apiGames = getGames();

    return apiGames;
}