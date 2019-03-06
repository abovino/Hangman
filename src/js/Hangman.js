class Hangman {
  constructor() {
    this.gamesPlayed = 0;
    this.wins = 0;
    this.losses = 0;
    this.words = [
      'Juventus',
      'Roma',
      'Fiorentina',
      'Parma',
      'Inter',
      'Milan',
      'Napoli',
    ];
    this.remainingGuesses = 10;
    this.guessedLetters = [];
    this.activeWordArr = this.setWordArr();
    this.dashes = [];
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  setWordArr() {
    return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase().split('');
  }

  setDashes(word) {
    const arr = [];
    for (let i = 0; i < word.length; i += 1) {
      arr.push('_');
    }
    this.dashes = arr;
    return this.dashes;
  }

  createKeyboard() {
    for (let i = 0; i < this.alphabet.length; i += 1) {
      $('.keyboard').append(`<div class="key" data-letter="${this.alphabet[i]}">${this.alphabet[i]}</div>`);
    }
  }

  checkLetter(letter) {
    return this.activeWordArr.indexOf(letter.toUpperCase());
  }

  updateGuesses(letterIndex) {
    if (letterIndex < 0) {
      this.remainingGuesses -= 1;
      $('#remaining-guesses').text(this.remainingGuesses);
    }
  }

  addGuessedLetter(letter) {
    this.guessedLetters.push(letter);
    $(`.key:contains('${letter.toLowerCase()}')`).addClass('disabled-key');
  }

  updateWord(guess) {
    this.activeWordArr.map((letter, i) => {
      if (letter === guess) {
        this.dashes[i] = letter;
      }
    });
    $('#word').text(this.dashes.join(' '));
  }

  checkProgress() {
    if (this.dashes.join('') === this.activeWordArr.join('')) {
      this.wins += 1;
      $('#wins').text(this.wins);
      this.disableKeyboard();
    } else if (this.remainingGuesses < 1) {
      this.losses += 1;
      $('#losses').text(this.losses);
      this.disableKeyboard();
    }
  }

  disableKeyboard() {
    $('.key').addClass('disabled-key');
  }

  newGame() {
    this.activeWordArr = this.setWordArr();
    this.setDashes(this.activeWordArr);
    this.guessedLetters = [];
    this.remainingGuesses = 10;
    $('.key').removeClass('disabled-key');
    $('#word').text(this.dashes.join(' '));
    $('#remaining-guesses').text(this.remainingGuesses);
  }
}

module.exports = Hangman;
