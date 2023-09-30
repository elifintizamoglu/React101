/* 
push
map
find
filter
some
every
includes
*/

const users = ["Mehmet", "Ayşe", "Derin"];

users.push("Ali"); // sonuna eleman ekler
console.log(users);

users.map((item) => {
    console.log(item);
});

// find arama yapar verilen koşullarda
const result = users.find((item) => item ==='Ayşe');
console.log(result);

//filter filteler
const filtered = users.filter((item) => item==='Mehmet');
console.log(filtered);

//some: arrayin içindeki elemanlardan biri veya daha fazlası koşula uyuyorsa true döner değilse false döner
const some = users.some((item) => item === 'Fatma')
console.log(some);

// every : arrayin tüm elemanları şarta uymalı
const every = users.every((item) => item === 'Ayşe')
console.log(every);

// includes
const meyveler = ['elma', 'muz' ,'armut']
const isIncludes = meyveler.includes("portakal");
console.log(isIncludes);