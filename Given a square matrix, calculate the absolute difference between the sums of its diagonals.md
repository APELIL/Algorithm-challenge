# Given a square matrix, calculate the absolute difference between the sums of its diagonals.

##### Question: Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

##### Method:

1. We can consider left diagonal: ***when i = j -> sum*** (e.g., if we have a 3*3 matrix, we can know the coordinate of left diagonal is (0,0) (1,1) (2,2))
2. Right diagonal can be consider as ***when i+j = len(arr)-1*** -> sum (e.g., take 3*3 matrix as an example as well, the coordinate of right diagnal is (0,2) (1,1) (2,0), from the example we can get that the sum of x,y is eaqul to len(arr) -1)

```python
def diagonalDifference(arr):
    # Write your code here
    sumLeft = 0
    sumRight = 0
    lenArr = len(arr) - 1

    for i in range(0,len(arr)):
        for j in range(0,len(arr)):
            # calculate the left diagonals 
            if i==j:
                sumLeft+=arr[i][j]
            # calculare the right diagonals
            if (i+j) == (len(arr) - 1):
                print("i:{}&j:{}".format(i,j))
                sumRight+=arr[i][j]
                print(sumRight)
    return abs(sumLeft-sumRight)
```

> *Challenge from: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true*