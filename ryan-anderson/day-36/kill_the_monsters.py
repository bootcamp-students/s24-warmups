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
    # total damage = hits tims damage per hit
    # return f string counting total hits, total damage and remaining health