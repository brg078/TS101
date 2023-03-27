// console.log('hello world!');

// let age: number = 20;

// if (age < 50)
//     age += 10;

// console.log(age);
//--

//longhand
// let sales: number = 123_456_7890;
// let course: string = 'Typescript';
// let is_published: boolean = true;

//shorthand, compiler automatically detects variable type
// let sales = 123_456_7890;
// let course = 'Typescript';
// let is_published = true;
//variable type "any", try to avoid as it flies in the face of TypeScript
//let level;

//an any variable declared in a function
// function render(document) {
//     console.log(document);
// }

//declare type if an empty array
// let numbers: number[] = [1, 2, 3];
// numbers.forEach(n => n.toExponential);

// 1, 'Brett' TUPLE, restrict to two values as a general rule
// let user: [number, string] = [1, 'Brett']
// user[1];
// user.push(1);


// const small = 1;
// const medium = 2;
// const large = 3;

//pascal enum
// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);