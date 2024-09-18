import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, X, Z, P;
	static long ans = Long.MAX_VALUE;
	static int[] pNumbers, input;
	static long[][] distance;

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
			adjList[to].add(new Node(from, weight));
		}
		
		st = new StringTokenizer(br.readLine());
		X = Integer.parseInt(st.nextToken());
		Z = Integer.parseInt(st.nextToken());
		
		P = Integer.parseInt(br.readLine());
		pNumbers = new int[P];
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < P; i++) {
			pNumbers[i] = Integer.parseInt(st.nextToken());
		}
		
		distance = new long[P+2][P+2];
		input = new int[P];
		for (int i = 0; i < P; i++) {
			dijkstra(adjList, i);
			input[i] = i;
		}
		permutation(0);
		System.out.println(ans == Long.MAX_VALUE ? -1 : ans);
	}
	static void dijkstra(List<Node>[] list, int start) {
		long[] minDistance = new long[N+1];
		Arrays.fill(minDistance, Long.MAX_VALUE);
		minDistance[pNumbers[start]] = 0;
		
		PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Long.compare(a.weight, b.weight));
		pq.offer(new Node(pNumbers[start], 0));
		
		while(!pq.isEmpty()) {
			Node cur = pq.poll();
			
			if (minDistance[cur.to] < cur.weight) continue;
			 
			for (Node node : list[cur.to]) {
				if (minDistance[node.to] > cur.weight + node.weight) {
					minDistance[node.to] = cur.weight + node.weight;
					pq.offer(new Node(node.to, minDistance[node.to]));
				}
			}
		}
		for (int i = 0; i < P; i++) {
			distance[start][i] = distance[i][start] = minDistance[pNumbers[i]];
		}

		distance[start][P] = distance[P][start] = minDistance[X];
		distance[start][P+1] = distance[P+1][start] = minDistance[Z];
	}
	static void permutation(int depth) {
		if (depth == 3) {
			if (distance[input[0]][P] == Long.MAX_VALUE || 
				distance[input[0]][input[1]] == Long.MAX_VALUE || 
				distance[input[1]][input[2]] == Long.MAX_VALUE|| 
				distance[input[2]][P+1] == Long.MAX_VALUE) return;
			ans = Math.min(ans, distance[input[0]][P] + distance[input[0]][input[1]] + distance[input[1]][input[2]] + distance[input[2]][P+1]);
			return;
		}
		for (int i = depth; i < P; i++) {
			swap(i, depth);
			permutation(depth+1);
			swap(depth, i);
		}
	}
	static void swap(int i, int depth) {
		int tmp = input[i];
		input[i] = input[depth];
		input[depth] = tmp;
	}
	static class Node {
		int to; long weight; 
		public Node(int to, long weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}