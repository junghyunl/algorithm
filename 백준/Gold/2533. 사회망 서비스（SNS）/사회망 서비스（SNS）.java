import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
	
	static int N, ans;
	static ArrayList<Integer>[] adjList;
	static boolean[] visited;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		N = Integer.parseInt(br.readLine());
		adjList = new ArrayList[N+1];
		for (int i = 0; i < N+1; i++) {
			adjList[i] = new ArrayList<>();
		}
		visited = new boolean[N+1];
		
		for (int i = 0; i < N-1; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			adjList[a].add(b);
			adjList[b].add(a);
		}
		
		dfs(1);
		System.out.println(ans);
	}
	static boolean dfs(int node) {
		visited[node] = true;
		boolean isEarly = false;
		for (int next : adjList[node]) {
			if (visited[next]) continue;
			if (!dfs(next)) isEarly = true;
		}
		if (isEarly) ans++;
		return isEarly;
	}
}