/**
 * 
 * Write a function called collatz that receives a number and returns the number of steps it takes to reach 1.
 * The Collatz Conjecture (also called 3x + 1 problem) is the following:
 * 
 * Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1.
 * Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
 */

 /**
  * 
  * 19  (impar)
  *     19 * 3 + 1
  * 
  * 
  */

  function collatz(n) {
      let aux;

      if (n == 1) {
          return 1;
      }

      if ( n % 2 == 0) {
          aux = n / 2;
      } else {
          aux = (3 * n) + 1;
      }

      return 1 + collatz(aux);
  }

  console.log(collatz(12)); // 9
console.log(collatz(19)); // 21
console.log(collatz(27)); // 111
console.log(collatz(837799)); // 524