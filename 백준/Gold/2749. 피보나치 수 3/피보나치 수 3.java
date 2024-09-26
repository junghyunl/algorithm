import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		long N = Long.parseLong(br.readLine());
		int[] dp = new int[1500000];
		dp[1] = 1;
		dp[2] = 1;
		for (int i = 3; i < 1500000; i++) {
			dp[i] = (dp[i-1] + dp[i-2])%1000000;
		}
		System.out.println(dp[(int)(N%1500000)]);
	}
}