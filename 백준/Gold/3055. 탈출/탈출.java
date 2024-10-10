import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] dy = {-1,1,0,0};
		int[] dx = {0,0,-1,1};
		
		int R = Integer.parseInt(st.nextToken()); 
		int C = Integer.parseInt(st.nextToken()); 
		char[][] map = new char[R][C];
		ArrayDeque<Point> q = new ArrayDeque<>();
		
		int er = 0, ec = 0;
		for (int i = 0; i < R; i++) {
			String line = br.readLine();
			for (int j = 0; j < C; j++) {
				map[i][j] = line.charAt(j);
				if (map[i][j] == '*') q.addFirst(new Point(i,j,0));
				else if (map[i][j] == 'S') q.add(new Point(i,j,0));
				else if (map[i][j] == 'D') {
					er = i;
					ec = j;
					map[i][j] = '.';
				}
			}
		}
		while (map[er][ec] == '.' && !q.isEmpty()) {
			Point cur = q.poll();
			
			for (int i = 0; i < 4; i++) {
				int ny = cur.y + dy[i];
				int nx = cur.x + dx[i];
				if (ny < 0 || ny >= R || nx < 0 || nx >= C || map[ny][nx] != '.') continue;
				if (ny == er && nx == ec && map[cur.y][cur.x] == '*') continue;
				map[ny][nx] = map[cur.y][cur.x];
				q.add(new Point(ny, nx, cur.time+1));
			}
		}
			
		System.out.println(map[er][ec] == '.' ? "KAKTUS" : q.peekLast().time);
	}
	static class Point {
		int y, x, time;
		public Point(int y, int x, int time) {
			this.y = y;
			this.x = x;
			this.time = time;
		}
	}
}
