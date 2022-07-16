/*
- create a piramid with simbol # as the params
- each time it called it will be doubled, trippled and so on based on how many the n is
- there is space between so the # sign will always be in mud
- the total space is equal to the number of # is called + 2
- " ", "#", " "


example 
input
n = 3
sign = "#"
space = " "

output
   #
  ##
 ### 

algorithm
- we will times the # with i as the i will be keep
  incrementing until it meets the total number of n
  ( i * (" ", "#", " ") )

  so it will stop if i == n

*/

const stairCase = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padStart(n));
  }
};

console.log(stairCase(6));
