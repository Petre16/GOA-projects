num1 = float(input("დაწერე რიცხვი: "))
num3 = str(input("აირჩიე ოპერატორი:. +   -   /   * .: "))
num2 = float(input("დაწერე რიცხვი: "))

if num1 + num2:
    print(num1 + num2)
elif num1 - num2:
    print(num1 - num2)
elif num1 / num2:
    print(num1 / num2)
elif num1 * num2:
    print(num1 * num2)
else:
    print("error")