doSomething()
  .then((url) =>
    // Missing `return` keyword in front of fetch(url).
    fetch(url);
  )
  .then((result) => {
    // result is undefined, because nothing is returned from the previous
    // handler. There's no way to know the return value of the fetch()
    // call anymore, or whether it succeeded at all.
  });
