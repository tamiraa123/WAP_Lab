var blockArrays = [];
var isRunning = false;
var newPositionArray = [];
var emptyBlock;

$(document).ready(function() {
    initGame();
    $('#shufflebutton').click(function (e) {
        doShuffle();
      });
    $('#puzzlearea div').click(function(e) {
        doMove(e);
    });
});

function initGame() {
    const puzzleAreaEle = $('#puzzlearea');
    puzzleAreaEle.children('div').each(function (idx, ele) {
      ele.className = 'puzzlepiece';
      let x = ((idx % 4) * 100);
      let y = (Math.floor(idx / 4) * 100);
      $(ele).css('left', `${x}px`);
      $(ele).css('top', `${y}px`);
      let style = ele.style;
      style.backgroundImage = 'url("background.jpg")';
      style.backgroundPosition = -x + 'px ' + (-y) + 'px';
      blockArrays[idx] = ele;
    });
  }
  function doShuffle() {
    const array = [];
    newPositionArray = [];
    for (let i = 0; i <= 15; i++) {
      array.push(i);
    }
  
    shuffle(array);
    emptyBlock = array.pop();
    for (let i = 0; i < 15; i++) {
      const newPosition = array[i];
      newPositionArray[i] = newPosition;
      const x = ((newPosition % 4) * 100);
      const y = (Math.floor(newPosition / 4) * 100);
      $(blockArrays[i]).css('left', `${x}px`);
      $(blockArrays[i]).css('top', `${y}px`);
    }
    isRunning = true;
  }

  function shuffle(array) {
    for (let i = 0; i < 100 ; i ++) {
      let random1 = Math.floor(Math.random() * array.length);
      let random2 = Math.floor(Math.random() * array.length);
      let tmp = array[random1];
      array[random1] = array[random2];
      array[random2] = tmp;
    }
  }

  function doMove(e) {
    if (isRunning) {
      const element = e.currentTarget;
      const text = element.innerText;
      const currentBlock = parseInt(text) - 1;
      const currentPosition = newPositionArray[currentBlock];
      if ((currentPosition % 4 !== 0 && emptyBlock === currentPosition - 1)
            || ((currentPosition + 1) % 4 !== 0 && currentPosition + 1 === emptyBlock)
            || currentPosition - 4 === emptyBlock
            || currentPosition + 4 === emptyBlock) {
        updatePosition(element);
        newPositionArray[currentBlock] = emptyBlock;
        emptyBlock = currentPosition;
        let isEnd = true;
        for (let i=0 ; i < newPositionArray.length ; i++) {
          if (newPositionArray[i] !== i) {
            isEnd = false;
            break;
          }
        }
        if (isEnd) {
          isRunning = false;
          alert('Congratulation!!!');
        }
      }
    }
  }
  function updatePosition(element) {
    const x = ((emptyBlock % 4) * 100);
    const y = (Math.floor(emptyBlock / 4) * 100);
    $(element).css('left', `${x}px`);
    $(element).css('top', `${y}px`);
  }