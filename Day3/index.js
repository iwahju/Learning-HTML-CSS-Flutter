let n=8;
const fib = n => {
    if (n<=1) {
        return n;
    }
    let t =(fib(n-1) + fib (n-2))
    return t;
  };
  console.log(fib(n));



  function  fib(n) {
    n= window.prompt("Please enter a number: ");
    if (n<=1) {
        return n;
    }
    document.write(fib(n-1) + fib(n-2));
    return fib(n-1) + fib(n-2);
}