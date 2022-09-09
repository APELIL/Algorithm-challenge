var removeDuplicates = function(nums) {
        let len = 0;
        for(var slow = 0, fast = 0; fast<nums.length;fast++){
            if(nums[slow]!=nums[fast]){
                nums[slow]=nums[fast];
                slow++;
            }
            
        }
        console.log(slow);
};
nums = [1,2,2]
removeDuplicates(nums);