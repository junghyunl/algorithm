import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, Y;
	static int[] distance;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		List<Node>[] adjFromList = new ArrayList[N+1];
		List<Node>[] adjtoList = new ArrayList[N+1];
		
		for (int i = 0; i < N+1; i++) {
			adjFromList[i] = new ArrayList<>();
			adjtoList[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			
			adjFromList[from].add(new Node(to, weight));
			adjtoList[to].add(new Node(from, weight));
		}
		
		st = new StringTokenizer(br.readLine());
		int X = Integer.parseInt(st.nextToken());
		Y = Integer.parseInt(st.nextToken());
		int Z = Integer.parseInt(st.nextToken());
		
		int yAns = getYDistance(adjFromList, X);
		yAns += getYDistance(adjtoList, Z);
		if (yAns <= 0) yAns = -1;
		
		distance = new int[N+1];
		getNotYDistance(adjFromList, X);
		getNotYDistance(adjtoList, Z);
		
		int notYAns = Integer.MAX_VALUE;
		for (int i = 1; i < Y; i++) {
			if (distance[i] > 0) notYAns = Math.min(notYAns, distance[i]);
		}
		for (int i = Y+1; i < N+1; i++) {
			if (distance[i] > 0) notYAns = Math.min(notYAns, distance[i]);
		}
		if (notYAns == Integer.MAX_VALUE) notYAns = -1;
		
		System.out.println(yAns + " " + notYAns);
		
	}
	static int getYDistance(List<Node>[] list, int start) {
		boolean[] visited = new boolean[N+1];
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.weight, b.weight));
		pq.offer(new Node(start, 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (visited[Y]) break;
			if (visited[cur.to]) continue;
			visited[cur.to] = true;
			
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		
		return minDistance[Y];
	}
	static void getNotYDistance(List<Node>[] list, int start) {
		boolean[] visited = new boolean[N+1];
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		minDistance[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.weight, b.weight));
		pq.offer(new Node(start, 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if(visited[cur.to]) continue;
			visited[cur.to] = true;
			
			for (Node node : list[cur.to]) {
				if (node.to == Y) continue;
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
		int to, weight;
		public Node(int to, int weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}