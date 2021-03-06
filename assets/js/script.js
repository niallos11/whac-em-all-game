/* jshint esversion: 6 */
// let varibles 
let score = 0;
let highscore = localStorage.getItem('highscore') || score;
let whacPosition;

//const variables 
const boxs = document.querySelectorAll('.box');
const timeLeft = document.querySelector('.time-left');

//Render Score
let renderScores = () => {
document.getElementById('js-score').innerText = score;
document.getElementById('js-highscore').innerText = highscore;
};

// if logic to update and render score + highscore
let updateHighscore = (score) => {
  if (score > highscore) {
    highscore = score;
  }
};
// Random Box function
function randomBox() {
  boxs.forEach(box => {
    box.classList.remove('target');
  });
// Random location of target in boxes 
  let randomBox = boxs[Math.floor(Math.random() * 9)];
  randomBox.classList.add('target');

  whacPosition = randomBox.classList;  // Declare hit position = to the random box hit
}
// Event Listener when clicked on box with target to add result with whacPosition
boxs.forEach(box => {
  box.addEventListener('mousedown', () => {
    if (box.className == whacPosition) {
      score ++;
      updateHighscore(score);
      renderScores();
      localStorage.setItem('highscore',score); // save highscore to local storage
      whacPosition = null;
    }
  });
});
// function for speed to move Target 
function moveTarget() {
    timerId = setInterval(randomBox, 600);
  }
// timer countdown 
let timerId;

let currentTime;

let countDownTimerId;

// timer function 

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert(' Game Over, You scored ' + score);
      alert(' High Score score to beat is ' + highscore);
      whacPosition = null;
}
// function to play game 
}
function jsButton(){
  clearInterval(countDownTimerId); 
  clearInterval(timerId);
  currentTime = 30;
  moveTarget();
  countDownTimerId = setInterval(countDown, 1000);
  score = 0;
  clearInterval(score);
  renderScores();
} 