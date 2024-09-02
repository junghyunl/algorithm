import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
	
	static int N, ans, sn;
	static int[][] map;
	static List<Node>[] list;
	static boolean[] visited;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		N = Integer.parseInt(br.readLine());
		ans = Integer.MAX_VALUE;
		map = new int[N][N];
		list = new ArrayList[N];
		visited = new boolean[N];
		
		for (int i = 0; i < N; i++) {
			list[i] = new ArrayList<>();
		} 
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				map[i][j] = Integer.parseInt(st.nextToken());
				if (map[i][j] > 0) {
					list[i].add(new Node(j, map[i][j]));
				}
			}
		}
		
		for (int i = 0; i < N; i++) {
			sn = i;
			dfs(i, 0);
		}
		
		
		System.out.println(ans);
	}
	
	static void dfs(int cur, int cost) {
		if (visited[cur]) {
			if (cur == sn && visitAll()) ans = Math.min(ans, cost);
			return;
		}
		visited[cur] = true;
		for (Node temp : list[cur]) {
			dfs(temp.vertex, cost+temp.weight);
		}
		visited[cur] = false;
	}
	static boolean visitAll() {
		for (int i = 0; i < N; i++) {
			if (!visited[i]) return false;
		}
		return true;
	}
	static class Node {
		int vertex;
		int weight;
		public Node(int vertex, int weight) {
			this.vertex = vertex;
			this.weight = weight;
		}
	}
}