from typing import List
from functools import reduce

def calculate_average_grade(grades: List[int]) -> float:
    if len(grades) == 0: return 0.0
    def sumList(accum, currVal): return accum + currVal
    # lambda accum, currVal: accum + currVal, grades
    return reduce(sumList, grades) / len(grades)

if __name__ == "__main__":
    print(calculate_average_grade([1, 2, 3, 4, 5])) # 3.0



