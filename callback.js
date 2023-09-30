// setTimeout(() => {
//  console.log("Merhaba");
// }, 2000)

// setInterval(()=>{
//     console.log("Merhaba ben her saniye çalışacağım");
// }, 1000);


// parametre olarak bir fonksiyon geçip onu kullandık.
// const sayHi = (cb) => {
//     cb();
// };

// sayHi(()=> {
//     console.log("Hello");
// });


// fetch ile veri çekme
// önce user sonra post çekilir 
// bunlar asenkron işlemler, düzeni sağlamak için iç içe yazdık

 import fetch from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((data) => data.json())
// .then((user) => {
//     console.log(user);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post) => console.log(post))
// });


// async function getData(){
//     const users = await(await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
//     const post1 = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     console.log(users);
//     console.log("post1" , post1);
// }
// getData();


// anonim fonksiyon ile tanımlama 
// (async ()=>{
//     const users = await(await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
//     const post1 = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    
//     console.log(users);
//     console.log("post1" , post1); 
// })();



// axios ile veri çekme
// axios bize data adı altında bir field getirir
// her birinin adı data olduğu için yeniden isimlendiririz

import axios from "axios";
// (async ()=>{
//     const {data: user1} = await axios("https://jsonplaceholder.typicode.com/users/1");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
        
//     console.log(user1);
//     //console.log("post1" , post1); 
// })();


// kendimiz then ile kullanacağımız fonklar yaratırız?
// resolve ise then'e düşer, reject ise catch'e düşer

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if(number === 1){
//             resolve({text: "Selam"});
//         }
//         reject("Bir problem oluştu.")
//     }); 
// };

// getComments(2)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));



// promise ile data getirme
const getUser = (number) => {
    return new Promise(async(resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");
        resolve(data)
    }); 
};

getUser()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));