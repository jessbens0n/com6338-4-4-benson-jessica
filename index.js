var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var previousWord = document.getElementById('previous-word')
var wordToGuess = document.getElementById('word-to-guess')
var remainingGuesses = document.getElementById('remaining-guesses')
var incorrectLetters = document.getElementById('incorrect-letters')
var answer = words[Math.floor(Math.random() * words.length)]
var lives = 10
var correct = false
var lastLetters = answer.length
var winEl = document.getElementById('wins')
var loseEl = document.getElementById('losses')
var wins = 0
var losses = 0
var wrong = []
var good = []
var solution = answer.split('')
remainingGuesses.textContent = lives

wordToGuess.textContent = ""

for (i = 0; i < answer.length; i++){
  solution[i] = '_'
}


var board = solution.join("")


console.log(answer)

wordToGuess.textContent = board

document.body.onkeyup = function(e){
  var key = e.key.toLowerCase()
  console.log(e.key)

  if (wrong.includes(key) == false && good.includes(key) == false){

  for (i = 0; i < answer.length; i++){
    if (answer[i] == key){
      correct = true
      lastLetters--
      good.push(key)
      solution[i] = key
    }else{

    }
  }
  if (correct == true){
    board = solution.join("")
    wordToGuess.textContent = board
    
    if (lastLetters == 0){
      wins++
      winEl.textContent = wins
      previousWord.textContent = answer
      wordToGuess.textContent = ""
      answer = words[Math.floor(Math.random() * words.length)]
      solution = answer.split('')
      
      for (i = 0; i < answer.length; i++){
        wordToGuess.textContent = wordToGuess.textContent + "_"
        solution[i] = '_'
        }
        lives = 10
        remainingGuesses.textContent = lives
        board = solution.join("")
        console.log(answer)
        wordToGuess.textContent = board
        wrong = []
        good = []
        lastLetters = answer.length
        incorrectLetters.textContent = ""
        }
    
    }else{
    lives--
    remainingGuesses.textContent = lives
    wrong.push(key)
    incorrectLetters.textContent = wrong
    
    if (lives == 0){
      losses++
      loseEl.textContent = losses
      previousWord.textContent = answer
      wordToGuess.textContent = ""
      answer = words[Math.floor(Math.random() * words.length)]
      solution = answer.split('')
      
      for (i = 0; i < answer.length; i++){
        wordToGuess.textContent = wordToGuess.textContent + "_"
        solution[i] = '_'
        }
        lives = 10
        remainingGuesses.textContent = lives
        board = solution.join("")
        console.log(answer)
        wordToGuess.textContent = board
        wrong = []
        good = []
        lastLetters = answer.length
        incorrectLetters.textContent = ""
    }
    var correct = false
  }
}
}