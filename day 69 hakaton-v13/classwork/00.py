#  Create a function that returns a list of the first n multiples of x.

def first_n_multiples(x, n):
    return [x * i for i in range(1, n + 1)]

print(first_n_multiples(3, 5))