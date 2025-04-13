def count_positives_sum_negatives(arr):
    if arr == [] or arr == None: return []
    
    count_of_pos = 0
    sum_of_neg = 0
    
    for i in arr:
        if i > 0: count_of_pos += 1
        else: sum_of_neg += i
    
    return [count_of_pos, sum_of_neg]