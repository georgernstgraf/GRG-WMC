outerLoop:
for (let i = 0; i < 5; i++) {
    console.log("Outer loop iteration: " + i);
    innerLoop:
    for (let j = 0; j < 5; j++) {
        console.log("  Inner loop iteration: " + j);
        if (j === 2) {
            console.log("    Breaking out of inner loop");
            break innerLoop; // breaks out of the inner loop
        }
        if (i === 3) {
            console.log("    Breaking out of outer loop");
            break outerLoop; // breaks out of the outer loop
        }
        if (j === 1) {
            console.log("    Continuing to next iteration of inner loop");
            continue innerLoop; // continues to the next iteration of the inner loop
        }
        if (i === 2) {
            console.log("    Continuing to next iteration of outer loop");
            continue outerLoop; // continues to the next iteration of the outer loop
        }
    }
}
