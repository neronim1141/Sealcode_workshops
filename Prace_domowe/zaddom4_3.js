function search(array,searchElement){
let index;
    for(let i=0;i<array.length;i++){
        if(array[i]==searchElement){
            index=i;
        }
    }
  
    console.log("index i: "+index+" element: "+array[index]);
}
let tab=[2,3,4,5,6,7];
search(tab,5);