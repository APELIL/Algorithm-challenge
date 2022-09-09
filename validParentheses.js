function validParentheses(s){
    const map = new Map();
    map.set(')','(');
    map.set('}','{');
    map.set(']','[');
    let stack = [];
    for (var i = 0; i<s.length;i++){
        if(map.has(s[i])){
            if(!stack.length){return false}//e.g. input=[')']
            else if(stack[stack.length-1]!==map.get(s[i])){
                return false;
            }
            stack.pop()
        }else{
            stack.push(s[i]);
        }
}
return stack.length === 0;
}
let input = ['(){}'];
validParentheses(input)