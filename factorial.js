//descriptiop: 5*4*3*2*1
var factorial = function(num){
    if(num===1) return num=1;
    
    return num*factorial(num-1)
}
var ans = factorial(5);
console.log(ans)