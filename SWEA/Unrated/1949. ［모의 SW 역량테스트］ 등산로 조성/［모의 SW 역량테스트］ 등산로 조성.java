import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, K, ans;
	static int[][] mountain;
	static boolean[][] visited;
	static int[] dy = {-1,1,0,0}, dx = {0,0,-1,1};

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			K = Integer.parseInt(st.nextToken());
			mountain = new int[N][N];
			visited = new boolean[N][N];
			ans = 1;
			
			int maxHeight = 0;
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					mountain[i][j] = Integer.parseInt(st.nextToken());
					maxHeight = Math.max(maxHeight, mountain[i][j]);
				}
			}
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					if (mountain[i][j] == maxHeight) dfs(i,j,1,false);
				}
			}
			
			sb.append("#").append(tc).append(" ").append(ans).append("\n");
		}
		System.out.println(sb);
	}
	static void dfs(int y, int x, int depth, boolean isDig) {
		visited[y][x] = true;
		
		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny >= N || nx < 0 || nx >= N || visited[ny][nx] || mountain[y][x] <= mountain[ny][nx]-K ||(isDig && mountain[y][x] <= mountain[ny][nx])) {
				ans = Math.max(ans, depth);
				continue;
			}
			if (mountain[y][x] > mountain[ny][nx]) dfs(ny,nx,depth+1,isDig);
			else if (!isDig && mountain[y][x] > mountain[ny][nx]-K) {
				int tmp = mountain[ny][nx];
				mountain[ny][nx] = mountain[y][x]-1;
				dfs(ny,nx,depth+1,true);
				mountain[ny][nx] = tmp;
			}
		}
		visited[y][x] = false;
	}
}