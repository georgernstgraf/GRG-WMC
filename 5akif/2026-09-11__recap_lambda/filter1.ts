const myarray = [1, 7, 4, 2, 8, 3, 13, 11];
let filterCount = 0;

// WARNUNG: not pure
function isEven(x: number) {
    filterCount++;
    return (x % 2 === 0);
}

const evenNumbers = myarray.filter(isEven);
console.log(`Even Numbers in Array: ${evenNumbers}`);
console.log(`Filter was called ${filterCount} times.`);

let y: number | boolean = 7;
y = isEven(12);
console.log(`is Y even? -> ${y}`);
