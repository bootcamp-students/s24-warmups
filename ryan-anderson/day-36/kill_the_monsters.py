def kill_monsters(health, monsters, damage):
    if monsters % 3 == 0:
        hits = monsters // 3 - 1
    else:
        hits = monsters // 3
    damage_taken = hits * damage
    if damage_taken >= health:
        return 'hero died'
    else:
        return (f'hits: {hits}, damage: {hits * damage}, health: {health - damage_taken}')

    # divide monsters by 3 to count number of hits
    # if monsters are a multiple of 3, subtract 1 from hits since Saitama won't be hit if all monsters are defeated
    # total damage = hits times damage per hit
    # return f string counting total hits, total damage and remaining health

"""
    Ember's Feedback:
    - Great work! :D
    - I really liked this one so I hope it was enjoyable
"""


# Alternative Solution
def kill_monsters(health, monsters, damage):
    hits = 0
    while monsters > 0 and health > 0:
        monsters -= 3
        if monsters > 0:
            health -= damage
            hits += 1
    if health <= 0:
        return "hero died"
    return f"hits: {hits}, damage: {hits * damage}, health: {health}"
