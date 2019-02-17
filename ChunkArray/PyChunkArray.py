def chunkArray(arr, size):
    return [arr[i: i + size] for i in range(0, len(arr), size)]


def chunks(l, n):
    """Yield successive n-sized chunks from l."""
    for i in range(0, len(l), n):
        yield l[i:i + n]
