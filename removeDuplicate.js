function rd(nums,val){
    for(var left = 0, right = 0; right<nums.length; right++){
        if (nums[right]!== val){
            nums[left]=nums[right];
            left++;
            console.log(nums);
        }
    }
    return nums;
}
// nums = [1,2,3];
nums = [3,1,2];
int =  3;
rd(nums,int);
// var x = rd(nums,int);
// console.log(x.length);
// for (let i of x){
//     console.log(i);
// }