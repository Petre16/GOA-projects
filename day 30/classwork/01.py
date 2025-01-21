# საკლასო დავალება:

# შექმენით ახალი სია, სადაც იქნება 15 ელემენტი.

# მთავარ სიაზე მოახდინეთ slicing:

# 1. შეაბრუნეთ სია და დაბეჭდეთ ის.
# 2. ჩამოწერეთ ხუთი slicing-ის მაგალითი ისეთ შემთხვევებზე, როდესაც slicing-ს ვახდენთ ორი ინდექსის გაწერით.
# 3. ჩამოწერეთ ხუთი slicing-ის მაგალითი ისეთ შემთხვევებზე, როდესაც slicing-ს ვახდენთ ორი ინდექსის და სტეპის ანუ ნაბიჯის გაწერით.
# 4. ჩამოწერეთ ხუთი slicing-ის მაგალითი ისეთ შემთხვევებზე, როდესაც slicing-ს ვახდენთ ერთი ინდექსის და ორწერტილის გაწერით

list1 = ["name", "პეტრე", "surname", "სიყმაშვილი", 3.5, 122, 54.3, 1, 2.3, "GOA BEST", "GOA", 99, 0, 99.9, "good"]

list2 = list1[::-1]
print(list2)



list3 = list1[1:5]
print(list3)

list4 = list1[3:7]
print(list4)

list5 = list1[9:14]
print(list5)

list6 = list1[0:1]
print(list6)

list7 = list1[4:9]
print(list7)



list8 = list1[1:4:2]
print(list8)

list9 = list1[5:16:4]
print(list9)

list10 = list1[0:7:3]
print(list10)

list11 = list1[8:15:2]
print(list11)

list12 = list1[1:11:6]
print(list12)



list13 = list1[2::]
print(list13)

list14 = list1[6::]
print(list14)

list15 = list1[11::]
print(list15)

list16 = list1[16::]
print(list16)

list17 = list1[9::]
print(list17)