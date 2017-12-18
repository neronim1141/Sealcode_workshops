// Utworzenie nowego elementu i przechowywanie go w zmiennej.
var newElement = document.createElement('li');

// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.
var newText = document.createTextNode('Punkt 5.');

newElement.setAttribute('id','li-5');
// Dołączenie nowego węzła tekstowego do nowego elementu.
newElement.appendChild(newText);

// Wyszukanie miejsca, w którym powinien być dodany nowy element.
var position = document.getElementsByTagName('ul')[0];

// Wstawienie nowego elementu we wskazanym miejscu.
position.appendChild(newElement);