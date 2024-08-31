import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static int[][] cnt;
	static List<Integer> base;
	static Queue<Integer> q;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		N = Integer.parseInt(br.readLine());
		int M = Integer.parseInt(br.readLine());
		
		cnt = new int[N+1][N+1];
		base = new ArrayList<>();
		List<Edge>[] edges = new ArrayList[N+1];
		int[] degree = new int[N+1];
		
		for (int i = 1; i < N+1; i++) {
			edges[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int to = Integer.parseInt(st.nextToken());
			int from = Integer.parseInt(st.nextToken());
			
			edges[from].add(new Edge(to, Integer.parseInt(st.nextToken())));
			degree[to]++;
		}
		
		q = new LinkedList<>();
		for (int i = 1; i < N+1; i++) {
			if(degree[i] == 0) {
				q.offer(i);
				cnt[i][i] = 1;
				base.add(i);
			}
		}
				
		while(!q.isEmpty()) {
			int cur = q.poll();
			
			for (Edge e : edges[cur]) {
				baseCount(cur, e);
				if (--degree[e.v] == 0) q.offer(e.v);
			}
		}
			
		StringBuilder ans = new StringBuilder();
		for (int b : base) {
			ans.append(b + " " + cnt[N][b] + "\n");
		}
		System.out.println(ans);
	}
	static void baseCount(int from, Edge e) {
		for (int b : base) {
			cnt[e.v][b] += e.weight*cnt[from][b];
		}
	}	
	static class Edge {
		int v, weight;

		public Edge(int v, int weight) {
			this.v = v;
			this.weight = weight;
		}
	}
}
