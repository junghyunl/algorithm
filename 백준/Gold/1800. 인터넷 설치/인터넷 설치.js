const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, P, K] = input[0].split(" ").map(Number);
const INF = 10001;
const adjList = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < P; i++) {
  const [from, to, cost] = input[i + 1].split(" ").map(Number);
  adjList[from].push({ to, cost });
  adjList[to].push({ to: from, cost });
}

const binarySearch = (list, start = 0, end = 1000000) => {
  let result = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (dijkstra(list, mid)) {
      start = mid + 1;
    } else {
      result = mid;
      end = mid - 1;
    }
  }
  return result;
};

const dijkstra = (list, cost) => {
  const minCnt = Array(N + 1).fill(INF);
  minCnt[1] = 0;

  const queue = [{ to: 1, cnt: 0 }];
  let idx = 0;

  while (idx < queue.length) {
    const cur = queue[idx++];

    if (cur.cnt > minCnt[cur.to]) continue;

    for (let next of list[cur.to]) {
      const cnt = next.cost > cost ? 1 : 0;
      if (minCnt[next.to] > cur.cnt + cnt) {
        minCnt[next.to] = cur.cnt + cnt;
        queue.push({ to: next.to, cnt: minCnt[next.to] });
      }
    }
  }
  return minCnt[N] > K;
};

const ans = binarySearch(adjList);
console.log(ans);