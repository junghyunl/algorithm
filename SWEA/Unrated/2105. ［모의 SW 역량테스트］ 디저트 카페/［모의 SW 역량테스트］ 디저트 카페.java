import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, sr, sc, ans;
	static int[][] map;
	static int[] dr = {1,1,-1,-1};
	static int[] dc = {-1,1,1,-1};
	static boolean[] desserts;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			map = new int[N][N];
			ans = -1;
			
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
				}
			}
			
			for (int i = 0; i < N-2; i++) {
				for (int j = 1; j < N-1; j++) {
					desserts = new boolean[101];
					sr = i; sc = j;
					dfs(i,j,0,0);
				}
			}
			System.out.println("#" + tc + " " + ans);
		}
	}
	static void dfs(int r, int c, int d, int cnt) {
		if (d == 3 && cnt <= ans/2) return;
		if (r == sr && c == sc && cnt > 0) {
			ans = Math.max(ans, cnt);
			return;
		}
		if (r < 0 || r >= N || c < 0 || c >= N || desserts[map[r][c]]) return;
		desserts[map[r][c]] = true;
		dfs(r + dr[d], c + dc[d], d, cnt+1);
		if (d < 3) dfs(r + dr[d+1], c + dc[d+1], d+1, cnt+1);
		desserts[map[r][c]] = false;
	}
}
