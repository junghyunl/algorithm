import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int INF = 131072;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 0; tc < T; tc++) {
			int N = Integer.parseInt(br.readLine());
			Point[] point = new Point[N+2];
			int[][] dp = new int[N+2][N+2];
			
			for (int i = 0; i < N+2; i++) {
				Arrays.fill(dp[i], INF);
				st = new StringTokenizer(br.readLine());
				point[i] = new Point(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
			}
			
			for (int i = 0; i < N+1; i++) {
				for (int j = i+1; j < N+2; j++) {
					if (Math.abs(point[i].x-point[j].x)+Math.abs(point[i].y-point[j].y) < 1001) {
						dp[i][j] = dp[j][i] = Math.abs(point[i].x-point[j].x)+Math.abs(point[i].y-point[j].y);
					}
				}
			}
			
			for (int i = 0; i < N+2; i++) {
				for (int j = 0; j < N+2; j++) {
					if (i==j) continue;
					for (int k = 0; k < N+2; k++) {
						if (i==k || j==k) continue;
						dp[j][k] = Math.min(dp[j][k], dp[j][i]+dp[i][k]);
					}
				}
			}
			
			System.out.println(dp[0][N+1] == INF ? "sad" : "happy");
		}
	}
}
