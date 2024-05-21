# punch 3 times (monsters = monsters - 3)
# then get punched once (health = health - damage) (hits += 1) (damagetook += damage)
# while health is > 0 || monsters > 0
# 

def kill_monsters(health, monsters, damage):
    hitstook = 0
    damagetook = 0
    while health > 0:
        monsters = monsters - 3
        if monsters > 0:
            health -= damage
            hitstook += 1
            damagetook += damage
        else:
            return (f'hits: {hitstook}, damage: {damagetook}, health: {health}')
    return ('hero died')