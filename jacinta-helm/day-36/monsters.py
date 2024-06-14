def kill_monsters(health, monsters, damage):

    final_hits = (monsters - 1) // 3
    final_damage = final_hits * damage
    final_health = health - final_damage
    if final_health <= 0:
        return "hero died"
    else:
        return f"hits: {final_hits}, damage: {final_damage}, health: {final_health}"

"""
    Ember's Feedback:
    - good work!
    - was a sql file
"""