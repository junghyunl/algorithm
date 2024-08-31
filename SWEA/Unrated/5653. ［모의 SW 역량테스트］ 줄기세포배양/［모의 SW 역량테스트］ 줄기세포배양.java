import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;


public class Solution {
	
	static int N, M, K, ny, nx, ans;
	static int[][] map;
	static int[] dy = {-1,1,0,0};
	static int[] dx = {0,0,-1,1};
	static PriorityQueue<Cell> queue;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringTokenizer st;
	
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			M = Integer.parseInt(st.nextToken());
			K = Integer.parseInt(st.nextToken());
			ans = 0;
			map = new int[N+K+1][M+K+1];
			queue = new PriorityQueue<>();
			for (int i = K/2; i < N+K/2; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = K/2; j < M+K/2; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
					if (map[i][j] > 0) queue.add(new Cell(i,j,map[i][j], 0));
				}
			}
			bfs();
			System.out.println("#" + tc + " " + (ans+queue.size()+1));
		}
	}
	public static void bfs() {
		while(!queue.isEmpty()) {
			Cell c = queue.poll();
			if (c.time == K) return;
			if (c.time < c.dead) {
				c.addTime();
				queue.add(c);
			} else if (c.time == c.dead) {
				if (c.dead+c.life > K) ans++;
				for (int i = 0; i < 4; i++) {
					ny = c.y + dy[i];
					nx = c.x + dx[i];
					if (ny < 0 || ny >= N+K+1 || nx < 0 || nx >= M+K+1 || map[ny][nx] > 0) continue;
					map[ny][nx] = c.life;
					queue.add(new Cell(ny,nx, c.life, c.time+1));
				}
			}
		}
	}
	static class Cell implements Comparable<Cell> {
		int y;
		int x;
		int life;
		int dead;
		int time;
		public Cell(int y, int x, int life, int time) {
			this.y = y;
			this.x = x;
			this.life = life;
			this.dead = life + time;
			this.time = time;
		}
		public void addTime() {
			time++;
		}
		@Override
		public int compareTo(Cell c) {
			if (this.time == c.time) return c.life - this.life;
			return this.time - c.time;
		}
	}
}
