function reverseInt(num)
{
    const reversedNum = num.toString().split('').reverse().join('');
    return parseInt(reversedNum) * Math.sign(num);
}