# საკლასო დავალება:

# შექმენით ფუნქცია სახელად iscapitalized, რომელსაც ექნება 1 პარამეტრი - user_str.

# ფუნქციამ უნდა დაგვიბეჭდოს True როდესაც სთრინგი არის capitalize ფორმატში, ხოლო False დანარჩენ შემთხვევებში.

# გამოიყენეთ islower, isupper, slicing, and operator

# ფუნქციის გამოძახებამდე შექმენით text ცვლადი და მომხმარებელს შემოატანინეთ წინადადება. ფუნქციის გამოძახებისას არგუმენტად გადაეცით ეს text ცვლადი.

def iscapitalize(user_str):
    if user_str != user_str.capitalize():
        print("False")

    else:
        print("True")

text = input("Enter str: ")

iscapitalize(text)