let indBalls = document.querySelectorAll("#team1 .balls");
let pakBalls = document.querySelectorAll("#team2 .balls");
let indScore = document.getElementById("team-score");
let pakScore = document.getElementById("team2-score");
let indWickets = document.getElementById("team-wickets");
let pakWickets = document.getElementById("team2-wickets");
let indTotalScore = 0;
let pakTotalScore = 0;
let balls = 0;

function punch() {
  const randoma = Math.floor(Math.random() * 7);
  console.log(randoma);
  indBalls[balls].innerText = randoma;
  balls++;
}

{
  const randoms = Math.floor(Math.random() * 7);
  console.log(randoms);
  pakBalls[balls].innerText = randoms;
  balls++;
}
