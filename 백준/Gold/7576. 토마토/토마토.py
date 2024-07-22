from collections import deque

def check_tomato(a):
    for i in range(n):
        for j in range(m):
            if graph[i][j] == a:
                queue.append((i,j))

def bfs():

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 1 or graph[nx][ny] == -1:
                continue
            if graph[nx][ny] == 0:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx,ny))

m, n = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(n)]

queue = deque()

check_tomato(1)

dx = [-1,1,0,0]
dy = [0,0,-1,1]

bfs()
check_tomato(0)

print(max([element for row in graph for element in row])-1 if not queue else -1)
