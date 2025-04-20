# Sum without highest and lowest number

def sum_array(arr):
    if arr == None or arr == []: return 0
    
    arr.sort()
    return sum(arr[1:-1])