//1. Write a program to find big number of given two numbers
function findBiggerNumber(a, b) {
    return Math.max(a, b);
}

// Example usage
console.log("Bigger number:", findBiggerNumber(10, 20));


//2. Write a program to find big one in given three numbers
function findBiggestNumber(a, b, c) {
    return Math.max(a, b, c);
}

// Example usage
console.log("Biggest number:", findBiggestNumber(10, 20, 30));


//3. Write a function to find the factors of a given number
function findFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Example usage
console.log("Factors of 12:", findFactors(12));


//4. Write a function to check given number is prime or not
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log("Is 17 prime?", isPrime(17));


//5. Write a function to print even factors of given number
function printEvenFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Example usage
console.log("Even factors of 20:", printEvenFactors(20));


//6.Write a function to receive a number as arg and return sum of its digits
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Example usage
console.log("Sum of digits of 1234:", sumOfDigits(1234));
