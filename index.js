//Count the number of 3 consecutive Truths
function consecutiveTruths(input){
  let count=0;
  for(let i=0;i<input.length-2;i++){
    if(input[i] && input[i+1] && input[i+2]){
       count++;
      while(input[i]){
        i++;
      }
     
    }
  }
  return count;
}
console.log(consecutiveTruths([true, false, true, true, true, false, true, true])); // should return 1
console.log(consecutiveTruths([true, true, true, false, false, true, true, true])); // should return 2
console.log(consecutiveTruths([true, true, true, true, false, true, true, true])); // should return 2
