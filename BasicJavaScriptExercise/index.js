import slugify from "slugify";
import {hello, sum, abstract, text, user, users} from "./my-module.js";

const title = slugify('Hello Node.js'); // some-string
console.log(title);


console.log(sum(2,4));
console.log(abstract(2,4));
console.log(text);
console.log(user);
console.log(users);
hello("elif");

