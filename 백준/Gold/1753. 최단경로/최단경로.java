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
	static StringBuilder ans;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		int S = Integer.parseInt(br.readLine());
		ans = new StringBuilder();
		
		List<Node>[] adjList = new ArrayList[N+1];
		for (int i = 0; i < N+1; i++) {
			adjList[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			adjList[from].add(new Node(to, weight));
		}
		dijkstra(adjList, S);
		System.out.println(ans);
	}
	static void dijkstra(List<Node>[] list, int start) {
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> a.weight - b.weight);
		pq.offer(new Node(start, 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (cur.weight > minDistance[cur.to]) continue;
			
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		for (int i = 1; i < N+1; i++) {
			ans.append(minDistance[i] == Integer.MAX_VALUE ? "INF" : minDistance[i]).append("\n");
		}
	}
	static class Node {
		int to, weight;
		public Node(int to, int weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}
