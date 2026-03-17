def last2(s):
    last = s[-2:]
    count = 0
    for i in range(len(s) - 2):
        if s[i:i+2] == last:
            count += 1
    return count