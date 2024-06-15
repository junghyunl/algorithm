k, n = map(int, input().split())
lan = []

for _ in range(k):
    lan.append(int(input()))

start = 1
end = max(lan)

result = 0
while start <= end:
    mid = (start + end)//2

    total = 0
    for i in lan:
        total += i//mid
    
    if total < n:
        end = mid - 1
    else:
        result = mid
        start = mid + 1

print(result)