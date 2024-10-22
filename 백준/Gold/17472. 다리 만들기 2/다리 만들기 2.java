import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

	static int N, M, V;
	static int[] parents;
	static int[][] map;
	static int[] dy = {-1,1,0,0};
	static int[] dx = {0,0,-1,1};
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		map = new int[N][M];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < M; j++) {
				map[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		int areaNum = 2;
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < M; j++) {
				if (map[i][j] == 1) {
					map[i][j] = areaNum++;
					bfs(i, j);
				}
			}
		}
		
		V = areaNum-2;
		List<Edge> list = new ArrayList<>();
		for (int i = 0; i < N; i++) {
			int left = 0;
			while (left < M-3) {
				if (map[i][left] > 0 && map[i][left+1] == 0 && map[i][left+2] == 0) {
					int right = left+3;
					while (right < M) {
						if (map[i][right] > 0) {
							if (map[i][left] != map[i][right]) {
								list.add(new Edge(map[i][left]-2, map[i][right]-2, right-left-1));
							}
							left = right-1;
							break;
						}
						right++;
					}
				}
				left++;
			}
		}
		for (int i = 0; i < M; i++) {
			int left = 0;
			while (left < N-3) {
				if (map[left][i] > 0 && map[left+1][i] == 0 && map[left+2][i] == 0) {
					int right = left+3;
					while (right < N) {
						if (map[right][i] > 0) {
							if (map[left][i] != map[right][i]) {
								list.add(new Edge(map[left][i]-2, map[right][i]-2, right-left-1));
							}
							left = right-1;
							break;
						}
						right++;
					}
				}
				left++;
			}
		}
		Collections.sort(list, (a,b) -> a.weight-b.weight);
		
		make();
		int cnt = 0, cost = 0;
		for (Edge e : list) {
			if (union(e.from, e.to)) {
				cost += e.weight;
				if (++cnt == V-1) break;
			}
		}
		
		System.out.println(cnt != V-1 ? -1 : cost);
	}
	
	static void make() {
		parents = new int[V];
		for (int i = 0; i < V; i++) {
			parents[i] = i;
		}
	}
	
	static int find(int a) {
		if (parents[a] == a) return a;
		return parents[a] = find(parents[a]);
	}
	
	static boolean union(int a, int b) {
		int ar = find(a);
		int br = find(b); 
		if (ar == br) return false;
		parents[ar] = br;
		return true;
	}
	
	static void bfs(int y, int x) {
		Queue<Point> q = new ArrayDeque<>();
		q.offer(new Point(x, y));
		int num = map[y][x];
		
		while (!q.isEmpty()) {
			Point cur = q.poll();
			
			for (int i = 0; i < 4; i++) {
				int ny = cur.y + dy[i];
				int nx = cur.x + dx[i];
				if (ny < 0 || ny >= N || nx < 0 || nx >= M || map[ny][nx] != 1) continue;
				q.offer(new Point(nx, ny));
				map[ny][nx] = num;
			}
		}
	}
	
	static class Edge {
		int from, to, weight;

		public Edge(int from, int to, int weight) {
			this.from = from;
			this.to = to;
			this.weight = weight;
		}
	}
}