function isAnagram(strA, strB)
{
    sortedAlphaStrA = strA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    sortedAlphaStrB = strB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    return sortedAlphaStrA == sortedAlphaStrB;
}