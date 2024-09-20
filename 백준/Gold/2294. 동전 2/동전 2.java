import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		int[] dp = new int[K+1];
		Arrays.fill(dp, Integer.MAX_VALUE);
		dp[0] = 0;
		
		for (int i = 0; i < N; i++) {
			int coin = Integer.parseInt(br.readLine());
			for (int j = 0; j < K+1-coin; j++) {
				if (dp[j] < Integer.MAX_VALUE) dp[j+coin] = Math.min(dp[j+coin], dp[j] + 1);
			}
		}
		System.out.println(dp[K] == Integer.MAX_VALUE ? -1 : dp[K]);
	}
	
}
