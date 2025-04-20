# Total amount of points

def points(games):
    score = 0
    
    for game in games:
        our_score = int(game[0])
        their_score = int(game[2])
        
        if our_score > their_score:
            score += 3
        elif our_score == their_score:
            score += 1
    
    return score