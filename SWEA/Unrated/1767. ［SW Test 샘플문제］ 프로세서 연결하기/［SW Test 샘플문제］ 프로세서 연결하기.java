import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, R, maxCnt, ans;
	static int[][] map;
	static int[] dy = {-1,1,0,0};
	static int[] dx = {0,0,-1,1};
	static List<Point> cores;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			map = new int[N][N];
			maxCnt = 0; ans = Integer.MAX_VALUE;
			
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
				}
			}
			
			cores = new ArrayList<>();
			for (int i = 1; i < N-1; i++) { // 가장자리 코어 제외하고 추가
				for (int j = 1; j < N-1; j++) {
					if (map[i][j] == 1) cores.add(new Point(i,j));
				}
			}
			R = cores.size();
			
			bt(0,0,0);
			System.out.println("#" + tc + " " + ans);
		}
		
	}	
	static void bt(int depth, int coreCnt, int len) {
		if (coreCnt + R - depth < maxCnt || (coreCnt + R - depth == maxCnt && len >= ans)) return;
		if (depth == R) {
			if (coreCnt == maxCnt) {
				ans = Math.min(ans, len);
			}else {
				maxCnt = coreCnt;
				ans = len;
			}
			return;
		}
		int y = cores.get(depth).x;
		int x = cores.get(depth).y;
		for (int i = 0; i < 4; i++) {
			if (check(y,x,i)) {
				int l = fill(y, x, i, 1);
				bt(depth+1, coreCnt+1, len+l);
				fill(y, x, i, 0);
			}
		}
		bt(depth+1, coreCnt, len);
	}
	static boolean check(int y, int x, int dr) {
		int ny = y, nx = x;
		while (true) {
			ny += dy[dr];
			nx += dx[dr];
			if (ny < 0 || ny >= N || nx < 0 || nx >= N) return true;
			if (map[ny][nx] == 1) return false;
		}
	}
	static int fill(int y, int x, int dr, int num) {
		int ny = y, nx = x, l = 0;
		while (true) {
			ny += dy[dr];
			nx += dx[dr];
			if (ny < 0 || ny >= N || nx < 0 || nx >= N) break;
			map[ny][nx] = num;
			l++;
		}
		return l;
	}
}
