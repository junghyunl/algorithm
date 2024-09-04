N = int(input())
cost = [0]

for _ in range(N):
    a = input()
    cost.append(list(map(int, a.split())))

total = [0, cost[1]] + [[1000, 1000, 1000] for _ in range(N)]

for i in range(2, N+1):
    total[i][0] = min(total[i-1][1], total[i-1][2]) + cost[i][0]
    total[i][1] = min(total[i-1][0], total[i-1][2]) + cost[i][1]
    total[i][2] = min(total[i-1][0], total[i-1][1]) + cost[i][2]
print(min(total[N]))