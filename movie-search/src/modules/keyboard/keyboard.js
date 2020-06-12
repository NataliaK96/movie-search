import * as enKeyboard from './enKeyboard.json';
import * as ruKeyboard from './ruKeyboard.json';

let lang = localStorage.getItem('userLanguage') || 'en';

const body = document.querySelector('body');
const functional = 'functional';
const letter = 'letter';

let upperCase = false;
let shiftOn = false;
let cursorIndex = 0;

const content = document.createElement('div');
content.classList.add('keyboard-content');
body.append(content);

const textarea = document.querySelector('.form-control');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
content.append(keyboard);

textarea.addEventListener('click', () => {
  cursorIndex = textarea.selectionEnd;
});

enKeyboard.forEach((row) => {
  const rowNode = document.createElement('div');
  rowNode.classList.add('keyboard__row');
  keyboard.append(rowNode);
  row.forEach((keyObj) => {
    const keyNode = document.createElement('div');
    keyNode.classList.add('keyboard__key');
    keyNode.id = keyObj.code;
    rowNode.append(keyNode);
    keyNode.enBoard = keyObj;
    keyNode.innerHTML = keyNode.enBoard.key;
    if (keyNode.enBoard.speсification === functional) {
      keyNode.classList.add(functional);
    }
  });
});

ruKeyboard.forEach((row) => {
  row.forEach((keyObj) => {
    const keyNode = document.getElementById(keyObj.code);
    keyNode.ruBoard = keyObj;
  });
});
const allKeys = Array.from(document.querySelectorAll('.keyboard__key'));
let langBoard;
function changeLetterCase() {
  allKeys.forEach((key) => {
    if (lang === 'en') {
      langBoard = key.enBoard;
    }
    if (lang === 'ru') {
      langBoard = key.ruBoard;
    }
    if (langBoard.speсification === letter) {
      if (upperCase) {
        key.innerHTML = key.innerHTML.toLowerCase();
      } else {
        key.innerHTML = key.innerHTML.toUpperCase();
      }
    }
  });
}
function changeCase() {
  changeLetterCase();

  upperCase = !upperCase;
}
function changeLetterShift() {
  allKeys.forEach((key) => {
    if (lang === 'en') {
      langBoard = key.enBoard;
    }
    if (lang === 'ru') {
      langBoard = key.ruBoard;
    }
    if (!langBoard.speсification) {
      if (shiftOn) {
        key.innerHTML = langBoard.key;
      } else {
        key.innerHTML = langBoard.upKey;
      }
    }
  });
}
function changeShift() {
  changeCase();
  changeLetterShift();

  shiftOn = !shiftOn;
}

function changeLetterLanguage() {
  if (lang === 'en') {
    lang = 'ru';
  } else {
    lang = 'en';
  }

  allKeys.forEach((key) => {
    if (lang === 'en') {
      langBoard = key.enBoard;
    }
    if (lang === 'ru') {
      langBoard = key.ruBoard;
    }
    key.innerHTML = langBoard.key;
    if (upperCase) {
      upperCase = false;
      changeCase();
    }
    if (shiftOn) {
      shiftOn = false;
      changeShift();
      changeCase();
    }
  });
}
function changeLanguage() {
  changeLetterLanguage();
  localStorage.setItem('userLanguage', lang);
}

if (lang === 'ru') {
  lang = 'en';
  changeLanguage();
}

function insertChar(simbol) {
  const arr = textarea.value.split('');
  arr.splice(cursorIndex, 0, simbol);
  textarea.value = arr.join('');
  cursorIndex += 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
}

keyboard.addEventListener('mousedown', (event) => {
  if (!event.target.classList.contains('keyboard__key')) {
    return;
  }
  if (event.target.id === 'CapsLock') {
    return;
  }
  event.target.classList.add('active');
  if (event.target.enBoard.speсification === functional) {
    return;
  }
  insertChar(event.target.innerHTML[0]);
});

keyboard.addEventListener('mouseup', (event) => {
  if (!event.target.classList.contains('keyboard__key')) {
    return;
  }
  if (event.target.id === 'CapsLock') {
    return;
  }
  event.target.classList.remove('active');
  if (event.target.enBoard.speсification === functional) {
    return;
  }
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});

const changeLangKey = document.getElementById('ChangeLang');
changeLangKey.addEventListener('click', changeLanguage);

const capslockKey = document.getElementById('CapsLock');
function capslockActive() {
  if (capslockKey.classList.contains('active')) {
    capslockKey.classList.remove('active');
  } else {
    capslockKey.classList.add('active');
  }
}
capslockKey.addEventListener('click', () => {
  capslockActive();
  changeCase();
});

const tabKey = document.getElementById('Tab');
tabKey.addEventListener('click', () => {
  insertChar('\t');
});

const backspaceKey = document.getElementById('Backspace');
backspaceKey.addEventListener('click', () => {
  const arr = textarea.value.split('');
  arr.splice(cursorIndex - 1, 1);
  textarea.value = arr.join('');
  cursorIndex = cursorIndex <= 0 ? 0 : cursorIndex - 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});

const enterKey = document.getElementById('Enter');
enterKey.addEventListener('click', () => {
  document.querySelector('.submit').click();
});

const shiftLeftKey = document.getElementById('ShiftLeft');
shiftLeftKey.addEventListener('click', changeShift);
const shiftRightKey = document.getElementById('ShiftRight');
shiftRightKey.addEventListener('click', changeShift);

const deleteKey = document.getElementById('Delete');
deleteKey.addEventListener('click', () => {
  const arr = textarea.value.split('');
  arr.splice(cursorIndex, 1);
  textarea.value = arr.join('');
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});

const arrowLeftKey = document.getElementById('ArrowLeft');
arrowLeftKey.addEventListener('click', () => {
  cursorIndex -= 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
  textarea.selectionStart = cursorIndex;
});

const arrowRightKey = document.getElementById('ArrowRight');
arrowRightKey.addEventListener('click', () => {
  cursorIndex += 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
  textarea.selectionStart = cursorIndex;
});
