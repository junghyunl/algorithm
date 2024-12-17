import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int R, C;
	static char[][] cave;
	static boolean[][] visited;
	static int[] dy = {-1,1,0,0};
	static int[] dx = {0,0,-1,1};
	

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder ans = new StringBuilder();
		
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		cave = new char[R][C];
		
		for (int i = 0; i < R; i++) {
			String line = br.readLine();
			for (int j = 0; j < C; j++) {
				cave[i][j] = line.charAt(j);
			}
		}
		
		int N = Integer.parseInt(br.readLine());
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < N; i++) {
			int H = Integer.parseInt(st.nextToken());
			throwStick(H, i);
		}
		
		for (int i = 0; i < R; i++) {
			ans.append(new String(cave[i])).append("\n");
		}
		System.out.println(ans);
	}
	static void throwStick(int r, int order) {
		if (order%2 == 0) {
			for (int i = 0; i < C; i++) {
				if (cave[R-r][i] == 'x') {
					cave[R-r][i] = '.';
					check(R-r, i);
					return;
				}
			}
		} else {
			for (int i = C-1; i >= 0; i--) {
				if (cave[R-r][i] == 'x') {
					cave[R-r][i] = '.';
					check(R-r, i);
					return;
				}
			}
		}
	}
	static void check(int y, int x) {
		visited = new boolean[R][C];
		
		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny >= R || nx < 0 || nx >= C || cave[ny][nx] == '.' || visited[ny][nx]) continue;
			
			visited = new boolean[R][C];
			if (bfs(ny, nx) < R-1) {
				int height = getMinHeight();
				drop(height);
				return;
			}
		}
	}
	static int bfs(int y, int x) {
		Queue<Point> q = new ArrayDeque<>();
		q.offer(new Point(x, y));
		visited[y][x] = true;
		
		int maxHeight = y;
		while(!q.isEmpty()) {
			Point cur = q.poll();
			
			for (int i = 0; i < 4; i++) {
				int ny = cur.y + dy[i];
				int nx = cur.x + dx[i];
				
				if (ny < 0 || ny >= R || nx < 0 || nx >= C || cave[ny][nx] == '.' || visited[ny][nx]) continue;
				visited[ny][nx] = true;
				maxHeight = Math.max(maxHeight, ny);
				q.offer(new Point(nx, ny));
			}
		}
		
		return maxHeight;
	}
	static int getMinHeight() {
		int height = R;
		for (int i = 0; i < C; i++) {
			for (int j = R-1; j >= 0; j--) {
				if (visited[j][i]) {
					height = Math.min(height, R-1-j);
					for (int k = j+1; k < R; k++) {
						if (cave[k][i] == 'x') {
							height = Math.min(height, k-j-1);
							break;
						}
					}
					break;
				}
			}
		}
		return height;
	}
	static void drop(int height) {
		for (int i = 0; i < C; i++) {
			for (int j = R-1; j >= 0; j--) {
				if (visited[j][i]) {
					cave[j+height][i] = 'x';
					cave[j][i] = '.';
				}
			}
		}
	}
}