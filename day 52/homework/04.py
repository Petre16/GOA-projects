# Total amount of points

def points(games):
    res = 0
    for game in games:
        x, y = map(int, game.split(':'))
        if x > y:
            res += 3
        elif x == y:
            res += 1
            
    return res