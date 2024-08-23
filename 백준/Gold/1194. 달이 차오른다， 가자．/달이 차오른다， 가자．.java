import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;


public class Main {
	
	static int N, M, Y, X, ans=-1;
	static char[][] maze;
	static boolean[][][] visited;
	static final int[] dy = {-1,1,0,0};
	static final int[] dx = {0,0,-1,1};
	
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		maze = new char[N][M];
		visited = new boolean[N][M][64];
		for (int i = 0; i < N; i++) {
			String line = br.readLine();
			for (int j = 0; j < M; j++) {
				maze[i][j] = line.charAt(j);
				if (maze[i][j] == '0') {
					Y = i;
					X = j;
				}
			}
		}
		bfs();
		System.out.println(ans);
	}
	public static void bfs() {
		Queue<Path> queue = new LinkedList<>();
		queue.add(new Path(Y,X,0,0));
		while(!queue.isEmpty()) {
			Path p = queue.poll();
			if (maze[p.y][p.x] == '1') {
				ans = p.cnt;
				break;
			}
			for (int i = 0; i < 4; i++) {
				int ny = p.y + dy[i];
				int nx = p.x + dx[i];
				
				if (ny < 0 || ny >= N || nx < 0 || nx >= M || maze[ny][nx] == '#') continue;
				if (maze[ny][nx] >= 'a' && maze[ny][nx] <= 'f') {
					if (visited[ny][nx][p.key|1<<(maze[ny][nx]-'a')]) continue;
					visited[ny][nx][p.key|1<<(maze[ny][nx]-'a')] = true;
					queue.add(new Path(ny,nx,p.key|1<<(maze[ny][nx]-'a'),p.cnt+1));
				}else if (maze[ny][nx] >= 'A' && maze[ny][nx] <= 'F') {
					if (visited[ny][nx][p.key]) continue;
					if ((p.key & 1 << (maze[ny][nx]-'A')) != 0) {
						visited[ny][nx][p.key] = true;
						queue.add(new Path(ny,nx,p.key,p.cnt+1));
					}
				}else {
					if (visited[ny][nx][p.key]) continue;
					visited[ny][nx][p.key] = true;
					queue.add(new Path(ny,nx,p.key,p.cnt+1));
				}
			}
		}
	}
	public static class Path {
		int y, x;
		int key;
		int cnt;
		public Path(int y, int x, int key, int cnt) {
			this.y = y;
			this.x = x;
			this.key = key;
			this.cnt = cnt;
		}
	}
}
