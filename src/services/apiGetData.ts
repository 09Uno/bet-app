import axios from "axios";


export function ApiRapid() {

    try {

        const apiRapid = axios.create({


            baseURL: 'https://api-football-v1.p.rapidapi.co/',
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }

        })
        console.log("ok");

        return apiRapid;

    } catch (error) {
        console.log(error + "Erro ao tentar acessar os dados da API");
    }
}


