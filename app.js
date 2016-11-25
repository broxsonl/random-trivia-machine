'use strict';

const triviaArray = [
  {
    item: '1',
    text: 'I hear it\'s amazing when the purple-stuffed worm in flap-jaw space does a raw blink on harakiri rock.',
  },
  {
    item: '2',
    text: 'Solid Snake is Liquid Snake\'s brother.',
  },
  {
    item: '3',
    text: 'Luffy WILL become the next pirate king.',
  },
  {
    item: '4',
    text: 'Rich Evans is a phenomenal crank phone caller.',
  },
  {
    item: '5',
    text: 'Frankie Manning is the Ambassador of Lindy Hop',
  },
  {
    item: '6',
    text: 'The number 64 is larger than 63.',
  },
  {
    item: '7',
    text: 'These men are pawns!',
  },
];

function generateTrivia() {

  let triviaRandom = Math.floor(Math.random() * (triviaArray.length));

  document.getElementById("trivia-p").innerHTML = triviaArray[triviaRandom].text;

}

function addNewTrivia() {
  console.log('HIT');
  event.preventDefault();

  let newTrivia = document.getElementById("new-trivia").value;
  let newItem = document.getElementById("new-item").value;

  triviaArray.push({ text: newTrivia, item: newItem});

  document.getElementById("new-trivia").value = null;
  document.getElementById("new-item").value = null;
}
