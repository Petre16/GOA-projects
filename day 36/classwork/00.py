# საკლასო დავალება:

# შექმენით ფუნქცია სახელად check_loweracase, რომელსაც გადაეცემა 1 პარამეტრი - user_str.

# ფუნქციის დავალებაა, დაბეჭდოს სთრინგი მთლიანად თუ არის lowercase-ში (მისი ყველა სიმბოლო თუ არის lowercase-ში).

# ფუნქციის გამოძახებამდე შექმენით text ცვლადი და მომხმარებელს შემოატანინეთ წინადადება. ფუნქციის გამოძახებისას არგუმენტად გადაეცით ეს text ცვლადი.


def check_lowercase(user_str):
    print(user_str == user_str.lower())

text = str(input("Enter Name: "))

check_lowercase(text)