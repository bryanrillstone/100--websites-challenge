const button = document.getElementById("ask");
const result = document.getElementById("result");

const getAnswer = () => {
    const answers = ['As I see it, yes','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','It is certain','It is decidedly so','Most likely','My reply is no','My sources say no','Outlook good','Outlook not so good','Reply hazy try again','Signs point to yes','Very doubtful','Without a doubt','Yes','Yes definitely','You may rely on it'];
    randomAnswer = answers[Math.floor(Math.random()*answers.length)];
    result.innerHTML = randomAnswer;
}

button.addEventListener("click", getAnswer);