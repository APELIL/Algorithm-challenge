function versionValue(num){
    let strInput = String(num);
    const length = strInput.length
    let map = new Map();
    for (let i = 0; i<length; i++){
            let leftCount = Number(strInput[i]);
            let rightCount = Number(strInput[i]);
            let rightSum = 0;
            let leftSum = 0;
            let total = 0;
            //right 
            if (rightCount>length-i-1){
                rightCount = length-i-1;
            }
            //start to get version number
            
            for (let j = 0; j<rightCount;j++){
                rightSum += Number(strInput[i+j+1]) 
            }
            // console.log('current num '+ strInput[i] + 'right sum '+ rightSum)
            // console.log('right '+ rightCount);
            // left: when i = 0, it means that there is no number in the left 
            // when i = 1, it means that there is one number in the left
            if (leftCount>i){
                leftCount = i;
            } 
            if(i>0&&leftCount!=0){
                for (let j = 0; j<leftCount;j++){
                    leftSum+=Number(strInput[i-j-1])
                }
            }else{
                leftSum=0;
            }
            // console.log('current num '+ strInput[i] +'left sum '+ leftSum);
            //sum number and add it to a map with key and value 
            total = leftSum+rightSum;
            // console.log(total);
            map.set(Number(strInput[i]),total);
            // console.log('sum result: '+ map);
    }
    let minVersionValue = 0;
    for (let [key,value] of map.entries()){
        console.log('key: '+ key, 'value: '+ value);
        if(key===1){//get the version value of digit 1 
            console.log(value);
            minVersionValue = value;
        }
    if (map.has(1)){
        console.log('yes 1 here ')
         //determine if there is a digit 1 has the minimum value
        for (let value of map.values()){
            if(value<minVersionValue){
            console.log('false');
            return false;
            }else{
                console.log('true');
                return true;
        }
    }
    }
    else {
        console.log('no 1 here');
        return false;
    }
        // console.log(key,value)
    }
   
    
}
let input = 3250;
versionValue(input);