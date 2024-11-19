var word = ['apple', 'banana', 'cherry', 'blueberry']; 

var a=word[0].length
var b=word[1].length
var c=word[2].length
var d=word[3].length

if(a>b && a>c && a>d){
    console.log(word[0]);
    
}else if(b>a && b>c && b>d){
    console.log(word[1]);
    
}else if(c>a && c>b && c>d){
    console.log(word[2]);
    
}else if(d>a && d>b && d>c){
    console.log(word[3]);
    
}