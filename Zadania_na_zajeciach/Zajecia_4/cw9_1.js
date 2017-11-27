
let rows=5;
let cols=5;

for(let i=1;i<=rows;i++){
    let col=[];
    for(let j=1;j<=cols;j++){

        if(i<=j)
           col.push(i*j)
        else
        col.push(0);
    }
    console.log(col);
  
} 
