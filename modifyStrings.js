let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Bailie";

// Q3.3: Slice and substring
let myStringSlice = myString.slice(5, 9);
let anotherStringSubstring = anotherString.substring(6, 9);

console.log(myStringSlice);
console.log(anotherStringSubstring);

// Q3.4: Upper- and lowercase
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// Q3.5: Concat, trim, replace, split
let concat = hello.concat(" " + myName);
let trim = anotherString.trim();
let replace = myString.replace("is a", " ");
let split = myString.split(" ");

console.log("concat: " + concat);
console.log("trim: " + trim);
console.log("replace: " + replace);
console.log("split: " + split);