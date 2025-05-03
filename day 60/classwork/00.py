try:
    num1 = float(input("Enter number: "))
    num2 = float(input("Enter number: "))
    res = num1 / num2
except ValueError:
    print("Error")
except ZeroDivisionError:
    print("Error")
except Exception as e:
    print(e)
else:
    print(num1)
    print(num2)
    print(res)