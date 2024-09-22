import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		int[] numbers = new int[N+1];
		StringTokenizer st = new StringTokenizer(br.readLine());
		numbers[0] = Integer.parseInt(st.nextToken());
		numbers[1] = Integer.parseInt(st.nextToken());
		for (int i = 2; i <= N; i++) {
			st = new StringTokenizer(br.readLine());
			st.nextToken();
			numbers[i] = Integer.parseInt(st.nextToken());
		}
		
		int[][] dp = new int[N+1][N+1];
		for (int i = 0; i <= N; i++) {
			Arrays.fill(dp[i], Integer.MAX_VALUE);
		}
		
		for (int i = 0; i < N; i++) {
		    dp[i][i+1] = 0;
		}
		for (int len = 2; len <= N; len++) {
		    for (int i = 0; i + len <= N; i++) {
		        for (int j = i+1; j < i + len; j++) {
		            dp[i][i+len] = Math.min(dp[i][i+len], dp[i][j] + dp[j][i+len] + numbers[i]*numbers[j]*numbers[i+len]);
		        }
		    }
		}
		System.out.println(dp[0][N]);
	}
}
