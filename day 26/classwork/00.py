#საკლასო დავალება: მომხარებელს შემოტანინეთ მთელი რიცხვი და შეინახეთ ცვლადში. 

# შემდეგ დაწერეთ პირობითი განცხადება: 
#   თუ რიცხვი მეტია 0-ზე, დაუბეჭდეთ "Biggger than 0".
#   თუ რიცხვი ტოლია 0-ის, დაუბეჭდეთ "0".
#   სხვა შემთხვევაში დაუბეჭდეთ "smaller than 0"

user_num1 = int(input("Enter Number: "))
if user_num1 > 0:
    print("Biggger than 0")
elif user_num1 == 0:
    print("0")
else:
    print("smaller than 0")