# Transportation on vacation

def rental_car_cost(d):
    daily_rate = 40
    res = d * daily_rate

    if d >= 7:
        res -= 50
    elif d >= 3:
        res -= 20

    return res