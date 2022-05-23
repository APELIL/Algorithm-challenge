# miniMaxSum

*Question:*

> Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
>
> Example: 
>
> Sample input: 1 2 3 4 5
>
> Expected output: minSum: 1+2+3+4 maxSum: 2+3+4+5
>
> *Reference: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen*

*Idea:*

- *Min sum:* 1. get sum of array first and 2. minus the max value of arrary 
- *Max sum*: 1. get sum of array first and 2. minus the min value of arrary 

```python
print(sum(arr)-max(arr),sum(arr)-min(arr))
```

