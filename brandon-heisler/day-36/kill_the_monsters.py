def kill_monsters(health, monsters, damage):
    final_hits = (monsters - 1) // 3
    final_damage = final_hits * damage
    final_health = health - final_damage
    if final_health <= 0:
        return "hero died"
    else:
        return f"hits: {final_hits}, damage: {final_damage}, health: {final_health}"


# i need to return a string in the format "hits: #, damage: #, health: #"
# or "hero died"
# im given 3 ints, one for health, monsters and damage.
# hits is hits received, damage is damage received, remaining health is.
# for every 3 hits i take x damage
#  ill set up 3 variables with the math to figure each field then return them in a formatted string.

"""
    Ember's Feedback:
    - Excellent job! :D
"""
