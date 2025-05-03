# საკლასო დავალება: შექმენით names სია სადაც შეინახავთ 10 სახელს.

# შექმენით renewed სია, სადაც დაემატება names სიიდან სახელი თუ მისი სიგრძე ნაკლებია 6-ზე ან იწყება "A" სიმბოლოთი. renewed სია შექმენით list comprehension-ის გამოყენებით

names = ["Anastasia", "Bob", "Petre", "Data", "Alex", "Tom", "Ann", "Nika", "John", "Giorgi"]
renewed = [name for name in names if len(name) < 6 or name.startswith("A")]
print(renewed)