// Problem 1: Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
    }
    console.log(reverseString("hello"));


// Problem 2: Count Vowels in a String

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for ( let char of str ) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("programming"));

// Problem 3: Check for Palindrome

function isPalindrome(str) {
    let reserved = str.split("").reverse().join("");
    return str === reserved;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Problem 4: Find the Maximum Number

function findMax(array) {
    return Math.max(...array);
}
console.log(findMax ([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array

function removeDuplicates(array) {
    return [...new Set(array)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array

function sumArray(array) {
    return array.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array

function findEvens(array) {
    return array.filter( num => num % 2 === 0 );
}
console.log(findEvens([1, 2, 3, 4, 5, 6]));


// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
    return str.split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}
console.log(capitalizeWords("hello world"));


// Problem 9: Find the Factorial of a Number

function factorial(n) {
    let result = 1;
    for ( let i = 1; i <= n; i++ ) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));


// Problem 10: PingPong Challenge

function pingPong() {
    for ( let i = 1; i <= 20; i++ ) {
        let output = "";
        if ( i % 3 === 0 ) output += "Ping";
        if ( i % 5 === 0 ) output += "Pong";
        console.log( output || i );
    }
}
pingPong();

