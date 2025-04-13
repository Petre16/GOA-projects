def fake_bin(x):
    num = ""
    
    for i in x:
        new = int(i)
        
        if new < 5:
            num += "0"
        else:
            num += "1"
    
    return num