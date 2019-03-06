require('./../css/style.css');
const $ = require('jquery');
const Hangman = require('./Hangman');

const game = new Hangman();

game.createKeyboard();
game.setDashes(game.activeWordArr);

$('#word').text(game.dashes.join(' '));
$('#remaining-guesses').text(game.remainingGuesses);
$('#wins').text(game.wins);
$('#losses').text(game.losses);

$('.key').click((e) => {
  if (game.remainingGuesses < 1 || game.dashes.indexOf('_') === -1) {
    return;
  }

  const letter = e.target.innerText.toUpperCase();
  const letterIndex = game.checkLetter(letter);
  if (game.guessedLetters.indexOf(letter) === -1) {
    game.updateGuesses(letterIndex);
    game.addGuessedLetter(letter);
    game.updateWord(letter);
    game.checkProgress();
  }
});

$('#new-game').click(() => {
  game.newGame();
});
