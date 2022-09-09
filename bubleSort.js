var bubbleSort = function(arr){
    let temp = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j< arr.length - i; j++){
            if(arr[j+1]>arr[j]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}
input = [3,2,5,1];
bubbleSort(input);