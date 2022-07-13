const findLongestSubstring = (str) => {
    if (typeof str == 'string') { 
        
        let longest = 0;
        let seen = {};
        let start = 0;

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (seen[char]) {
                start = Math.max(start, seen[char]);
            }
                // index - beginning of substring + 1 (to include current in count)
                longest = Math.max(longest, i - start + 1);
                // store the index of the next char so as to not double count
                seen[char] = i + 1;
            }
            return longest;

    } else {
        return 'Incorrect input: input should be a string';
    }
}

console.log(findLongestSubstring('hello')); // 3
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('bbbbb')); // 1
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
module.exports = findLongestSubstring;