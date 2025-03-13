def even_numbers(numbers):
    return sum(num for num in numbers if num % 2 != 0)

numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(even_numbers(numbers_list))