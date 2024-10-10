import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int V = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());
		
		int[][] dp = new int[V][V];
		for (int i = 0; i < V; i++) {
			Arrays.fill(dp[i], Integer.MAX_VALUE);
		}
		for (int i = 0; i < E; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken())-1;
			int to = Integer.parseInt(st.nextToken())-1;
			int dist = Integer.parseInt(st.nextToken());
			dp[from][to] = dist;
		}
		
		for (int i = 0; i < V; i++) {
			for (int j = 0; j < V; j++) {
				for (int k = 0; k < V; k++) {
					if (dp[j][i] < Integer.MAX_VALUE && dp[i][k] < Integer.MAX_VALUE) {
						dp[j][k] = Math.min(dp[j][k], dp[j][i]+dp[i][k]);
					}
				}
			}
		}
		
		int ans = Integer.MAX_VALUE;
		for (int i = 0; i < V; i++) {
			for (int j = 0; j < V; j++) {
				if (dp[i][j] == Integer.MAX_VALUE || dp[j][i] == Integer.MAX_VALUE) continue;
				ans = Math.min(ans, dp[i][j]+dp[j][i]);
			}
		}
		
		System.out.println(ans == Integer.MAX_VALUE ? -1 : ans);
	}
}
