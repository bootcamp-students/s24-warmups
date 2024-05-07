def get_size(w,h,d):
    #function takes width, height, and depth of a box
    #needs to return surface area and volume as [area, volume]
    
    #to solve, calculate area (w * h + w * d + h * d * 2)
    area = (w * h + w * d + h * d) * 2
    #and then volume (w * h * d)
    volume = w * h * d
    
    #and return
    return [area, volume]
