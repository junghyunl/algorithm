import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String A = br.readLine();
		String B = br.readLine();
		int N = A.length();
		int M = B.length();
		int[][] dp = new int[N+1][M+1];
		
		for (int i = 1; i < N+1; i++) {
			for (int j = 1; j < M+1; j++) {
				if (A.charAt(i-1) == B.charAt(j-1)) {
					dp[i][j] = dp[i-1][j-1] + 1;
				}else {
					dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
				}
			}
		}
		
		String ans = "";
		int i = N, j = M;
		while (i > 0 && j > 0) {
			if (dp[i][j]-1 == dp[i-1][j-1]) {
				if (A.charAt(i-1) == B.charAt(j-1)) {
					ans = A.charAt(i-1) + ans;
					i--;
					j--;
				}else {
					if (dp[i-1][j] > dp[i][j-1]) {
						i--;
					}else {
						j--;
					}
				}
			}else {
				j--;
			}
		}
		
		System.out.println(dp[N][M]);
		if (dp[N][M] > 0) System.out.println(ans);
	}
}
