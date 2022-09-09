function palindrome(num){
    if(num<0||num%10==0&&num!=0){
        return false;
    }
    let revertedNumber = 0;
    while(num>revertedNumber){
        revertedNumber = revertedNumber*10 + num%10;//3,32
        num = Math.floor(num);//12 1 
    }
    return num===revertedNumber || num==Math.floor(revertedNumber/10)
}
num = 123;
palindrome(num);