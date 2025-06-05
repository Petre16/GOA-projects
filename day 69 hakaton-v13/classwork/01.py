# # Given an array of integers, find the one that appears an odd number of times.

# Given a list of 10 integers, return a string in the form of a phone number: (123) 456-7890.
def format_phone_number(num):
    return f"({num[0]}{num[1]}{num[2]}) {num[3]}{num[4]}{num[5]}-{num[6]}{num[7]}{num[8]}{num[9]}"
print(format_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


#  Write a function that repeats a given string n times.
