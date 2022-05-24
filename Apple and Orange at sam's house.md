# Apple and Orange at sam's house 

> *Problem description: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true&h_r=next-challenge&h_v=zen*

```python 
def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here
    newApples = []
    newOranges = []
    for i in apples:
        newApples.append(i+a)
    for i in oranges:
        newOranges.append(i+b)
    appleAtsam = [1 if i>=s and i<=t else 0 for i in newApples]
    orangeAtsam = [1 if i>=s and i<=t else 0 for i in newOranges]
    print(appleAtsam.count(1))
    print(orangeAtsam.count(1))
```

