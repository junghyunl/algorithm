import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, M, cnt, ans;
	static List<Integer>[] downList, upList;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			M = Integer.parseInt(br.readLine());
			downList = new ArrayList[N];
			upList = new ArrayList[N];
			ans = 0;
			
			for (int i = 0; i < N; i++) {
				downList[i] = new ArrayList<>();
				upList[i] = new ArrayList<>();
			}
			
			for (int i = 0; i < M; i++) {
				st = new StringTokenizer(br.readLine());
				int from = Integer.parseInt(st.nextToken())-1;
				int to = Integer.parseInt(st.nextToken())-1;
				downList[from].add(to);
				upList[to].add(from);
			}

			for (int i = 0; i < N; i++) {
				boolean[] visited = new boolean[N];
				cnt = 1;
				downDfs(i, visited);
				upDfs(i, visited);
				if (cnt == N) ans++;
			}
			
			sb.append("#").append(tc).append(" ").append(ans).append("\n");
		}
		System.out.println(sb);
	}
	static void downDfs(int cur, boolean[] visited) {
		visited[cur] = true;
		
		for (int i : downList[cur]) {
			if (!visited[i]) {
				downDfs(i, visited);
				cnt++;
			}
		}
	}
	static void upDfs(int cur, boolean[] visited) {
		visited[cur] = true;
		
		for (int i : upList[cur]) {
			if (!visited[i]) {
				upDfs(i, visited);
				cnt++;
			}
		}
	}
}