import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {

	static int N, cnt, ansNum, ansCnt;
	static int[][] rooms;
	static final int[] dy = {-1,1,0,0};
	static final int[] dx = {0,0,-1,1};
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
	
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			rooms = new int[N][N];
			ansNum = Integer.MAX_VALUE; ansCnt = 0;
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					rooms[i][j] = Integer.parseInt(st.nextToken());
				}
			}
			
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					cnt = 0;
					dfs(i,j);
					if (cnt-rooms[i][j] > ansCnt) {
						ansNum = rooms[i][j];
						ansCnt = cnt-rooms[i][j];
					}else if (cnt-rooms[i][j] == ansCnt) {
						ansNum = Math.min(ansNum, rooms[i][j]);
					}
				}
			}
			
			System.out.println("#" + tc + " " + ansNum + " " + (ansCnt+1));
		}
	}
	
	public static void dfs(int y, int x) {
		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			
			if (ny > -1 && ny < N && nx > -1 && nx < N && rooms[ny][nx] == rooms[y][x]+1) {
				dfs(ny,nx);
				cnt = Math.max(cnt, rooms[ny][nx]);
			}
		}
	}
}