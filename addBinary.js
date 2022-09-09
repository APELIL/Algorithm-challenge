var addBinary = function(a, b) {
    let add = 0
    let sum = []
    let num1 = 0;
    let num2 = 0;
    // console.log(b[-1]);
    for(let i = a.length -1, j = b.length -1; i >= 0 || j >= 0; i--, j--) {
        num1 = +a[i] || 0
        num2 = +b[j] || 0
        sum.unshift(num1 ^ num2 ^ add)
        add = num1 + num2 + add > 1 ? 1 : 0
        
    }
    console.log(num1);
    if (add === 1) sum.unshift(1)
    console.log('x',sum);
    return sum.join('')
};

a = '1010';
b = '1';
addBinary(a,b);