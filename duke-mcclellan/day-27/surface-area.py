##parameters - surface area
##return - surface area of box
##example - length*width*height
##concern - new language syntax issues
##explain - want to find the surface area of box so multiplying length*width*heigth


def get_size(length, width, height):
    # Calculate surface area
    area = 2 * (length * width + length * height + width * height)
    
    # Calculate volume
    volume = length * width * height
    
    # Return the result as an array
    return [area, volume]
