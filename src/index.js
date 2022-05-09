const keyboardCharEn = [ 
                         ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], 
                         ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL'],
                         ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",  'Enter'],
                         ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
                         ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', 'Left', 'Down', 'Right']
                       ];

const keyboardCharEnBig = [ 
                            ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], 
                            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'DEL'],
                            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',  'Enter'],
                            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
                            ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', 'Left', 'Down', 'Right']
                          ];

const keyboardCharRu = [ 
                          ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], 
                          ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'DEL'],
                          ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э",  'Enter'],
                          ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'],
                          ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', 'Left', 'Down', 'Right']
                        ];
 
const keyboardCharRuBig = [ 
                             ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], 
                             ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'DEL'],
                             ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',  'Enter'],
                             ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift'],
                             ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', 'Left', 'Down', 'Right']
                          ];
import './style.scss';

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

function addRow(i){
  const ROW = document.createElement('div');
  KEYBOARD.append(ROW);
  ROW.classList.add('buttons-row');
  keyboardCharEn[i].forEach((char) => {
    const BTN = document.createElement('div');
    ROW.append(BTN);
    BTN.innerText = char;
  })
}

for(let i = 0; i < 5; ++i) {
  addRow(i);
}
