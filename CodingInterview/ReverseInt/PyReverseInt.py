def reverseInt(num):
    if num < 0:
        return int(str(num)[:0:-1]) * -1
    return int(str(num)[::-1])
