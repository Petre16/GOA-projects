# საკლასო დავალება:შექმენით ფუნქცია სახელად კალკუალტორი. ფუნქციას გადაეცემა სამი პარამეტრი:

# თუ ოპერატორი ტოლია პლიუსის, დაიბეჭდოს num1 + num2

# თუ ოპერატორი ტოლია მინუსის, დაიბეჭდოს num1 - num2

# თუ ოპერატორი ტოლია ფიფქის, დაიბეჭდოს num1 * num2

# თუ ოპერატორი ტოლია დახრილი ხაზის, დაიბეჭდოს num1 / num2

# ფუნქცია გამოიძახეთ სამჯერ, განსხვავებული არგუმენტებით

def calculator(num1, num2, opperator):
    if opperator == "+":
        print(num1 + num2)

    elif opperator == "-":
        print(num1 - num2)

    elif opperator == "*":
        print(num1 * num2)

    elif opperator == "/":
        print(num1 / num2)

calculator(223, 33, "*")
calculator(45, 44, "-")
calculator(21, 65, "+")
calculator(400, 20, "/")