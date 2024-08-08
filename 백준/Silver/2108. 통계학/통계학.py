import sys

N = int(sys.stdin.readline())
num = []
cnt = [0]*8001
for _ in range(N):
    a = int(sys.stdin.readline())
    num.append(a)
    cnt[a+4000] += 1
num.sort()

print(int(round(sum(num)/N, 0)))
print(num[int(N/2)])

val = max(cnt)
idx = [index - 4000 for index, value in enumerate(cnt) if value == val]
print(idx[1] if len(idx) > 1 else idx[0])
print(max(num)-min(num))