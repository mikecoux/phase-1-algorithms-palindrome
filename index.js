function isPalindrome(word) {
  // Write your algorithm here
  arr = Array.from(word)
  reverse = arr.reverse().join('')
  return word === reverse
}

console.log(isPalindrome('hey'))

/* 
  Add your pseudocode here
  pass a string into isPalindrome()
  use the .reverse() method to return a boolean
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hey"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
