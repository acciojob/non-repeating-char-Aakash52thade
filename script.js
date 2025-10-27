function firstNonRepeatedChar(str) {
 let map = new Map();
 
 for(let char of word){
   map.set(char, (map.get(char) || 0) + 1);
   
 }
 
 for(let char of word){
   if(map.get(char) === 1){
     return char;
   }
 }
}

// Please do not change the code below
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
