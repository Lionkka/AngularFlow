const arrayOfString: string[] = ['1','2','3','4', 'hello'];
const arrayOfNumbers: Array<number> = [1,2,3,4,5,6];

arrayOfString.find((value) => {
    return !Number.isNaN(parseInt(value, 10));
});

arrayOfNumbers.reduce((reducer, val) => {
    return reducer += val;
});

const tuple: [string, number] = ['Nick', 12, 'Alex', 'Jimmy',12,1,2,3,4,5];
const incorrectTupple: [number, string] = ['Jim', 12];

tuple.slice(2);