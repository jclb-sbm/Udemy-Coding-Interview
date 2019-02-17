def isAnagram(strA, strB):
    strA = list(filter(lambda c: c.isalpha(), sorted(strA.lower())))
    strB = list(filter(lambda c: c.isalpha(), sorted(strB.lower())))
    return strA == strB

print(isAnagram("RAIL! SAFETY!", "fairy tales"))
