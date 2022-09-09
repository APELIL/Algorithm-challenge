function strStr(h,n){
    long = h.length;
    short = n.length;
    // method1: using substr
    // for (let i = 0; i<long; i++){
    //     if(h[i]===n[0]){
    //         if(h.substr(i,short)===n){
    //             console.log(i);
    //             return i;
    //         }
    //     }
    // }
    // console.log(-1)
    // return -1;
    // method 2: double index 
    let i = 0;
    let j = 0;
    while (i<long){
        if(h[i]===n[j]){
            i++;
            j++;
        }
        else{
            i = i - j + 1;//you can run test mississippi
            j=0;
            
        }
        if(j===short){
            console.log(i-j);
            return i-j;
        }
    }
    console.log(-1)
    return -1 
}
// h = 'hello';
// n = 'll';
h = "mississippi";
n = "issip";
strStr(h,n);