import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static int[][] cost;
	static int[][] dp;
	static int INF = 16000000;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		N = Integer.parseInt(br.readLine());
		cost = new int[N][N];
		dp = new int[N][1<<N];
		for (int i = 0; i < N; i++) {
			Arrays.fill(dp[i], INF);
		}
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				cost[i][j] = Integer.parseInt(st.nextToken());
			}  
		}
		
		System.out.println(tsp(0,1));
		
	}
	static int tsp(int cur, int visited) {
		if (visited == (1<<N)-1) return cost[cur][0] == 0 ? 1000000 : cost[cur][0];
		if (dp[cur][visited] != INF) return dp[cur][visited];
		
		for (int i = 1; i < N; i++) {
			if ((visited & 1<<i) == 0 && cost[cur][i] > 0) {
				dp[cur][visited] = Math.min(dp[cur][visited], tsp(i, visited | 1<<i) + cost[cur][i]);
			}
		}
		
		return dp[cur][visited];
	}
}
