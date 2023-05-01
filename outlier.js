// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)


function Integers(arr) {
    let evenN = arr.filter(el => el % 2 === 0);
    let oddN = arr.filter(el => el % 2 !== 0);
    if (evenN.length === 1) {
        console.log("N")
        return evenN;
    }
    else {
        console.log('B')
        return oddN;
    }
}

console.log(Integers([2, 4, 0, 100, 4, 11, 2602, 36]))