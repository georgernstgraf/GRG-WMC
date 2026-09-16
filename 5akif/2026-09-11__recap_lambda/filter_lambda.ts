const myarray = [1, 7, 4, 2, 8, 3, 13, 11];

let evenNumbers = myarray.filter(x => x % 2 === 0);
evenNumbers = myarray.filter((x) => x % 2 === 0);
evenNumbers = myarray.filter((x) => { return x % 2 === 0; });

//    Parameter: x
//    => return statement
//    x %2 === 0 return value

console.log(`Even Numbers in Array: ${evenNumbers}`);
