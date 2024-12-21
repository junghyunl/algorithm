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
	static int[][] firstStopOver;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder ans = new StringBuilder();
		
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		firstStopOver = new int[N+1][N+1];
		
		List<Node>[] adjList = new ArrayList[N+1];
		for (int i = 0; i < N+1; i++) {
			adjList[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int to = Integer.parseInt(st.nextToken());
			int from = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			adjList[to].add(new Node(from, weight));
			adjList[from].add(new Node(to, weight));
		}
		
		for (int i = 1; i < N+1; i++) {
			dijkstra(adjList, i);
			for (int j = 1; j < N+1; j++) {
				ans.append(firstStopOver[i][j] == 0 ? "-" : firstStopOver[i][j]).append(" ");
			}
			ans.append("\n");
		}
		
		System.out.println(ans);
	}
	static void dijkstra(List<Node>[] list, int start) {
		int[] minDist = new int[N+1];
		Arrays.fill(minDist, Integer.MAX_VALUE);
		minDist[start] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.weight, b.weight));
		pq.offer(new Node (start, 0));
		
		while (!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (minDist[cur.to] < cur.weight) continue;
			
			for (Node next : list[cur.to]) {
				if (minDist[next.to] > cur.weight + next.weight) {
					minDist[next.to] = cur.weight + next.weight;
					firstStopOver[start][next.to] = firstStopOver[start][cur.to] == 0 ? next.to : firstStopOver[start][cur.to];
					pq.offer(new Node(next.to, minDist[next.to]));
				}
			}
		}
	}
	static class Node {
		int to, weight;
		public Node(int to, int weight) {
			super();
			this.to = to;
			this.weight = weight;
		}
	}
}