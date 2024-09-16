import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int ans;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int S = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());
		
		List<Node>[] adjList = new ArrayList[100001];
		for (int i = 0; i < 100001; i++) {
			adjList[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < 100000; i++) adjList[i].add(new Node(i+1, 1));
		for (int i = 1; i < 100001; i++) adjList[i].add(new Node(i-1, 1));
		for (int i = 1; i < 50001; i++) adjList[i].add(new Node(2*i, 0));
		
		System.out.println(dijkstra(adjList, S, E));
	}
	static int dijkstra(List<Node>[] list, int start, int end) {
		int[] minDistance = new int[100001];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> a.weight - b.weight);
		pq.offer(new Node(start, 0));
		
		while (!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (cur.to == end) {
				return cur.weight;
			}
			
			if (cur.weight > minDistance[cur.to]) continue;
			
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		return -1;
	}
	static class Node {
		int to, weight;
		public Node(int to, int weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}
