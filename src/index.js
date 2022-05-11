const keyboardCharEn = [ 
                         ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], 
                         ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL'],
                         ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",  'Enter'],
                         ['⇧ Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', '⇧'],
                         ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⮜', '▼', '⮞']
                       ];

const keyboardCharEnBig = [ 
                            ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], 
                            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'DEL'],
                            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',  'Enter'],
                            ['⇧ Shift', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', '⇧'],
                            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⮜', '▼', '⮞']
                          ];

const keyboardCharRu = [ 
                          ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], 
                          ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'DEL'],
                          ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э",  'Enter'],
                          ['⇧ Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', '⇧'],
                          ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⮜', '▼', '⮞']
                        ];
 
const keyboardCharRuBig = [ 
                             ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], 
                             ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'DEL'],
                             ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',  'Enter'],
                             ['⇧ Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', '⇧'],
                             ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⮜', '▼', '⮞']
                          ];
import './style.scss';

const controls = ['`', '~', 'Backspace', 'Tab', 'DEL','Caps Lock', 'Enter', '⇧ Shift', '▲', 'Ctrl' , 'Win', 'Alt', ' ', '⮜', '▼', '⮞', '⇧'];

let currentLang = 'eng';
let size = 'Lower';
const WRAPPER = document.createElement('div');
const TEXTAREA = document.createElement('textarea');
const BODY = document.querySelector('body');
const KEYBOARD = document.createElement('div');
BODY.append(WRAPPER);
WRAPPER.append(TEXTAREA);
WRAPPER.append(KEYBOARD);
WRAPPER.classList.add('wrapper');
TEXTAREA.classList.add('text-area');
KEYBOARD.classList.add('buttons-wrap');

function addRow(lang, i, size){
  let letterArray;
  if (lang === 'eng') {
    if (size === 'Lower') {
      letterArray = keyboardCharEn;
    } else {
      letterArray = keyboardCharEnBig;
    }
    
  } else {
    if (size === 'Lower'){
      letterArray = keyboardCharRu;
    } else {
      letterArray = keyboardCharRuBig;
    }
    
  }
  const ROW = document.createElement('div');
  KEYBOARD.append(ROW);
  ROW.classList.add('buttons-row');
  letterArray[i].forEach((char) => {
    const BTN = document.createElement('div');
    ROW.append(BTN);
    BTN.innerText = char;
    BTN.classList.add('button');
    if (controls.includes(char)) {
      BTN.classList.add('button-manage');
    } else {
      BTN.classList.add('button-text');
    }
    switch (char) {
      case '`':
      case '~':
      case 'DEL':
      case 'Alt':
      case 'Win':
      case '▲':
      case '⮜':
      case '▼':
      case '⮞':
      case '⇧':
        BTN.classList.add('tilda');
        break;
      case 'Backspace':
      case 'Caps Lock':      
        BTN.classList.add('backspace');
        break;
      case '⇧ Shift':
        BTN.classList.add('shift');
        break;
      case 'Tab':
        BTN.classList.add('tab');
        break;
      case 'Enter':
        BTN.classList.add('enter');
        break;
      case 'Ctrl':
        BTN.classList.add('ctrl');
        break;
      case ' ':
          BTN.classList.add('space');
          break;

    }    
  })
  
}
function addKeyboard(){
  for(let i = 0; i < 5; ++i) {
    addRow(currentLang, i, 'Lower');
  }  
}

addKeyboard();
const SHIFT = document.querySelector('.shift');
SHIFT.addEventListener('click', Shift);
function Shift() {
      KEYBOARD.innerHTML = '';            
      for(let i = 0; i < 5; ++i) {
      addRow(currentLang, i, 'Upper');
      }
      SHIFT.classList.add('button-manage_active');
      SHIFT.removeEventListener('click', Shift);
      SHIFT.addEventListener('click', UnShift);
}

function UnShift() {
  KEYBOARD.innerHTML = '';  
  for(let i = 0; i < 5; ++i) {
  addRow(currentLang, i, 'Lower');
  }
  SHIFT.classList.remove('button-manage_active');      
  SHIFT.removeEventListener('click', UnShift);
  SHIFT.addEventListener('click', Shift);
}
