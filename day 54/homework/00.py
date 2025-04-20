# 2) 

print("Petre Sikmashvili")

# 3) 

print('"ძმა ძმისთვისაო შავი დღისთვისაო"')

# 4) 

print("იყო არაბეთს როსტევან, მეფე ღმრთისაგან სვიანი,")
print("მაღალი, უხვი, მდაბალი, ლაშქარ-მრავალი, ყმიანი,")
print("მოსამართლე და მოწყალე, მორჭმული, განგებიანი,")
print("თვით მეომარი უებრო, კვლა მოუბარი წყლიანი.")

# 5)

print(2 + 3)

# 6)

print("****")
print("****")
print("****")
print("****")

# 7)

num1 = "42"

print(int(num1))

# 8)

num1 = 3.5
num2 = 2.5

print(num1 + num2)

# 9)

str1 = "Hello"
str2 = "World"

print(str1 + " " + str2)

# 10)

int1 = 5
float1 = 6.6
str1 = "Hello"

print(type(int1))
print(type(float1))
print(type(str1))

# 11)

user_age = input("Enter your age: ")

user_age = int(user_age)
age1 = user_age + 1

print(age1)

# 12)

name1 = input("Enter your name: ")

print(f"Hello {name1}")


# 13)

user_age1 = input("Enter your age: ")

user_age1 = int(user_age1)
next_year = user_age1 + 1

print(next_year)

# 14)

num1 = input("Enter your integer number: ")
num2 = input("Enter your integer number: ")

num01 = int(num1)
num02 = int(num2)

print(num01 + num02)

# 15)

user_color = input("Enter your favorite color: ")

print(f"Your favorite color is {user_color}!")

# 16)

height_cm = input("Enter your height(cm): ")
height = int(height_cm)

if height_cm >= "150":
    print("You are hight height")
else:
    print("You are low height")

# 17)

for i in range(1, 6):
    print(i)

# 18)

text1 = "Python"

for i in text1:
    print(i)

# 19)

num1 = 0

for i in range(1, 11):
    num1 += i

print(num1)

# 20)

for i in range(1, 6):
    print(f"2 x {i} = {2 * i}")

# 21)

num1 = 0

for i in range(2, 21, 2):
    print(i)

# 22)

i = 1

while i <= 5:
    print(i)
    i += 1

# 23)

num11 = 1
num1 = 0

while num11 <= 5:
    num1 += num11
    num11 += 1

print(num1)

# 24)

num1 = 10

while num1 >= 1:
    print(num1)
    num1 -= 1


# 25)

i = 1

while i <= 10:
    if i % 2 != 0:
        print(i)
    i += 1

# 26)

while True:
    user_input = input("Enter something: ")
    if user_input == "exit":
        break

# 27)

list1 = ["apple", "cake", "TV"]

for i in list1:
    print(i)

# 28)

list1 = [1, 2, 3, 4, 5]
print(len(list1))

# 29)

list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(list1[1])

# 30)

list1 = [1, 2, 3, 4]

list1.append(5)

print(list1)

# 31)

list1 = [1, 2, 3, 4, 5]

list1.remove(5)

print(list1)

# 32)

squares = [x**2 for x in range(1, 6)]
print(squares)

# 33)

even_numbers = [x for x in range(2, 11) if x % 2 == 0]
print(even_numbers)

# 34)

evens = [x for x in range(2, 11) if x % 2 == 0]
print(evens)

# 35)

words = ["hello", "world"]
upper = [word.upper() for word in words]
print(upper)

# 36)

numbers = [1, 2, 3, 4, 5]
squared_evens = [x ** 2 for x in numbers if x % 2 == 0]
print(squared_evens)

# 37)

def greet(name):
    print(f"Hello, {name}!")

greet("Giorgi")

# 38)

def add(a, b):
    return a + b

print(add(3, 5))

# 39)

def check_even_odd(num):
    return "Even" if num % 2 == 0 else "Odd"

print(check_even_odd(7))


# 40)

def area(length, width):
    return length * width

print(area(6, 3))

# 41)

def reverse_string(text):
    return text[::-1]

print(reverse_string("Python"))

# 42)

tuple1 = (1, 3.6, "hello")

print(tuple1)

# 43)

tuple1 = (2, 3, 5, 8, 1, 10)

print(tuple1[1])

# 44)

tuple1 = (1, 2, 3, 4, 5, 7, 8, 9, 6,)
print(len(tuple1))

# 45)

tuple1 = [1, 2, 3, 4, 5]
tuple2 = [6, 7, 8, 9, 10]

print(tuple1 + tuple2)

# 46)

tuple1 = (5, 10, 15)
if 10 in tuple1:
    print("Found")
else:
    print("Not found")

# 47)

set1 = {1, 2, "apple"}
print(set1)

# 48)

set1 = {"a", "b", "c"}
if "b" in set1:
    print("Yes")
else:
    print("No")

# 49)

set1 = {1, 2, 3, 4}
set1.add(5)
print(set1)

# 50)

set1 = {1, 2, 3, 4, 5, 76}
set1.remove(76)

print(set1)

# 51)

a = {1, 2}
b = {2, 3}
union = a | b
print(union)

# 52)

info1 = {
    "Name": "Petre",
    "Age": "11"
}

print(info1)

# 53)

info2 = {
    "Surname": "Sikmashvili",
    "Favorite color": "yellow"
}

print(info2("Surname"))

# 54)

info3 = {
    "name": "Petre"
    }

info3["age"] = 11

print(info3)