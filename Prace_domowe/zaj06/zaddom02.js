// pierwszy podpunkt
var element = document.getElementsByTagName("h1")[0];
if(element.hasAttribute('class')){
    element.removeAttribute('class');
}
// drugi punkt
var string_to_reverse="rotakifytnedi-ywon";
var new_id=""
for(let i=string_to_reverse.length-1;i>=0;i--){
    new_id += string_to_reverse[i];
}
if(element.hasAttribute('id')){
    element.id=new_id;
}
else{
    element.setAttribute('id',new_id);
}
// trzeci punkt
var new_link =document.createElement('a'); 
new_link.setAttribute('class','new-class');
new_link.setAttribute('href','http://sealcode.org');
new_link.setAttribute('target','blank');
new_link.textContent ="sealcode";
var element2 = document.getElementsByClassName("wrapper")[0];
element2.appendChild(new_link); 
// czwart punkt
var lista = document.getElementsByTagName('ul')[0];
list_items= lista.getElementsByTagName('li');
for(let i=list_items.length-1;i>=0;i--){// usuwamy wczesniejsze lemenenty
    lista.removeChild(list_items[i]);
}
for(let i=1;i<=30;i++){// tworzymy i dodajemy nowe
    var new_list_item = document.createElement('li');
    new_list_item.setAttribute('id',"new"+i);
    new_list_item.textContent="Nowa treść " +i;
    lista.appendChild(new_list_item);
}
// piaty punkty
var element3 = document.getElementsByTagName('p')[0];
element3.textContent="Zmieniona treść akapitu.";