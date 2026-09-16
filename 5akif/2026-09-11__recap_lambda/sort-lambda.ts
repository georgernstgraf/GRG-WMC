const myarray = [1, 7, 4, 2, 8, 3, 13, 11];

let sorted= myarray.sort((a,b) => a-b);
// reversed:
sorted = myarray.sort((a, b) => { return b - a; });

console.log(`Sortiert: ${sorted}`);
