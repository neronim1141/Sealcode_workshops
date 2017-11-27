function binary(liczba){
   
    if(liczba<0){
        console.log("liczba mniejsza od zera!");
        return;
    }
    else{
        binTab=[];
    while( liczba > 0){
        bit = liczba % 2
        liczba = Math.floor(liczba/2);
        binTab.push(bit)
       
    }
    binRes="";
    for(let i=binTab.length-1;i>=0;i--){
         binRes+=binTab[i];
     }
     return binRes;
    }
}
console.log(binary(23));