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
		ans = new StringBuilder();
		StringTokenizer st;
		
		N = Integer.parseInt(br.readLine());
		int M = Integer.parseInt(br.readLine());
		
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
		int S = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());
		
		getDistance(adjList, S, E);
		System.out.println(ans);
		
	}
	static void getDistance(List<Node>[] list, int start, int end) {
		int[] minDistance = new int[N+1];
		Arrays.fill(minDistance, Integer.MAX_VALUE);
		
		PriorityQueue<Path> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.weight, b.weight));
		pq.offer(new Path(start, 0, new ArrayList<>(Arrays.asList(start))));
		
		while(!pq.isEmpty()) {
			Path p = pq.poll();
		
			if (p.to == end) {
				int len = p.path.size();
				List<Integer> ansPath = p.path;
				ans.append(p.weight).append("\n").append(len).append("\n");
				for (int i = 0; i < len; i++) {
					ans.append(ansPath.get(i)).append(" ");
				}
				break;
			}
			if (p.weight > minDistance[p.to]) continue;
			
			for (Node node : list[p.to]) {
				if (minDistance[node.to] > p.weight + node.weight) {
					minDistance[node.to] = p.weight + node.weight;
					List<Integer> nodePath = new ArrayList<>(p.path);
					nodePath.add(node.to);
					pq.offer(new Path(node.to, minDistance[node.to], nodePath));
				}
			}
		}
	}
	static class Node {
		int to, weight;
		public Node(int to, int weight) {
			this.to = to;
			this.weight = weight;
		}
	}
	static class Path {
		int to, weight;
		List<Integer> path;
		public Path(int to, int weight, List<Integer> path) {
			this.to = to;
			this.weight = weight;
			this.path = path;
		}
	}
}