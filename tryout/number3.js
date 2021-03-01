const axios = require(`axios`).default;
const fs = require(`fs`);


var jsonData ={
    "id": 30,
    "name": "Someone"
  };
class Fetcher{
    constructor(){

    }
    async Get(url){
        let data = await axios.get(url)
        return data.data
    }

    async Delete(url){
        let data = await axios.delete(url)
        return data.data
    }

    async Post(url,data){
        let res = await axios.post(url,data)
        return res.data
    }

    async Put(url,data){
        let res = await axios.put(url,data)
        return res.data
    }

    async Patch(url,data){
        let res = await axios.patch(url,data)
        return res.data
    }
}

//===============================================================================================================

let log=[]
class Log{
    constructor(dataMovie)
	{
        this.dataMovie = dataMovie
        console.log('ini berhasil di cons movie');
	}

    constructor(getJsonResponse, deleteJsonResponse, postJsonResponse, putJsonResponse, patchJsonResponse)
	{
        this.getJsonResponse=getJsonResponse
        console.log('ini berhasil di cons Json');
        this.deleteJsonResponse=deleteJsonResponse
        this.postJsonResponse=postJsonResponse
        this.putJsonResponse=putJsonResponse
        this.Patch=patchJsonResponse
	}


	displayTitle()
	{
        let message = `${this.dataMovie.title}\r\n`
		return message;
	}

    displaySinopsis(){
        let message = `Sinopsis \r\n${this.dataMovie.overview}
        `
        return message
    }

    print(){
        let message = `${this.displayTitle()}\r\n${this.displaySinopsis()}`
        console.log(message);
    }
}

// async function getData() {
//     const response =await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=97e70e21ef827be79d195c0c25d57542&language=en-US&page=2`)
//     return response.data
// }

async function getLatestData() {
    const response =await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=97e70e21ef827be79d195c0c25d57542&language=en-US`)
    const data = response.data
    return data
}

const fetcher = new Fetcher()
// async function mainJson() {
// var getJsonResponse = await fetcher.Get('https://httpbin.org/get')
// var deleteJsonResponse = await fetcher.Delete('https://httpbin.org/delete')
// var postJsonResponse = await fetcher.Post('https://httpbin.org/post',jsonData)
// var putJsonResponse = await fetcher.Put('https://httpbin.org/put',jsonData)
// var patchJsonResponse = await fetcher.Patch('https://httpbin.org/patch',jsonData)

// console.log('========get Json=========');
// console.log(getJsonResponse);
// console.log('========delete Json=========');
// console.log(deleteJsonResponse);
// console.log('========post Json=========');
// console.log(postJsonResponse);
// console.log('========put Json=========');
// console.log(putJsonResponse);
// console.log('========patch Json=========');
// console.log(patchJsonResponse);
// }

async function main() {
    var getJsonResponse = await fetcher.Get('https://httpbin.org/get')
    var deleteJsonResponse = await fetcher.Delete('https://httpbin.org/delete')
    var postJsonResponse = await fetcher.Post('https://httpbin.org/post',jsonData)
    var putJsonResponse = await fetcher.Put('https://httpbin.org/put',jsonData)
    var patchJsonResponse = await fetcher.Patch('https://httpbin.org/patch',jsonData)

    const latestMovie = await getLatestData()
    const logMovie = new Log(latestMovie)
    const logJson = new Log(getJsonResponse, deleteJsonResponse, postJsonResponse, putJsonResponse, patchJsonResponse)
    

    // logMovie.print()
}   

main()