import axios from "axios";


export function ApiRapid() {

    try {

        const apiRapid = axios.create({


            baseURL: 'https://api-football-v1.p.rapidapi.com/',
            headers: {
                // 'X-RapidAPI-Key': '6c388cc7d6msh6472b709a3bd129p177bc8jsna3fc13ce99aa',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }


        })
        console.log("ok");

        return apiRapid;

    } catch (error) {
        console.log(error + "Erro ao tentar acessar os dados da API");
    }
}


