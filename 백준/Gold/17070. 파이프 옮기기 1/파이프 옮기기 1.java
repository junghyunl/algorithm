import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static int[][] house;
	static int[] dy = {0,1,1};
	static int[] dx = {1,1,0};

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		N = Integer.parseInt(br.readLine());
		house = new int[N][N];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				house[i][j] = -Integer.parseInt(st.nextToken());
			}
		}
		dfs(0,1,0);
		System.out.println(house[N-1][N-1] == -1 ? 0 : house[N-1][N-1]);
	}
	
	public static void dfs(int y, int x, int dr) {
		for (int i = 0; i < 3; i++) {
			if(Math.abs(dr - i) >= 2) continue;
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny >= N || nx >= N || house[ny][nx] == -1) continue;
			if (i == 1 && (house[ny-1][nx] == -1 || house[ny][nx-1] == -1)) continue;
			house[ny][nx]++;
			dfs(ny, nx, i);
		}
	}
}