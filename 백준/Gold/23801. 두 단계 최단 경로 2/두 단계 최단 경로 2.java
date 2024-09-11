import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static long[] distance;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		List<Node>[] adjList = new ArrayList[N+1];
		distance = new long[N+1];
		
		for (int i = 0; i < N+1; i++) {
			adjList[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			
			adjList[from].add(new Node(to, weight));
			adjList[to].add(new Node(from, weight));
		}
		
		st = new StringTokenizer(br.readLine());
		int X = Integer.parseInt(st.nextToken());
		int Z = Integer.parseInt(st.nextToken());
		
		int P = Integer.parseInt(br.readLine());
		int[] pArr = new int[P];
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < P; i++) {
			pArr[i] = Integer.parseInt(st.nextToken());
		}
		
		getMinDistance(adjList, X);
		getMinDistance(adjList, Z);
		
		long ans = Long.MAX_VALUE;
		
		for(int p : pArr) {
			if (distance[p] > 0) ans = Math.min(ans, distance[p]);
		}
		
		System.out.println(ans == Long.MAX_VALUE ? -1 : ans);
		
	}
	static void getMinDistance(List<Node>[] list, int start) {
		long[] minDistance = new long[N+1];
		boolean[] visited = new boolean[N+1];
		Arrays.fill(minDistance, Long.MAX_VALUE);
		Arrays.fill(visited, false);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Long.compare(a.weight, b.weight));
		pq.offer(new Node(start, 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			if (visited[cur.to]) continue;
			visited[cur.to] = true;
			
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		
		for (int i = 1; i < N+1; i++) {
			distance[i] += minDistance[i];
		}
	}
	static class Node {
		int to; long weight;
		public Node(int to, long weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}
