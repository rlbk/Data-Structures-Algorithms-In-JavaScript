/** 
 -------- THEORY
**** BIG O NOTATION
     Big O notation helps us understand how long an algorithm will take to run  or how much memory it will need as the amount of data it handles grows.

**** O(n)
     Signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data (n).

     In other words, as the number of items in the input data increases, the time it takes for the algorithm to run increases correspondingly.

     Example : Imagine you have a list of groceries. To find a specific item (like milk), you might need to scan through the entire list. If the list has 5 items, it'll take a relatively short time. But if the list has 500 items, it'll take considerably longer. This is the essence of linear time complexity.


 */

const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

// O(n)
const searchFormItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found : ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found : ${item} 2`);
    }
  }

  // here : n + n = 2n -> O(2n)
  // Drop the constant so it becomes O(2n) => O(n)
};

searchFormItem("flour");

/**
**** O(1)
     O(1) aka constant time, signifies that the execution time of an algorithm remains constant regardless of  the input size.

     Example : Imagine you have a box filled with items, and you know exactly where each item is located. To get a specific item, you go  directly to its location, taking the same amount of time irrespective of how many items are in the box.
 */

const numbers = [1, 2, 3, 4, 5];

// O(n)
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));

/**
**** O(n^2)
     Indicates that the algorithm's execution time grows quadratically with the size of the input data (represented by n)

     Example : Imagine you have a box of items and want to compare each item with every other item to find specific pairs. As the number of item (n) increases, the number of comparisons (n^2) grows much faster.
 */

// O(n^2)
function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Paris: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("-----------", q);
  }
  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term ans we're only left with O(n^2)
  // This way, we simplify our big-O
}

const nums = [1, 2, 3, 4];
findPairs(nums);

/**
**** O(log n)
     O(log n) time complexity refers to an algorithm's runtime that grows logarithmically with the size of the input (represented by n). In simpler terms, as the input size increases, the time it takes for the algorithm to run  increases slowly.

     Example : Imagine you have a box of items and want to compare each item with every other item to find specific pairs. As the number of item (n) increases, the number of comparisons (n^2) grows much faster.
 */
