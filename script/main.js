let str;
str = '30 дней JavaScript';
console.log(str);


let stroka;
stroka = 'hello today second day , hard way';
console.log(stroka);

let len = "JavaScript";
console.log(len.length);

let toUpp = "hi my name Sher";
console.log(toUpp.toUpperCase())

let toLow = 'MY WAY START ';
console.log(toLow.toLowerCase());

let sub = '30 days of javaScript';
console.log(sub.substr(4, 6));

let string = '30 days of javaScript';
console.log(string.substring(4, 6));

let days = '30 Days Of JavaScript';
console.log(days.substr(3, 18))

let incu = '30 Days Of JavaScript';
console.log(incu.includes('Days'));

let splits = '30 Days Of JavaScript';
console.log(splits.split(" "));

let splitss = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(splitss.split(", "));

let replaces = '30 Days Of JavaScript на 30 Days';
console.log(replaces.replace("JavaScript", "Python"));

let charAts = '30 Days Of JavaScript на 30 Days';
console.log(charAts.charAt(15));

let lastIndex = charAts.length - 1;
console.log(charAts.charCodeAt(lastIndex));

let indexOff = '30 Days Of JavaScript';
console.log(indexOff.indexOf('30'))

let lastindex = '30 Days Of JavaScript';
console.log(lastindex.lastIndexOf('t'));

let fineIndexOf = 'Вы не можете закончить предложение, потому что, потому что, потому что это соединение';
console.log(fineIndexOf.indexOf('потому что'))

let fineLastIndexOf = 'Вы не можете закончить предложение, потому что, потому что, потому что это соединение';
console.log(fineLastIndexOf.lastIndexOf('потому что'));

let trimers = '     3 0 Days Of JavaScript ';
console.log(trimers)
console.log(trimers.trim())


let startsWiths = '30 Days Of JavaScript';
console.log(startsWiths.startsWith('30'));

let endsWiths = '30 Days Of JavaScript';
console.log(endsWiths.endsWith('JavaScript'));


let matchs = 'a0 Days Of JavaScripta';
console.log(matchs.match('a'))

let concats = '30 Days';
console.log(concats.concat(' JavaScript'))
let repeats = '30 Days Of JavaScript';
console.log(repeats.repeat(4))
