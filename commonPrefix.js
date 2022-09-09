function prefix(strs){  
    let commonP = [];
    for(var j =0;j<strs[0].length;j++){
        let tempC = strs[0][j];
        let map = new Map();
        for(var i = 1;i<strs.length;i++){
            if(tempC==strs[i][j]){
                map.set('True');
            }else{
                map.set('False');
            }
        }
        if(map.has('False')){
            break;
            // continue;
        }else{
            commonP.push(tempC);
        }
    }
    if(commonP.length==0){
        console.log('empty');
        return ""
    }else{
        console.log('hi');
        console.log(commonP.join(''));
        return commonP.join('');
    }
}
strs = ["flower","flow","flight"];
strs2 = ["cir","car"];
prefix(strs2)