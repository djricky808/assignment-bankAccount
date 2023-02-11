// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  var allNames = [];
  var namesWithA = [];
  var namesWithoutA = [];
  for (var i = 0; i < array.length; i++) {
    var clientLetters = [];
    var hasTheLetterA = false;
    for (let x in array[i]) {
      clientLetters.push(array[i][x]);
    }
    for (let y = 0; y < clientLetters.length; y++) {
      if (clientLetters[y] == 'a' || clientLetters[y] == 'A') {
        var hasTheLetterA = true;
      }
    }
      if (hasTheLetterA) {
        namesWithA.push(array[i]);
      } else {
        namesWithoutA.push(array[i]);
      }
    
  }
  allNames.push(namesWithA);
  allNames.push(namesWithoutA);

  return allNames;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function