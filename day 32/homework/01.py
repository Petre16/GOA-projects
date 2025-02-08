def find_maximum(list1):
    maximum = list1[0]

    for num in list1:
        if num > maximum:
            maximum = num

    print(maximum)

find_maximum([3, 32, 43, 4222, 542, 5, 2])