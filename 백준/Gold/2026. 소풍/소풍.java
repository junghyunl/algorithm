import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	
	static int K, N;
	static int[] ans, count;
	static boolean flag;
	static boolean[] visited;
	static boolean[][] students;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		K = Integer.parseInt(st.nextToken());
		N = Integer.parseInt(st.nextToken());
		int F = Integer.parseInt(st.nextToken());
		students = new boolean[N][N];
		visited = new boolean[N];
		ans = new int[K];
		count = new int[N];
		
		for (int i = 0; i < F; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken())-1;
			int to = Integer.parseInt(st.nextToken())-1;
			students[from][to] = students[to][from] = true;
			count[from]++;
			count[to]++;
		}
		dfs(0,0);
		if (!flag) System.out.println(-1);
	}
	static void dfs(int cur, int depth) {
		if (flag) return;
		if (depth == K) {
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < K; i++) {
				sb.append(ans[i]).append("\n");
			}
			System.out.println(sb);
			flag = true;
			return;
		}
		for (int i = cur; i < N; i++) {
			if (count[i]+1 >= K && check(cur, i)) {
				visited[i] = true;
				ans[depth] = i+1;
				dfs(i+1, depth+1);
				visited[i] = false;
			}
		}
	}
	static boolean check(int cur, int to) {
		for (int i = 0; i < cur; i++) {
			if (visited[i] && !students[i][to]) return false;
		}
		return true;
	}
}
