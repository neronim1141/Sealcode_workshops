var lista = document.getElementsByTagName('ul')[0];
list_items= lista.getElementsByTagName('li');

for(let i=list_items.length-1;i>=0;i--){
    lista.removeChild(list_items[i]);
}

var list_parent = lista.parentElement;
list_parent.removeChild(lista);
