function sumOfMultiple(startNum: number, limit: number): number {
    // Your code goes here
    const numbersArr: Array<number> = [];
    for (let i = startNum; i <= limit; i++) {
        if(i%3 ===0 || i%5===0) {
            numbersArr.push(i);
        }
    }
    const result: number = numbersArr.reduce((x, y) => x+y, 0);
    console.debug(result);
    return result;
}

sumOfMultiple(1, 1000);

module.exports = sumOfMultiple;