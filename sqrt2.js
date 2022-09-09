/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let left = 1;
    let right = x;
    while (left<=right){
        let mid = Math.floor((left+right)/2);
        if ((mid*mid)<=x && (mid+1)*(mid+1)>x) return mid
        if ((mid)*(mid)<x) left = mid + 1;
        else right = mid - 1;
        // console.log(mid);
    }
    return 0
};
x = 36;

var ans = mySqrt(x);
console.log(ans);

var a = 5<<2;
console.log('a',a)