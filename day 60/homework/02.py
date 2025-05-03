list = [10, 20, 30, 40, 50]

try:
    index = int(input("Enter an index number: "))
    print(f"The element at index {index} is {list[index]}")
except IndexError:
    print("Error: The index is out of range.")
except ValueError:
    print("Error: Please enter a valid integer.")