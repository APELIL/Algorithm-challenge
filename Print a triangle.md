# Print a triangle

*Question： you need to print a triangle like this:*

```java
     #
    ##
   ###
  ####
 #####
######
```

*Ideas:*

1. Think of this like a square

```java
-----#
----##
---###
--####
-#####
######
```

2. we need to print the left triangle first 

```python
for i in range(0,n):
  for j in range(0,n-i-1):
    print("-",end=" ")
  print("")
```

3. now we can print the right triangle easier

```python
for i in range(0,n):
  for j in range(0,n-i-1):
    print("-",end="")
  for j in range(0,i+1):
    print("*",end="")
  print("")
```

4. change "-" to ""

```python
def staircase(n):
    # Write your code here
    for i in range(0, n):
        for j in range(0, n-i-1):
            print("-",end="")
            # print("",end = " ")
        for j in range(0, i+1):
            print("#",end="")
        # if i<n:
        print('')
```



> *Reference: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true&h_r=next-challenge&h_v=zen*