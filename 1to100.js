function sum(n){
    if(n===100) return n = 100;
    return n+sum(n+1)
}
n = 1;
var ans = sum(n)
console.log(ans);