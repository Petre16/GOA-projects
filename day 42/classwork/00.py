# პირველი

def find_maximum_int(arr):
    return max(arr)

print(find_maximum_int([1, 2, 3, 4, 5, 6, 7, 8, 9]))


# მეორე

def find_maximum_int(arr):
    max_arr = arr[0]

    for number in arr:
        if number > max_arr:
            max_arr = number

    return max_arr

print(find_maximum_int([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))