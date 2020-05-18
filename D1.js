/*

1)
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

3)
Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

4)
 Write a JavaScript program to find the largest of three given integers.

5)
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

6) 

Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

7)
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

8)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

9)
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 

10)

Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Write a JavaScript to find the longest string from a given array of strings.

12)

Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Write a JavaScript program to find the index of the greatest element of a given array of integers

14)

Write a JavaScript program to get the largest even number from an array of integers.

15)

Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)

Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

17)

Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".

20)
Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).

*/

/*Ex 01*/

function sameSum(x, y) {
    if (x === y) {
        return 3 * (x + y);
    }
    else {
        return (x + y);
    }

}
console.log(sameSum(1, 2))
console.log(sameSum(2, 2))

/*Ex 02*/

function fifty(x, y) {
    if (x + y === 50) {
        return true;
    }
    else if (x === 50) {
        return true;
    }
    else if (y === 50) {
        return true;
    }
    else if (x + y !== 50) {
        return (x + y);
    }

}

console.log(fifty(25, 24))
console.log(fifty(25, 25))
console.log(fifty(50, 2))
console.log(fifty(2, 50))

/*Ex 03*/

function cutString(str) {
    let word = str.slice(1);
    return word
}

console.log(cutString("Hello"))

/*Ex 04*/

function max_of_three(x, y, z) {
    let val = 0;
    if (x > y) {
        val = x;
    } else {
        val = y;
    }
    if (z > val) {
        let val = z;
    }
    return val;
}

console.log(max_of_three(1, 0, 1));
console.log(max_of_three(0, -10, -20));
console.log(max_of_three(1000, 510, 440));

/*Ex 05*/

/*Ex 06*/

/*Ex 07*/

function cityName(place) {
    if (place.length >= 3 && ((place.substring(0, 3) == 'Los') || (place.substring(0, 3) == 'New'))) {
        return place;
    };
    return 'Blank';
}

console.log(cityName("New York"));
console.log(cityName("Los Santos"));
console.log(cityName("London"));

/*Ex 08*/

function interThree(number){
    return number[0] + number[1] + number[2];
}

console.log(interThree([10, 20, 30]))


/*Ex 09*/

function insideNum(number){
    if (number.indexOf(1) != -1 || number.indexOf(3) != -1){
        return true;
     } 
     else
     {
        return false;
     }
 }
 
 console.log(insideNum([1, 5]))
 console.log(insideNum([4, 5]))

 /*Ex 10*/

 function insideNo(number){
    if (number.indexOf(1) == -1 && number.indexOf(3) == -1){
        return true;
     } 
     else
     {
        return false;
     }
 }
 
 console.log(insideNo([1, 5]))
 console.log(insideNo([4, 5]))


