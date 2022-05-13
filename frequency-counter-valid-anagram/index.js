//Given twi strings, write a function to determine if the 
//second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by 
//rearranging the letters of another, such as cinema, formed from iceman.

//All inputs are single words, all lower case and only letters (no other symbols)

const validAnagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }

    let frequencyCounterString1 = {};
    let frequencyCounterString2 = {};

    for (let value of string1) {
        frequencyCounterString1[value] = (frequencyCounterString1[value] || 0) + 1;
    }

    for (let value of string2) {
        frequencyCounterString2[value] = (frequencyCounterString2[value] || 0) + 1;
    }

    for (let key in frequencyCounterString1) {
        if (!(key in frequencyCounterString2)) {
            return false;
        }
        if (frequencyCounterString1[key] !== frequencyCounterString2[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram('iceman', 'cinema'));
console.log(validAnagram('zaa', 'azz'));