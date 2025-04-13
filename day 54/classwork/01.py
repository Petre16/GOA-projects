# საკლასო დავალება:

# Create a list comprehension that generates a list of numbers from 1 to 50 that are divisible by 3.

numbers = [i for i in range(1, 51) if i %3 == 0]
print(numbers)