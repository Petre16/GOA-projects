# საკლასო დავალება: შექმენით ფუნქცია სახელად manual_capitalize, რომელსაც გადაეცემა ერთი პარამეტრი - user_str.

# თქვენმა ფუნქციამ უნდა დააბრუნოს ეს სთრინგი capitalized ფორმატში, არ გამოიყენოთ capitalize ფუნქცია - გამოიყენეთ lower, upper, slicing.

# ფუნქციის გამოძახებამდე მომხმარებელს შემოატანინეთ სთრინგი და შეინახეთ ის ცვლადში. შემდეგ გამოიძახეთ ეს ფუნქცია და არგუმენტად გადაეცით ეს ცვლადი.

def manual_capitalize(user_str):
    print(user_str[0].upper() + user_str[1:].lower())

user_info = input("Enter String: ")
manual_capitalize(user_info)