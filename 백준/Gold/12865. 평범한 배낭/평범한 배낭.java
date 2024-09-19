import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		
		List<Stuff> stuffs = new ArrayList<>();
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			stuffs.add(new Stuff(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())));
		}
		
		int[] dp = new int[K+1];
		Arrays.fill(dp, -1);
		dp[0] = 0;
		
		for (int i = 0; i < N; i++) {
			int w = stuffs.get(i).weight;
			int v = stuffs.get(i).value;
			for (int j = K-w; j > -1; j--) {
				if (dp[j] > -1) dp[j+w] = Math.max(dp[j+w], dp[j] + v);
			}
		}
		
		int ans = 0;
		for (int i = 0; i < K+1; i++) {
			ans = Math.max(ans, dp[i]);
		}
		System.out.println(ans);
	}
	static class Stuff {
		int weight, value;
		public Stuff(int weight, int value) {
			this.weight = weight;
			this.value = value;
		}
	}
}
