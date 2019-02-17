function createCharMap(str)
{
    chars = {};
    for (let c of str) {
        chars[c] = chars[c] + 1 || 1;
    }
    return chars;
}

function maxChar(str)
{
    maxCount = 0;
    max = '';
    charMap = createCharMap(str);

    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            max = char;
        }
    }

    return max;
}
