const myarray = [1, 7, 4, 2, 8, 3, 13, 11];

let filterCount = 0;

// WARNUNG: not pure -> schlechter conding stil!!
function isEven(x: number) {
    filterCount++;
    return (x % 2 === 0);
}

function isOdd(x: number) {
    filterCount++;
    return (x % 2 !== 0);
}

const evenNumbers = myarray.filter(isEven);
console.log(`Even Numbers in Array: ${evenNumbers}`);
console.log(`Filtering even numbers was called ${filterCount} times.`);

const oddNumbers = myarray.filter(isOdd);
console.log(`Odd Numbers in Array: ${oddNumbers}`);
console.log(`Filtering odd numbers was called ${filterCount} times.`);

let y: number | boolean = 7;
y = isEven(12);
console.log(`is Y even? -> ${y}`);
