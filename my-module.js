// export function sum(a, b){
//     return a + b;
// }

function sum(a, b){
    return a + b;
}

const abstract = (a, b) => a - b;

// böyle de tanımlanabilir
// const sum = function sum(a, b){
//     return a + b;
// }

// arrow function ile tanımlama (ES6 ile gelen özellik)
// const sum = (a, b) => {
//     return a + b;
// }

// en kısa haliyle tanımlama
// const sum = (a, b) => a + b;

// export etmek için başına da export yazabiliriz
// export const hello = () => {
//     console.log("Hello");
// }

const hello = (name) => {
    //console.log("Hello " + name);
    console.log(`Hello ${name}`);
}

// string ve objenin export edilmesi
export const text = 'Text';
export const user = {
    name: "Mehmet",
    surname: "Seven",
}

// arrayin export edilmesi
export const users = [
    {
        name: "Mehmet",
        surname: "Seven",
    },
    {
        name: "Ali",
        surname: "Seven",
    }
]

// fonksiyonu dışa aktarmak ve başka yerlerde 
// kullanabilmek için böyle export edebiliriz
// export default sum;

// böyle de export edilir
export {
    hello,
    sum,
    abstract
}