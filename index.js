score = [0,1,2,3,4,5,6,"w"]

team1BallsFaced=0;
team2BallsFaced=0;
team1Score = 0
team2Score = 0
wicket1 = 0
wicket2 = 0
let over=1;

let indBalls = document.querySelectorAll("#team1 .balls")
let pakBalls = document.querySelectorAll("#team2 .balls")
let indScore = document.querySelector("#team1-score")
let pakScore = document.querySelector("#team2-score")
let indWick = document.querySelector("#team1-wickets")
let pakWick = document.querySelector("#team2-wickets")


function punch() {

 let randomNumber = Math.floor(Math.random() * score.length); 
 let outcome=score[randomNumber];
 if(over==1){
 if (outcome == "w"){
 wicket1 += 1;
 indWick.innerText = wicket1;
 indBalls[team1BallsFaced].innerText = outcome;
 }
 else {
 indBalls[team1BallsFaced].innerText = outcome;
 team1Score += randomNumber;
 indScore.innerText = team1Score;
 }
 if(team1BallsFaced==5 || wicket1==2){
 over=2;
 }
 team1BallsFaced++;
 }else if (over==2){
 if (outcome == "w"){
 wicket2 += 1;
 pakWick.innerText = wicket2;
 pakBalls[team2BallsFaced].innerText = outcome;
 }
 else{
 pakBalls[team2BallsFaced].innerText = outcome;
 team2Score += randomNumber;
 pakScore.innerText = team2Score;
 }
 if(team2BallsFaced==5 || wicket2==2 || team2Score>team1Score){
 over=3;
 gameOver()
 }
 team2BallsFaced++
 }
 if(over==3){
 alert("Game Ends")

 }
 
}



function gameOver() {
if (team1Score > team2Score){
 alert("IND Wins")
 }
else if (team2Score > team1Score){
 alert("PAK Wins")
 }
else{
 alert("It's a draw")
 }
}

function reset(){
 location.reload();
}


