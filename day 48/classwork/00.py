def past(h, m, s):
    new_h = 3600 * h
    new_m = 60 * m
    res = (new_h + new_m + s) * 1000
    return res