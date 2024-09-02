import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M, K, ans;
	static int[][] map;
	static List<Integer> area;
	static int[] dr = {-1,1,0,0};
	static int[] dc = {0,0,-1,1};

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
		map = new int[N][M];
		area = new ArrayList<>();
		
		for (int i = 0; i < K; i++) {
			st = new StringTokenizer(br.readLine());
			int sc = Integer.parseInt(st.nextToken());
			int sr = Integer.parseInt(st.nextToken());
			int ec = Integer.parseInt(st.nextToken())-1;
			int er = Integer.parseInt(st.nextToken())-1;
			
			for (int j = sr; j <= er; j++) {
				for (int k = sc; k <= ec; k++) {
					map[j][k] = 1;
				}
			}
		}
		
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				if (map[i][j] == 0) {
					ans = 1;
					dfs(i,j);
					area.add(ans);
				}
			}
		}
		Collections.sort(area);
		System.out.println(area.size());
		for (int i = 0; i < area.size(); i++) {
			System.out.print(area.get(i) + " ");
		}
	}
	static void dfs(int r, int c) {
		if (map[r][c] == 1) return;
		map[r][c] = 1;
		for (int i = 0; i < 4; i++) {
			int nr = r + dr[i];
			int nc = c + dc[i];
			if (nr < 0 || nr >= N || nc < 0 || nc >= M || map[nr][nc] == 1) continue;
			ans++;
			dfs(nr, nc);
		}
	}
}
