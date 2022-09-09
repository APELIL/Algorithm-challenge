/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
var twoSum = function(nums,target){
    let map = new Map();
    for(let i = 0; i<nums.length; i++){
        let diff = target - nums[i];
        if (!map.has(diff)){
            map.set(nums[i],i)
        }
        else{
            return [map.get(diff),i]
        }
    }
}
var nums = [2,7,11,15];
var target = 9;
var ans = twoSum(nums,target);
console.log(ans);