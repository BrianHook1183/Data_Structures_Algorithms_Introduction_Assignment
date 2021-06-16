# DSA Introduction: Assignment - Split Sum

## Instructions

You have been asked to help organize tours for groups of school children to view the Butterfly Pavilion at the museum. To your surprise the exhibit is quite popular and many groups have registered an interest in the tour.

You decide that you will have to hold the tours across two days to accommodate the groups. You need to select a number of groups to visit on the first day and a number of groups to visit on the second day such that each day has roughly the same number of visitors.

You have the sizes of each group recorded in an array. You wish to select the point at which to split the array so that the difference between the sums of each part of the array is minimum.

For example, suppose the following array of group sizes were given.

```
[4, 12, 17, 8, 13, 24, 9]
```

If you split at index 2, the first part of the array contains 4, 12, and 17 giving the sum 33. The second part of the array contains the numbers 8, 13, 24, and 9 giving the sum 54 giving the sum 54. The difference is 54 - 33 = 21.

However, if you split at index 3, the first part of the array contains 4, 12, 17, and 8 giving the sum 41 and the second part of the array contains 13, 24, and 9 giving the sum 46. The difference here is 46 - 41 = 5.

The objective is to find the smallest possible difference over all splits.

## Tasks

You are given two different algorithms that solve the Split Sum problem. For each of these algorithms implement them in JavaScript and observe their behavior as they run.

## Algorithm 1

The following algorithm is written in pseudocode. Your task is to implement it in JavaScript.

This algorithm works by first finding the sum of the whole array then iterating through the array. At each position i in the array the sum from 0 to i is calculated from the total sum and the sum from i + 1 to the end of the array is calculated from the total sum. These two sums are compared.

```
function splitSum1
  // accepts tours - an array of group sizes

  calculate the sum of all numbers in the tours array and assign it to a variable named total
  initialize a variable named preSum to the value 0
  initialize a variable named postSum to the value of total
  initialize a variable named smallest to the largest posible number

  for i = 0 to the length of tours - 1 do:
    set preSum to the sum of preSum and tours[i]
    set postSum to postSum - tours[i]
    find the absolute difference between preSum and postSum

    if the difference is less than smallest then
      set smallest to the difference

  return smallest
```

Write this algorithm in the file named `src/splitSum.js`.

## Algorithm 2

The following algorithm is written in pseudocode. Your task is to implement it in JavaScript.

This algorithm once again iterates through the array of numbers. At each position i in the array the sum of the numbers from position 0 to i is calculated and the sum of the numbers from i + 1 to the end of the array is calculated. The difference is found and compared to the smallest number so far.

```
function splitSum2
  // accepts tours - an array of group sizes

  initialize a variable named smallest to the largest posible number
  for k = 0 to the length of the tours array - 1 do:
    calculate the sum of numbers from index 0 to index i of tours and assign to a variable named preSum
    calculate the sum of the numbers from index i + 1 to the end of tours and assign to a variable named postSum
    find the absolute difference between preSum and postSum

    if the difference is less than smallest then
      set smallest to the difference

  return smallest
```

Write this algorithm in the file named `src/splitSum.js`
