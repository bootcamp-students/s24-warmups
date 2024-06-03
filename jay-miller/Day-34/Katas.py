SQL: Concatenating Columns.py

SELECT CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM names;

Kill the MONSTERS!!!.py:
def kill_monsters(h, m, dm):
    hits = (m - 1) // 3
    damage = hits * dm
    health = h - damage
    return 'hero died' if health <= 0 else f'hits: {hits}, damage: {damage}, health: {health}'

Breaking Chocolate Problem.py:
def break_chocolate(n, m):
    # Check if input dimensions are valid
    if n <= 0 or m <= 0:
        return 0
    
    # Calculate the minimum number of breaks needed
    # It's (n * m) - 1 because each break splits the chocolate into two pieces
    # and we need one less break than the total number of pieces
    return (n * m) - 1 
