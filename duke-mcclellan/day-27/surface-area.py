##parameters - surface area
##return - surface area of box
##example - length*width*height
##concern - new language syntax issues
##explain - want to find the surface area of box so multiplying length*width*height


def get_size(length, width, height):
    area = 2 * (length * width + length * height + width * height)

    volume = length * width * height

    return [area, volume]


"""
    Ember's Feedback:
    - Great job!
    - python files need snake case name
"""
