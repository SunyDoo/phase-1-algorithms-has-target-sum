array = [2, 4, 6, 8, 10, 12]

function hasTargetSum(array, target) {
  //iterate through array
  for(let a= 0; a< array.length; a++){
    //for each number, subtract from target and set the difference to a variable
    let match = target-array[a]
    //iterate through rest of array to find number that is equal to match variable
    for (let b=a+1; b< array.length; b++){
      if (array[b]===match) return true
    }     
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  array variable with numbers inside
  iterate through each number and subtract each number from target
  if the difference is found in the array, return true
  else, return false
*/

/*
  Add written explanation of your solution here
  first set an array with numbers inside 
  function returns true if any pair of the numbers in the array return true when passed with the target number otherwise returns false 
  hasTargetSum contains method to check sum of every possible pair of numbers
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
