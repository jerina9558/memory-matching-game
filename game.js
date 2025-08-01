const cards = ['🍎','🍌','🍇','🍓','🍎','🍌','🍇','🍓'];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  const board = document.getElementById('game-board');
  shuffle(cards);
  cards.forEach((symbol, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    card.textContent = '';
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (flippedCards.length === 2 || this.classList.contains('matched') || flippedCards.includes(this)) return;

  this.textContent = this.dataset.symbol;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  const [first, second] = flippedCards;
  if (first.dataset.symbol === second.dataset.symbol) {
    first.classList.add('matched');
    second.classList.add('matched');
    matchedCards.push(first, second);
    if (matchedCards.length === cards.length) {
      alert('🎉 You found all matches!');
    }
  } else {
    first.textContent = '';
    second.textContent = '';
  }
  flippedCards = [];
}

createBoard();
