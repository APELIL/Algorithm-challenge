var llw = function(str){
    var sa = str.split(' ');
    var temp = [];
    for (let item of sa){
        if (item){
            temp.push(item);
        }
    }
    console.log(temp[temp.length-1].length);
    return temp[temp.length-1].length;
    console.log(temp);
}
var words = 'hello world ';
llw(words);