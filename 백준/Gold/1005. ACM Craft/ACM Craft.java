import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder ans = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 0; tc < T; tc++) {
			st = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(st.nextToken());
			int K = Integer.parseInt(st.nextToken());
			
			int[] time = new int[N+1];
			st = new StringTokenizer(br.readLine());
			for (int i = 1; i < N+1; i++) {
				time[i] = Integer.parseInt(st.nextToken());
			}
			
			ArrayList<Integer>[] adjList = new ArrayList[N+1];
			for (int i = 0; i < N+1; i++) {
				adjList[i] = new ArrayList<>();
			}
			
			int[] indegree = new int[N+1];
			for (int i = 0; i < K; i++) {
				st = new StringTokenizer(br.readLine());
				int from = Integer.parseInt(st.nextToken());
				int to = Integer.parseInt(st.nextToken());
				adjList[from].add(to);
				indegree[to]++;
			}
			
			int W =  Integer.parseInt(br.readLine());
			
			PriorityQueue<Node> pq = new PriorityQueue<>((a,b) -> Integer.compare(a.totalTime, b.totalTime));
			for (int i = 1; i < N+1; i++) {
				if (indegree[i] == 0) {
					pq.offer(new Node(time[i], i));
				}
			}
			
			while (!pq.isEmpty()) {
				Node cur = pq.poll();
				if (cur.to == W) {
					ans.append(cur.totalTime).append("\n");
					break;
				}
				
				for (int next : adjList[cur.to]) {
					indegree[next]--;
					if (indegree[next] == 0) pq.offer(new Node(cur.totalTime+time[next], next));
				}
			}
		}
		System.out.println(ans);
	}
	static class Node {
		int totalTime, to;
		public Node(int totalTime, int to) {
			super();
			this.totalTime = totalTime;
			this.to = to;
		}
	}
}