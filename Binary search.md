# Binary search

Ideas:

1. Array must be sorted
2. While low <= high, keep searching
3. Set a mid position
4. If target value > mid value, *shift right (low = mid + 1)*
5. If target value < mid value, *shift left (high = mid - 1)*
6. In python, we need to use "//" to get mid value
7. Time complexity $n$, $\frac{n}{2}$ ,$\frac{n}{4}$,$\frac{n}{8}$, we can get $\frac{n}{2^k}$, and set $\frac{n}{2^k} = 1$, we can get $O(h) = O(log2n)$

```python
def search(self, nums: List[int], target: int) -> int:
        mid, low, high = 0, 0, len(nums)-1
        while(low<=high):
            mid = (high-low)//2 + low #round down
            if nums[mid] == target: return mid
            elif nums[mid]>target: high = mid - 1
            elif nums[mid]<target: low = mid + 1
        return -1
```

