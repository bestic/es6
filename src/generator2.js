import "babel-polyfill";

var answers = [
  `It is certain`, `It is decidedly so`, `Without a doubt`,
  `Yes definitely`, `You may rely on it`, `As I see it, yes`,
  `Most likely`, `Outlook good`, `Yes`, `Signs point to yes`,
  `Reply hazy try again`, `Ask again later`, `Better not tell you now`,
  `Cannot predict now`, `Concentrate and ask again`,
  `Don't count on it`, `My reply is no`, `My sources say no`,
  `Outlook not so good`, `Very doubtful`
];
function answer () {
  return answers[Math.floor(Math.random() * answers.length)]
}

function* chat () {
  while (true) {
    let question = yield '[Genie] ' + answer()
    console.log(question)
  }
}
var g = chat()
//console.log(g.next('test').value);
//console.log(g.next('test').value);

console.log(g.next('[Me] Will ES6 die a painful death?').value)
console.log(g.next('[Me] How youuu doing?').value)