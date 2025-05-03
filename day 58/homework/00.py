
squares = [x**2 for x in range(1, 11)]
print("Squares:", squares)


even_numbers = [x for x in range(1, 21) if x % 2 == 0]
print("Even numbers:", even_numbers)


words = ['apple', 'banana', 'cherry']
uppercase_words = [word.upper() for word in words]
print("Uppercase words:", uppercase_words)


word_lengths = [len(word) for word in words]
print("Lengths of words:", word_lengths)


numbers = [1, 2, 3, 4, 5]
numbers_plus_five = [x + 5 for x in numbers]
print("Numbers plus 5:", numbers_plus_five)


strings = ['hello', 'world', 'python']
first_letters = [string[0] for string in strings]
print("First letters:", first_letters)


doubled_numbers = [x * 2 for x in numbers]
print("Doubled numbers:", doubled_numbers)