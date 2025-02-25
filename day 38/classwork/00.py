# შექმენით ფუნქცია სახელად rectangle_info, რომელსაც გადაეცემა ორი პარამეტრი - side1, side2.

# ფუნქციამ უნდა დააბრუნოს ორი მნიშვნელობა: perimeter, area.

# perimeter = (side1 + side2) * 2
# area = side1 * side2

# დაბრუნებული მნიშვნელობა შეინახეთთ perimeter და area ცვლადებში. შემდეგ დაბეჭდეთ თითოეული ცვლადის მნიშვნელობა

def rectangle_info(side1, side2):
    if (side1 + side2) * 2:
        print("perimeter")

    elif side1 * side2:
        print("area")

rectangle_info(-10, 10)