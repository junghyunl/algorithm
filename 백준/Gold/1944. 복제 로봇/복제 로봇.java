import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M;
	static int[][] map;
	static List<Point> V;
	static List<Edge> E;
	static int[] dy = {-1,1,0,0}, dx = {0,0,-1,1}, parent;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		map = new int[N][N];
		V = new ArrayList<>();
		E = new ArrayList<>();
		
		for (int i = 0; i < N; i++) {
			String line = br.readLine();
			for (int j = 0; j < N; j++) {
				if (line.charAt(j) == 'K' || line.charAt(j) == 'S') {
					V.add(new Point(j, i));
				}else if (line.charAt(j) == '1') {
					map[i][j] = 1;
				}
			}
		}
		for (int i = 0; i < M+1; i++) {
			bfs(i);
		}
		Collections.sort(E, (a,b) -> Integer.compare(a.weight, b.weight));
		if (E.get(0).weight == -1) {
			System.out.println(-1);
			return;
		}
		
		make();
		int cnt = 0, cost = 0;
		for (Edge edge : E) {
			if (union(edge.start, edge.end)) {
				cost += edge.weight;
				if (++cnt == M) break;
			}
		}
		System.out.println(cost);
	}
	static void bfs(int index) {
		int[][] countMap = new int[N][N];
		countMap[V.get(index).y][V.get(index).x] = 1;
		Queue<Point> q = new LinkedList<>();
		q.offer(V.get(index));
		
		while (!q.isEmpty()) {
			Point p = q.poll();
			int y = p.y;
			int x = p.x;
			
			for (int i = 0; i < 4; i++) {
				int ny = y + dy[i];
				int nx = x + dx[i];
				if (map[ny][nx] == 1 || countMap[ny][nx] > 0) continue;
				countMap[ny][nx] = countMap[y][x]+1;
				q.offer(new Point(nx, ny));
			}
		}
		for (int i = 0; i < M+1; i++) {
			if (index == i) continue;
			E.add(new Edge(index, i, countMap[V.get(i).y][V.get(i).x]-1));
		}
	}
	static void make() {
		parent = new int[M+1];
		for (int i = 0; i < M+1; i++) {
			parent[i] = i;
		}
	}
	static int find(int a) {
		if (parent[a] == a) return a;
		return parent[a] = find(parent[a]);
	}
	static boolean union(int a, int b) {
		int ar = find(a);
		int br = find(b);
		if (ar == br) return false;
		parent[ar] = br;
		return true;
	}
	static class Edge {
		int start, end, weight;
		public Edge(int start, int end, int weight) {
			this.start = start;
			this.end = end;
			this.weight = weight;
		}
	}
}
