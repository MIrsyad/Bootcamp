const axios = require(`axios`).default;

let log=[]
class Log{
    constructor(data)
	{
        this.data = data
	}


	displayTitle()
	{
        let message = `${this.data.title}\r\n`
		return message;
	}

    displaySinopsis(){
        let message = `Sinopsis \r\n${this.data.overview}
        `
        return message
    }

    displayProduction(){
        
    }

    print(){
        let message = `${this.displayTitle()}\r\n${this.displaySinopsis()}`
        console.log(message);
    }
}

async function getData() {
    const response =await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=97e70e21ef827be79d195c0c25d57542&language=en-US&page=2`)
    return response.data
}

async function getLatestData() {
    const response =await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=97e70e21ef827be79d195c0c25d57542&language=en-US`)
    const data = response.data
    return data
}

async function main() {
    const data = await getData()
    const latest = await getLatestData()
    const log = new Log(latest)
    log.print()
}   
main()