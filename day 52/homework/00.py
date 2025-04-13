# Transportation on vacation

def rental_car_cost(d):
    daily_rate = 40
    total = d * daily_rate

    if d >= 7:
        total -= 50
    elif d >= 3:
        total -= 20

    return total