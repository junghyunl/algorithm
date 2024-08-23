import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	static int K, W, H, ans=-1;
	static int[][] world;
	static int[][] visited;
	static final int[] hy = {-1,-2,-2,-1,1,2,2,1};
	static final int[] hx = {-2,-1,1,2,2,1,-1,-2};
	static final int[] dy = {-1,1,0,0};
	static final int[] dx = {0,0,-1,1};

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		K = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		W = Integer.parseInt(st.nextToken());
		H = Integer.parseInt(st.nextToken());
		ans = -1;
		world = new int[H][W];
		visited = new int[H][W];
		for (int i = 0; i < H; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < W; j++) {
				world[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		if (W == 1 && H == 1) ans = 0;
		else bfs();
		
		System.out.println(ans);
		}
	
	public static void bfs() {
		Queue<Path> queue = new LinkedList<>(); 
		queue.add(new Path(0,0,K,0));
		
		while (!queue.isEmpty()) {
			Path p = queue.poll();
			int y = p.y;
			int x = p.x;
			int k = p.k;
			int cnt = p.cnt;
			if (y == H-1 && x == W-1) {
				ans = cnt;
				break;
			}
			if (k > 0) {
				for (int i = 0; i < 8; i++) {
					int ny = y + hy[i];
					int nx = x + hx[i];
					if (ny > -1 && ny < H && nx > -1 && nx < W && world[ny][nx] == 0 && (visited[ny][nx] & 1 << k-1) == 0) {
						visited[ny][nx] |= 1 << k-1;
						queue.add(new Path(ny,nx,k-1,cnt+1));
					}
				}
			}
			for (int i = 0; i < 4; i++) {
				int ny = y + dy[i];
				int nx = x + dx[i];
				
				if (ny > -1 && ny < H && nx > -1 && nx < W && world[ny][nx] == 0 && (visited[ny][nx] & 1 << k) == 0) {
					visited[ny][nx] |= 1 << k;
					queue.add(new Path(ny,nx,k,cnt+1));
				}
			}
		}
	}

	public static class Path {
		int y, x;
		int k;
		int cnt;
		public Path(int y, int x, int k, int cnt) {
			this.y = y;
			this.x = x;
			this.k = k;
			this.cnt = cnt;
		}
	}
}
