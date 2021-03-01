const axios = require('axios').default;
const url1 ='https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/users';

async function getUserPost() {
    return await axios.get(url1);
}

async function getUserAccounts() {
    return await axios.get(url2);
}

async function getData() {
    const userAccounts = await getUserAccounts().then((response) => response.data);
    const userPost = await getUserPost().then((response) => response.data);
    console.log("pengambilan data berhasil");

    const newPost = userPost.map((e) => {
        const userAccount = userAccounts.find((u) => u.id === e.userId);
        e.username = userAccount.username;
        return e
    })

    console.log({userPost});
}
getData()