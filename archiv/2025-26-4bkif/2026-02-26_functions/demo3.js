> let a,b,c,d;
undefined
> a
81
> a = {"name": "Matija", "hair": "brown" }
{ name: "Matija", hair: "brown" }
> JSON.stringify(a)
'{"name":"Matija","hair":"brown"}'
> b = JSON.stringify(a)
'{"name":"Matija","hair":"brown"}'
> b
'{"name":"Matija","hair":"brown"}'
> JSON.parse(b)
{ name: "Matija", hair: "brown" }
> 
