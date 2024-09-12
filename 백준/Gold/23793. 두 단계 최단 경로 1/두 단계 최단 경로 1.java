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
			
			adjList[from].add(new Node(to, weight));
		}
		
		st = new StringTokenizer(br.readLine());
		int X = Integer.parseInt(st.nextToken());
		int Y = Integer.parseInt(st.nextToken());
		int Z = Integer.parseInt(st.nextToken());
		
		int yAns = getYDistance(adjList, X, Y);
		yAns += getYDistance(adjList, Y, Z);
		if (yAns <= 0) yAns = -1;
		
		int notYAns = getNotYDistance(adjList, X, Y, Z);
		if (notYAns == Integer.MAX_VALUE) notYAns = -1;
		
		System.out.println(yAns + " " + notYAns);
		
	}
	static int getYDistance(List<Node>[] list, int start, int end) {
		boolean[] visited = new boolean[N+1];
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.weight, b.weight));
		pq.offer(new Node(start, 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (visited[end]) break;
			if (visited[cur.to]) continue;
			visited[cur.to] = true;
			
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		
		return minDistance[end];
	}
	static int getNotYDistance(List<Node>[] list, int start, int stop, int end) {
		boolean[] visited = new boolean[N+1];
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.weight, b.weight));
		pq.offer(new Node(start, 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (visited[end]) break;
			if (visited[cur.to]) continue;
			visited[cur.to] = true;
			
			for (Node node : list[cur.to]) {
				if (node.to == stop) continue;
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		return minDistance[end];
	}
	static class Node {
		int to, weight;
		public Node(int to, int weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}