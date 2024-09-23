import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		
		int[][][] dp = new int[N+1][10][1024];
		for (int i = 1; i < 10; i++) {
			dp[1][i][1<<i] = 1;
		}
		for (int i = 2; i <= N; i++) {	
			for (int k = 0; k < 1024; k++) {
				dp[i][1][k | 1<<1] = (dp[i][1][k | 1<<1]+dp[i-1][0][k])%1000000000;
			}
			for (int j = 1; j < 9; j++) {	
				for (int k = 0; k < 1024; k++) {
					dp[i][j-1][k | 1<<(j-1)] = (dp[i][j-1][k | 1<<(j-1)]+dp[i-1][j][k])%1000000000;
					dp[i][j+1][k | 1<<(j+1)] = (dp[i][j+1][k | 1<<(j+1)]+dp[i-1][j][k])%1000000000;
				}
			}
			for (int k = 0; k < 1024; k++) {
				dp[i][8][k | 1<<8] = (dp[i][8][k | 1<<8]+dp[i-1][9][k])%1000000000;
			}
		}
		int ans = 0;
		for (int i = 0; i < 10; i++) {
			ans = (ans+dp[N][i][1023])%1000000000;
		}
		System.out.println(ans);
	}
}