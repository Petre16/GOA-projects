def add_two_numbers():
    try:
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        result = num1 + num2
        print(f"The sum of {num1} and {num2} is {result}.")
    except ValueError:
        print("Invalid input. Please enter valid integers.")

add_two_numbers()