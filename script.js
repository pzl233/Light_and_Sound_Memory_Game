//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakeMade = 0;
var timeleft = 10;
var startCounting = false;
var countdownTimer = setInterval(helper, 1000);
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function startGame() {
  // initialize game variables
  progress = 0;
  timeleft = 10;
  mistakeMade = 0;
  clueHoldTime = 1000
  gamePlaying = true;
  startCounting = false
  pattern = [];
  clearInterval(countdownTimer)

  for (let i = 0; i <= getRandomInt(3,7); i++) {
    pattern.push(getRandomInt(1,6))
  }
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();

}

function stopGame() {
  startCounting = false
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
}


function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  timeleft = 10;
  startCounting = false;
  alert("Now playing round " + (progress+1));
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime *= 0.85;
  }
  clearInterval(countdownTimer)
  setTimeout(function(){startCounting = true},delay);

  countdownTimer = setInterval(helper, 1000);
}


function helper() {
  if (startCounting) {
        timeleft--;
  }
      document.getElementById('pageBeginCountdown').value = timeleft;
      document.getElementById('pageBeginCountdownText').textContent = timeleft;

      if (timeleft <=0) {
        clearInterval(countdownTimer);
        loseGame();
      }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // Is guess correct?
  if (pattern[guessCounter] == btn) {
    // Is turn over?
    if (progress == guessCounter) {
      //Is this the last turn?
      if (progress == pattern.length - 1) {
        // Win
        winGame();
      } else {
        // Increment progress, play next clue sequence
        progress++;
        playClueSequence();
      }
    } else {
      // Increment guessCounter
      guessCounter++;
    }
  } else {
    if (mistakeMade < 3) {
      mistakeMade++;
    } else {
      // Lose game
      loseGame();
    }
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  clearInterval(countdownTimer);
}

function winGame() {
  stopGame();
  clearInterval(countdownTimer);
  alert("Game Over. You won!");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 522.2,
}

                                                    
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)