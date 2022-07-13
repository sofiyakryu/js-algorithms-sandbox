const findLongestSubstring = require('./index');

describe('Find longest substring test suite', () => {
    
    it('should return false if it is not a string', () => {
        //given
        const myNum = 1;
        //when
        const result = findLongestSubstring(myNum);
        //then
        expect(result).toBe('Incorrect input: input should be a string');
    });

    it('should return 0 if the string is empty', () => {
        //given
        const myString = '';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(0);
    });

    it('should return 1 if the string contains 1 character', () => {
        //given
        const myString = 'b';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(1);
    });

    it('should return 1 if the string contains all identic characters', () => {
        //given
        const myString = 'bbbb';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(1);
    });

    it('should return 3 if the string is hello', () => {
        //given
        const myString = 'hello';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(3);
    });

    it('should return 7 if the string is rithmschool', () => {
        //given
        const myString = 'rithmschool';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(7);
    });

    it('should return 6 if the string is thisisawesome', () => {
        //given
        const myString = 'thisisawesome';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(6);
    });

    it('should return 7 if the string is thecatinthehat', () => {
        //given
        const myString = 'thecatinthehat';
        //when
        const result = findLongestSubstring(myString);
        //then
        expect(result).toBe(7);
    });
});