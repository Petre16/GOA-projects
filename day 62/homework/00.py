words = ['apple', 'banana', 'cherry']
uppercased = list(map(str.upper, words))
print(uppercased)

numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)

added_five = list(map(lambda x: x + 5, numbers))
print(added_five)

celsius = [0, 20, 37, 100]
fahrenheit = list(map(lambda c: c * 9/5 + 32, celsius))
print(fahrenheit)

words2 = ['dog', 'cat', 'mouse']
first_chars = list(map(lambda w: w[0], words2))
print(first_chars)

numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odds = list(filter(lambda x: x % 2 != 0, numbers2))
print(odds)

words3 = ['apple', 'banana', 'cherry', 'kiwi', 'strawberry']
long_words = list(filter(lambda w: len(w) > 5, words3))
print(long_words)

nums = [-5, 3, -1, 7, 0, -2, 8]
non_negatives = list(filter(lambda x: x >= 0, nums))
print(non_negatives)  # [3, 7, 0, 8]


names = ['Alice', 'Bob', 'Anna', 'Mike', 'Andrew', 'Tom']
a_names = list(filter(lambda name: name.startswith('A'), names))
print(a_names)


numbers3 = [3, 5, 9, 12, 14, 18, 20]
div_by_3 = list(filter(lambda x: x % 3 == 0, numbers3))
print(div_by_3)