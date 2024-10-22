function f() {
    console.log('for - in ');
    for (let i in arguments) {
        console.log(`i ${i}`);
    }
    console.log('for - of ');
    for (let i of arguments) {
        console.log(`i ${i}`);
    }
    const arr = Array.from(arguments);
    console.log('arr - for - in');
    for (let i in arr) {
        console.log(`i ${i}`);
    }
    console.log('arr - for - of');
    for (let i of arr) {
        console.log(`i ${i}`);
    }

    // arguments.forEach((_) => console.log(`argument ${_}`));
}
arr = ['a', 'b', 'c'];
f(...arr);
