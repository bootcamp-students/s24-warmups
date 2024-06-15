<<<<<<< HEAD
## after you punch 3 times one of the remaining 
#monsters will hit you once
# so after 3 punches 
#monsters divided by 3 = health - damage, 
#if health = 00 "hero died"
=======
# after you punch 3 times one of the remaining
# monsters will hit you once
# so after 3 punches
# monsters divided by 3 = health - damage,
# if health = 00 "hero died"
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3
    damage *= hits
    health -= damage
<<<<<<< HEAD
    print(hits, damage, health)
    return f'hits: {hits}, damage: {damage}, health: {health}' if health > 0 else 'hero died'
    
    
=======
    return (
        f"hits: {hits}, damage: {damage}, health: {health}"
        if health > 0
        else "hero died"
    )


"""
    Ember's Feedback:
    - Good work! I like the conditional return value
"""
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
