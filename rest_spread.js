// Original Code:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

// Refractored version
function filterOutOddsArrow(...args) {
    return args.filter((num) => num % 2 === 0);
}

// findMin
// @param some set of values
// @returns smallest value from the set of values
function findMin(...nums) {
    return nums.reduce((acc, currVal) => {
        if (currVal < acc) acc = currVal;
        return acc;
    }, Number.POSITIVE_INFINITY);
}

// mergeObjects
// @param takes two or more objects
// @returns a single object with all objects involved
function mergeObjects(...objs) {
    return objs.reduce((acc, currVal) => {
        return { ...acc, ...currVal };
    }, {})
}

// doubleAndReturnArgs
// @param takes an array and some n number of arguments
// @returns a single array
// Function should return the original array items untouched adding the additional items to the array while also doubling their values.
function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map((val) => val * 2)];
}

// removeRandom
// @params takes an array
// @returns a new array
// takes an array and removes an item at random and returns the new array leaving the original array untouched.
const removeRandom = (item) => {
    let rand = Math.floor(Math.random() * item.length);
    return [...item.slice(0, rand), ...item.slice(rand + 1)];
};

// extend
// tldr: mergeObjects but for arrays
const extend = (...arrs) => {
    return arrs.reduce((acc, currVal) => {
        return [...acc, ...currVal];
    }, []);
};

// addKeyVal
// @params takes an obj, a property to add and it's value
// @returns a new obj
// Returns a new object with all the keys and values from obj and the new key/value pair. 
const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
};

// removeKey
// @params takes obj and key to remove from the object
// @returns new object without the key
// Return a new object with a key removed.
const removeKey = (obj, key) => {
    newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

// combine
// @params any number of objects
// @returns a new object 
// Combines objects.
const combine = (...objs) => {
    return objs.reduce((acc, currVal) => {
        return {...acc, ...currVal};
    }, {})
};

// update
// @params object
// returns new not the same object: object with updated key value pair
// does what it does
const update = (obj, key, val) => {
    newObj = {...obj};
    newObj[key] = val;
    return newObj;
};