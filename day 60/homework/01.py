input = input("Enter a string to convert to an integer: ")

try:
    converted_integer = int(input)
    print(f"The converted integer is: {converted_integer}")
except ValueError:
    print("The input is not a valid integer.")