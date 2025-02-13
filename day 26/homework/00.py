# Take three numbers as input
num1 = int(input("Enter number: "))
num2 = int(input("Enternumber: "))
num3 = int(input("Enternumber: "))

if num1 >= num2 and num1 >= num3:
    largest = num1
elif num2 >= num1 and num2 >= num3:
    largest = num2
else:
    largest = num3

print("The largest number is:", largest)