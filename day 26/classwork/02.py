# საკლასო დავალება:

# Write a program that takes a score (0-100) as input and outputs the grade based on the following rules:

# 90-100: A
# 80-89: B
# 70-79: C
# 60-69: D
# Below 60: F

user_score = int(input("Enter your score: "))

if user_score >= 90 and user_score <= 100:  print("A")
elif user_score >= 80:  print("B")
elif user_score >= 70:  print("C")
elif user_score >= 60:  print("D")
else: print("F")