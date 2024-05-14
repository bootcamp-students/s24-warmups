def century(year):
    if year % 100 == 0:
        return year / 100
    else:
        return int((year - (year % 100)) / 100 + 1)
#use % to remove ones and tens places