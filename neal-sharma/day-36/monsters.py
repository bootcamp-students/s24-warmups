# parameters- kill monsters with one punch, but after 3 punches you take a hit once, health, monsters, damage.
# return- hits, damage, and health. if health <= 0 return hero died.
# example- (100, 3, 33) = hits: 0, damage: 0, health: 100 / health 100, number of monsters 3, damage monsters can
# inflict - 33.


def kill_monsters(health, monsters, damage):
    hits = 0
    total_damage = 0
    while monsters > 0:
        # if monsters is greater than 0 kill off the first 3.
        monsters -= 3

        # if after killing the 3 monsters take a hit and subtract the damage from health and add damage
        if monsters > 0:
            hits += 1
            health -= damage
            total_damage += damage

            if health <= 0:
                return "hero died"

    return f"hits: {hits}, damage: {total_damage}, health: {health}"


"""
    Ember's Feedback:
    - Good work!
    - Out of the box, most formatters don't know how to treat comments at the end of the line. Most often -
      I see comments made on the line above what they are referencing. I do this myself as well.
"""


# Alternative Solution
def kill_monsters(health, monsters, damage):
    final_hits = (monsters - 1) // 3
    final_damage = final_hits * damage
    final_health = health - final_damage
    if final_health <= 0:
        return "hero died"
    else:
        return f"hits: {final_hits}, damage: {final_damage}, health: {final_health}"
