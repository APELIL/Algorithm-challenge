var searchInsert = function(nums, target) {
    let low = 0;
    let hight = nums.length-1;
    
    while(low<=hight){
        var mid = Math.floor((low+hight)/2);
        // let mid = Math.floor((hight-low)/2)+low;
        if(target===nums[mid]){
            console.log(mid);
            return mid;
        }
        if(target<nums[mid]){
            hight = mid - 1;
        }
        if(target>nums[mid]){
            low = mid + 1 
        }
        console.log('low:'+low);
        console.log('hight:'+hight);
    }
    console.log(mid+1)
    return mid+1
};
nums = [1,3,5,6];
target = 7;
searchInsert(nums,target);