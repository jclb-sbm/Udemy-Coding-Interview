function reverse(str)
{
    return str.split('').reverse().join('');
}

function reverse_for_of(str)
{
    var reversed = "";
    for (c of str)
    {
        reversed = c + reversed;
    }
    return reversed;
}

function reverse_reduce(str)
{
    return str.split('').reduce((rev, char) => char + rev, "");
}