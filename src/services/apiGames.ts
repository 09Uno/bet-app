import axios from "axios";


export function getGames() {
try {
    
    const apiGames = axios.create({
        baseURL: 'http://192.168.1.7:3333/',
    })

    return apiGames


} catch (error) {
    console.log(error + "Erro ao tentar acessar a API")
}
}