import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static int[] distance;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		int X = Integer.parseInt(st.nextToken());
		
		List<Node>[] fromAdjList = new ArrayList[N+1];
		List<Node>[] toAdjList = new ArrayList[N+1];
		for (int i = 0; i < N+1; i++) {
			fromAdjList[i] = new ArrayList<>();
			toAdjList[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			
			fromAdjList[from].add(new Node(to, weight));
			toAdjList[to].add(new Node(from, weight));
		}
		
		distance = new int[N+1];
		dijkstra(fromAdjList, X);
		dijkstra(toAdjList, X);
		
		int ans = 0;
		for (int i = 1; i < N+1; i++) {
			ans = Math.max(ans, distance[i]);
		}
		System.out.println(ans);
	}
	static void dijkstra(List<Node>[] list, int start) {
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		boolean[] visited = new boolean[N+1];
		minDistance[start] = 0;
		int min = 0, stop = 0;
		
		for (int i = 0; i < N; i++) {
			min = Integer.MAX_VALUE;
			stop = -1;
			
			for (int j = 1; j < N+1; j++) {
				if (!visited[j] && minDistance[j] < min) {
					min = minDistance[j];
					stop = j;
				}
			}
			if (stop == -1) break;
			visited[stop] = true;
			
			for (Node node : list[stop]) {
				if (minDistance[node.to] > min + node.weight) {
					minDistance[node.to] = min + node.weight;
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
