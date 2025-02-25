const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const data = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['C', '0', '=', '+']
];
let result = ''; 
data.forEach((row) => {
  row.forEach((btnData) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = btnData;
    if (btnData === '='){ btn.classList.add('equal');}
    if (btnData === 'C') {btn.classList.add('clear');}
    if (['+', '-', '*', '/'].includes(btnData)) {btn.classList.add('operator');}
    if (btnData === '0') {btn.classList.add('zero');}
   
    btn.addEventListener('click', () => clickHandler(btnData));
    buttons.append(btn);
  });
});
function clickHandler(btnData) {
  if (btnData === 'C') {
    result = '';
  } else if (btnData === '=') {
    try {
      result = eval(result).toString(); 
    } catch (e) {
      result = 'Error';
     }
  } else {
    result += btnData; 
  }
  display.innerText = result; 
}

