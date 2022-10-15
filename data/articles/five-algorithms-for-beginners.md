---
title: 'Five Easy Algorithms for Beginners'
date: '15-10-2022'
excerpt: 'Start simple with Bubble sort, Insertion sort, Linear search, Primality Test and Fibonacci numbers'
tags: ['algorithms']
---

For most beginner developers, algorithms are a source of a lot of anxiety. But as with everything in this field, I have found that the best strategy is: *start simple.* So here is a list of five algorithms you can learn in an afternoon and impress your non-programmer friends.

## What is an algorithm?

An `algorithm` is a finite sequence of instructions, typically used to solve a class of specific problems or to perform a computation.

Learning resourses: [GeeksForGeeks](https://www.geeksforgeeks.org/fundamentals-of-algorithms/), [Programiz](https://www.programiz.com/dsa), [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)

## Bubble Sort

Learning resourses: [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/), [StackOverflow](https://stackoverflow.com/questions/37817334/javascript-bubble-sort)

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.

```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSort([2, 1, -1, 8, 3, 7, 3]));
```

## Insertion Sort

Learning resourses: [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort), [StackOverflow](https://stackoverflow.com/questions/33530928/insertion-sort-algorithm-on-javascript)

Simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons.

```js
function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let previousIndex = i - 1;
        let temporaryNumber = nums[i];

        while (previousIndex >= 0 && nums[previousIndex] > temporaryNumber) {
            nums[previousIndex + 1] = nums[previousIndex];
            previousIndex--;
        }

        nums[previousIndex + 1] = temporaryNumber;
    }

    return nums;
}
console.log(insertionSort([2, -1, 2, 4, 1]));
```

### What is the Difference Between Bubble Sort and Insertion Sort?

In insertion sort elements are bubbled into the sorted section, while in bubble sort the maximums are bubbled out of the unsorted section.[1](https://stackoverflow.com/questions/17270628/insertion-sort-vs-bubble-sort-algorithms)

Learning resourses: [Bubble Sort vs Insertion Sort](https://realtoughcandy.com/bubble-sort-vs-insertion-sort-whats-the-difference/), [StackOverflow](https://stackoverflow.com/questions/17270628/insertion-sort-vs-bubble-sort-algorithms)

## Linear Search Algorithm

Learning resourses: [GeeksForGeeks](https://www.geeksforgeeks.org/linear-search/)

Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

```js
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == x) {
            return i;
        }
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 4));
```

## Primality Test

Learning resourses: [Wikipedia](https://en.wikipedia.org/wiki/Primality_test),  [StackOverflow - algorithm](https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript), [StackOverflow - Why square root?](https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is)

A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers.

```js
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(-1)); // false
console.log(isPrime(6)); // false
console.log(isPrime(11)); // true
```

## Fibonacci Number Program

Learning resourses: [GeeksForGeeks](https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/)

The Fibonacci numbers form a sequence such that each number is the sum of the two preceding ones, starting from 0 and 1.

How to print the n-th Fibonacci Number:

```js
function fibonacci(n) {
    if (n < 2) {
        return n;
    }

    let firstNum = 0;
    let secondNum = 1;

    for (let i = 2; i <= n; i++) {
        let sumOfTheTwo = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sumOfTheTwo;
    }

    return secondNum;
}
console.log(fibonacci(5)) // 8
```

## Further Reading: Recursion

Learning resourses: [Wikipedia](https://en.wikipedia.org/wiki/Recursion_(computer_science)), [Programiz](https://www.programiz.com/javascript/recursion), [Web Dev Simplified](https://www.youtube.com/watch?v=6oDQaB2one8&t=30s&ab_channel=WebDevSimplified),  [FreeCodeCamp Lecture](https://www.youtube.com/watch?v=IJDJ0kBx2LM&ab_channel=freeCodeCamp.org)

In computer science, recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem. Recursion solves such recursive problems by using functions that call themselves from within their own code.

So you can rewrite the above `fibonacci` function as:

```js
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(5)) // 8
```
