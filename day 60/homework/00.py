def division_with_zero_check():
    try:
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        result = num1 / num2
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")
    except ValueError:
        print("Error: Please enter valid numeric inputs.")
    else:
        print(f"The result of the division is: {result}")

if __name__ == "main":
    division_with_zero_check()