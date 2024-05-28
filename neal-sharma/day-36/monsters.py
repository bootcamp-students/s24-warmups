# parameters- kill monsters with one punch, but after 3 punches you take a hit once, health, monsters, damage.
# return- hits, damage, and health. if health <= 0 return hero died.
# example- (100, 3, 33) = hits: 0, damage: 0, health: 100 / health 100, number of monsters 3, damage monsters can
# inflict - 33.

def kill_monsters(health, monsters, damage):
    hits = 0
    total_damage= 0
    while monsters > 0:
        monsters -= 3 # if monsters is greater than 0 kill off the first 3.
        print(monsters)
            
        if monsters > 0: # if after killing the 3 monsters take a hit and subtract the damage from health and add damage
            hits += 1
            health -= damage
            total_damage += damage
            
            
            if health <= 0:
                return 'hero died'
            
    return f'hits: {hits}, damage: {total_damage}, health: {health}'