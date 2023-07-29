console.log('--------------------------------------------------------------------------------------')
console.log('Exercise: Leve3');

let findLove = "Любовь - лучшая вещь в этом мире. Некоторые нашли свою любовь, а некоторые все ещё ищут свою любовь";
console.log(findLove.search("любовь"));
console.log(findLove.match('любовь'));
let parrent = /любовь/gi;
console.log(findLove.match(parrent));

console.log('--------------------------------------------------------------------------------------')

let texts = 'Вы не можете закончить предложение, потому что, потому что, потому что это соединение';

let findtext = /потому что/gi;
console.log(texts.match(findtext))