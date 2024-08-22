import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	static int R, C, ans;
	static boolean arrive;
	static char[][] map;
	static final int[] dr = {-1,0,1};
	static final int[] dc = {1,1,1};
 	public static void main(String[] args) throws IOException{
 		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		map = new char[R][C];
		for (int i = 0; i < R; i++) {
			String line = br.readLine();
			for (int j = 0; j < C; j++) {
				map[i][j] = line.charAt(j);
			}
		}
		
		for (int i = 0; i < R; i++) {
			arrive = false;
			dfs(i,0);
		}
		
		System.out.println(ans);
	}
 	public static void dfs(int r, int c) {
 		if (c == C-1) {
 			ans++;
 			arrive = true;
 			return;
 		}
 		for (int i = 0; i < 3; i++) {
			int nr = r + dr[i];
			int nc = c + dc[i];
			if (arrive) return;
			if (nr > -1 && nr < R && nc > -1  && nc < C && map[nr][nc] == '.') {
				map[nr][nc] = 'o';
				dfs(nr,nc);
			}
		}
 	}
}