def sum_and_multiply(numbers):
    even_arr = [num for num in numbers if num % 2 == 0]
    odd_arr = [num for num in numbers if num % 2 != 0]
    
    even_sum = sum(even_arr)
    odd_sum = sum(odd_arr)
    
    return even_sum * odd_sum


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = sum_and_multiply(numbers)
print(result)