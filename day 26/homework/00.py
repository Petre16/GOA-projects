num1 = int(input("Enter number: "))
num2 = int(input("Enter number: "))
num3 = int(input("Enter number: "))

if num1 > num2:
    print(num1)
elif num1 > num3:
    print(num1)
elif num2 > num1:
    print(num2)
elif num2 > num3:
    print(num2)
elif num3 > num1:
    print(num3)
elif num3 > num2:
    print(num3)
else:
    print("Error")