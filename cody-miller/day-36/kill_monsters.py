def kill_monsters(health, monsters, damage):
    hits = monsters // 3
    
    if monsters % 3 == 0:
        hits -= 1
    
    total_damage = hits * damage
    
    remaining_health = health - total_damage
    
    if remaining_health <= 0:
        return "hero died"
    
    return f"hits: {hits}, damage: {total_damage}, health: {remaining_health}"

'''
Every Third punch you receive a punch
How much hits you received
How much damage received
Remaining Health
When Health == 0, Hero Died
'''

"""
    Ember's Feedback:
    - Great work!! :D
"""