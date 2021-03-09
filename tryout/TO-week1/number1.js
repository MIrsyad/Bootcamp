const axios = require(`axios`).default;
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

const fetcher = new Fetcher()
async function main() {
var getJsonResponse = await fetcher.Get('https://httpbin.org/get')
var deleteJsonResponse = await fetcher.Delete('https://httpbin.org/delete')
var postJsonResponse = await fetcher.Post('https://httpbin.org/post',jsonData)
var putJsonResponse = await fetcher.Put('https://httpbin.org/put',jsonData)
var patchJsonResponse = await fetcher.Patch('https://httpbin.org/patch',jsonData)

console.log('========get Json=========');
console.log(getJsonResponse);
console.log('========delete Json=========');
console.log(deleteJsonResponse);
console.log('========post Json=========');
console.log(postJsonResponse);
console.log('========put Json=========');
console.log(putJsonResponse);
console.log('========patch Json=========');
console.log(patchJsonResponse);
}
main()