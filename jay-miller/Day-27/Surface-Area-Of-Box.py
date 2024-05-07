def box_surface_area_volume(length, width, height):
    # Calculate surface area
    area = 2 * (length * width + length * height + width * height)
    
    # Calculate volume
    volume = length * width * height
    
    # Return as array [area, volume]
    return [area, volume]

def get_size(w, h, d):
    # Call box_surface_area_volume function
    return box_surface_area_volume(w, h, d)
