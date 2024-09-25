import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, P;
	static int[] stop;
	static long[][] distance, dp;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		List<Node>[] adjList = new ArrayList[N+1];
		for (int i = 0; i < N+1; i++) {
			adjList[i] = new ArrayList<>();
		}
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			adjList[from].add(new Node(to,  weight));
			adjList[to].add(new Node(from,  weight));
		}
		
		st = new StringTokenizer(br.readLine());
		int S = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());
		P = Integer.parseInt(br.readLine());
		stop = new int[P+2];
		stop[0] = S; stop[P+1] = E;
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < P; i++) {
			stop[i+1] = Integer.parseInt(st.nextToken());
		}
		
		distance = new long[P+2][P+2];
		dp = new long[P+1][1<<(P+1)];
		for (int i = 0; i < P+1; i++) {
			Arrays.fill(dp[i], -1);
		}
		
		for (int i = 1; i < P+1; i++) {
			dijkstra(adjList, i);
		}
		long ans = dfs(0,1);
		System.out.println(ans == Long.MAX_VALUE ? -1 : ans);
	}
	static void dijkstra(List<Node>[] list, int start) {
		long[] minDistance = new long[N+1];
		Arrays.fill(minDistance, Long.MAX_VALUE);
		minDistance[stop[start]] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Long.compare(a.weight, b.weight));
		pq.offer(new Node(stop[start], 0));
		
		while (!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (cur.weight > minDistance[cur.to]) continue;
			
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					 pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		for (int i = 0; i < P+2; i++) {
			distance[i][start] = distance[start][i] = (minDistance[stop[i]] == Long.MAX_VALUE) ? 0 : minDistance[stop[i]];
		}
	}
	static long dfs(int cur, int visited) {
		if (visited == (1<<(P+1))-1) return distance[cur][P+1] == 0 ? Long.MAX_VALUE : distance[cur][P+1];
		if (dp[cur][visited] > -1) return dp[cur][visited];
		
		long res = Long.MAX_VALUE;
		for (int i = 1; i < P+1; i++) {
			if ((visited & 1<<i) == 0 && distance[cur][i] > 0) {
				long tmp = res;
				res = Math.min(res, dfs(i, visited|1<<i) + distance[cur][i]);
				if (res < 0) res = tmp;
			}
		}
		dp[cur][visited] = res;
		return res;
	}
	static class Node {
		int to; long weight;
		public Node(int to, long weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}
