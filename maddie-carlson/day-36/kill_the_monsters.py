def kill_monsters(health, monsters, damage):
    # function takes three parameters, the hero's health, the number of monsters, and the damage monsters do
    # hero can kill three monsters before suffering damage, provided there is at least one monster left
    # needs to return a string detailing the hits suffered, damage taken, and remaining health
    # OR "hero died" if health is <= 0

    hits = 0
    total_damage = 0

    # to solve, use a while loop, subtracting three monsters and damage from health each loop
    # and tracking hits and damage taken
    while monsters > 0:
        monsters -= 3  # ONE PUNCH

        if monsters > 0:
            health -= damage  # oh no!
            hits += 1
            total_damage += damage

        if health <= 0:
            return "hero died"
    # if we exit the loop, the hero has won

    return f"hits: {hits}, damage: {total_damage}, health: {health}"


"""
    Ember's Feedback:
    - Excellent work :D
"""


# Alternative Solution
def kill_monsters(health, monsters, damage):
    monsters_who_can_hit = monsters // 3
    if monsters % 3 == 0:
        monsters_who_can_hit -= 1
    monster_damage_to_you = monsters_who_can_hit * damage
    hits = monsters_who_can_hit
    health = health - monster_damage_to_you
    damage = hits * damage
    if health == 0 or health < 0:
        return "hero died"
    else:
        return f"hits: {hits}, damage: {damage}, health: {health}"
