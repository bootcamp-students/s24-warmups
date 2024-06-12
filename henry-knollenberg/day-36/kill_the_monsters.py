# punch 3 times (monsters = monsters - 3)
# then get punched once (health = health - damage) (hits += 1) (damage_took += damage)
# while health is > 0 || monsters > 0
#


def kill_monsters(health, monsters, damage):
    hits_took = 0
    damage_took = 0
    while health > 0:
        monsters = monsters - 3
        if monsters > 0:
            health -= damage
            hits_took += 1
            damage_took += damage
        else:
            return f"hits: {hits_took}, damage: {damage_took}, health: {health}"
    return "hero died"


"""
    Ember's Feedback:
    - Good work!
    - remember to name your variables using snake_case in python, that means
      two word variable names must separated
"""


# Alternative Solution
def kill_monsters(health, monsters, damage):
    if monsters % 3 == 0:
        hits = monsters // 3 - 1
    else:
        hits = monsters // 3
    damage_taken = hits * damage
    if damage_taken >= health:
        return "hero died"
    else:
        return f"hits: {hits}, damage: {hits * damage}, health: {health - damage_taken}"
