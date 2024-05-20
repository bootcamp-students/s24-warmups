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