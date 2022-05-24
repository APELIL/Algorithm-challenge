# Kangaroo

> *Question description: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen*

**Idea**

1. From the description we can know that x1<x2, thus if v1 < v2, k1 will never catch up with k2

2. Now, we consider **situation of k1 can catch up with k2** 

   $x1 + jumpSteps*v1 = x2 + jumpSteps*v2$

   *so we can get:*

   $x1-x2 = (v2-v1)jumpSteps$

   *Thus if k1 want to catch up with k2, $(x1-x2)%(v2 - v1) = 0$*

``` python
def kangaroo(x1, v1, x2, v2):
    # Write your code here
    if v1 > v2 and (x2-x1)%(v2-v1) == 0: return "YES"
    else: return "NO"
```

