> const outer = "outer scope";
undefined
> function f(x) {
    console.log(outer);
    return x*x;
}
undefined
> let y = f(3)
outer scope
undefined
> y = f(5)
outer scope
25
> y
25
> let a,b,c,d;
undefined
> y = f(3)
outer scope
9
> a
undefined
> b
undefined
> c
undefined
> d
undefined
> a = b = c = d = f(9);
outer scope
81
> a
81
> b
81
> c
81
> d
81
> 
