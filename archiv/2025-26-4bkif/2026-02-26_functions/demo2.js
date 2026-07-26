function f(x) {
    console.log("f called with " + x);
    let kleiner = false;
    if (x < 0) {
        const kleiner = true;
        // kleiner = true; // würde outer scope verändern
    }
    console.log("kleiner is " + kleiner);
    return x * x;
}

f(-5);
