const axios = require('axios').default;
const url1 ='https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/users';

function getUserPost() {
    return  axios.get(url1);
}

function getUserAccounts() {
    return  axios.get(url2);
}

async function getData() {
    let result = [];
    try {
      const userAccount = await getUserAccounts();
      const userPost = await getUserPost();
      console.log("pengambilan data berhasil");
      console.log(userPost);

      for (let index = 0; index < userPost.data.length; index++) {
        for (let indexx = 0; indexx < userAccount.data.length; indexx++) {
            if(userPost.data[index].userId==userAccount.data[indexx].id){
                console.log(`match at ${indexx+1}`);
                Object.assign(userPost.data[index],{'user':userAccount.data[indexx]})
                console.log(userPost.data[index]);
            }   
        }
    }
    } catch (error) {
      console.error(error);
    } 
}
getData();