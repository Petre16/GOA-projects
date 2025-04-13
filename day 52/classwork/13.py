def get_grade(s1, s2, s3):
    number = (s1 + s2 + s3) / 3
    
    if number >= 90 and number <= 100:
        return 'A'
    elif number >= 80 :
        return 'B'
    elif number >= 70:
        return 'C'
    elif number >= 60:
        return 'D'
    return 'F'