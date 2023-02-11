// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  var allWithdrawals = [];
  var totalWithdrawals = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].withdrawals == undefined) {
      totalWithdrawals = 0;
    } else {
      for (var x = 0; x < array[i].withdrawals.length; x++) {
        totalWithdrawals += array[i].withdrawals[x];
      }
    }
    allWithdrawals.push(totalWithdrawals);
  }


  return allWithdrawals;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function