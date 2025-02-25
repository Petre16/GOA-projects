# საკლასო დავალება:

# შექმენით ფუნქცია სახელად greet, რომელსაც გადაეცემა შემდეგი პარამეტრები: name, surname, age, academy, favourite_color, city.

# ამ ფუნქციამ უნდა დაგვიბრუნოს შემდეგი სთრინგი: "Hello, my name is {name}, my surname is {surname}. I am {age} years old". I study in {academy}. My favourite color is {favourite_color}. I live in {city}.

# აუცილებლად გამოიყენეთ f სთრინგი.

# ფუნქციის დაბრუნებული მნიშვნელობა შეინახეთ ცვლადში და შემდეგ დაბეჭდეთ ამ ცვლადის მნიშვნელობა

def greet(name, surname, age, academy, favourite_color, city):
    return(f"Hello, my name is {name}, my surname is {surname}. I am {age} years old. I study in {academy}. My favourite color is {favourite_color}. I live in {city}.")

greet_fuction = greet("Petre", "Sikmashvili", 11, "GOA", "Yellow", "Tbilisi")

print(greet_fuction)