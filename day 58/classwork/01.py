# საკლასო დავალება:

# შექმენით try catch კოდის ბლოკი. try-ში მომხმარებელს შემოატანინეთ რიცხვი და გადააქციეთ ინტეჯერად, შემდეგ დაბეჭდეთ ის. except-ში უბრალოდ დაუბეჭდეთ error

try:
    num1 = int(input("Enter a number: "))
    print(num1)
except ValueError:
    print("error")