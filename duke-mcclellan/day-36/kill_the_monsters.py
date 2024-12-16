##Parameters
##Return - string
##Example - (100, 3, 33)  => "hits: 0, damage: 0, health: 100"
##Concern -  Wrong method
##Explain -  I want to be able to calculate hits, damage and remaining health
## otherwise "here died" needs to be returned.


def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3  # Calculate the number of hits received
    total_damage = hits * damage  # Total damage received

    remaining_health = health - total_damage  # Calculate remaining health

    if remaining_health <= 0:
        return "hero died"

    return f"hits: {hits}, damage: {total_damage}, health: {remaining_health}"


"""
    Ember's Feedback:
    - Excellent work! :D
    - No notes, this is the ideal solution
"""
