function chunkArrayObvious(arr, size)
{
    const chunkedArr = [];
    for (let elem of arr)
    {
        const last = chunkedArr[chunkedArr.length - 1];
        if (!last || last.length === size)
        {
            chunkedArr.push([elem]);
        }
        else
        {
            last.push(elem);
        }
    }

    return chunkedArr;
}

function chunkArray(arr, size)
{
    chunkedArr = [];
    for (let i = 0; i < arr.length; i+=size)
    {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
}


console.log(chunkArray([1,2,3,4,5], 2));
