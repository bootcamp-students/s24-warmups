## after you punch 3 times one of the remaining 
#monsters will hit you once
# so after 3 punches 
#monsters divided by 3 = health - damage, 
#if health = 00 "hero died"
def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3
    damage *= hits
    health -= damage
    print(hits, damage, health)
    return f'hits: {hits}, damage: {damage}, health: {health}' if health > 0 else 'hero died'
    
    
