# Convert number to reversed array of digits

def digitize(n):
    str_number = str(n)
    rev_number = str_number[::-1]
    
    new_list = []
    for number in rev_number:
        new_list.append(int(number))
        
    return new_list