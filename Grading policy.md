# Grading policy 

> Question description: 
>
> If the difference between the grade and the next multiple 5 is less than 3, dound grade up to the next multiple 5. 
>
> 84 -> 85 
>
> 73 -> 75
>
> 38 -> 40
>
> 33 -> 33 (not modified)
>
> ***Reference: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true***

*IDEA:*

1. From the description we can know if currentGrade%5 >= 3 (73,74), then modify grade
2. If the currentGrade%5<=3 (71,72), the grade won't modify

``` python
def gradingStudents(grades):
    # Write your code here
    modified = []
    for i in grades:
        if i < 37: grade = i 
        elif i%5 >= 3: grade = i + 5 - (i%5)
        elif i%5 < 3: grade = i 
        modified.append(grade)
    return modifiedq
```

We can use ternary expression as well

```python
def gradingStudents(grades):
  modified = [i if i< 37 else i+5-(i%5) if i%5 >=3 else i for i in grades]
  return modified
```

