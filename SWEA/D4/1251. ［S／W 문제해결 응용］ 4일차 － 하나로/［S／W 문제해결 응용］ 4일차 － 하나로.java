import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Solution {
	
	static int N;
	static double E;
	static int[] parents;
	static long[] islandX, islandY;
	static ArrayList<Edge> edges;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			islandX = new long[N]; islandY = new long[N];
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < N; i++) {
				islandX[i] = Integer.parseInt(st.nextToken());
			}
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < N; i++) {
				islandY[i] = Integer.parseInt(st.nextToken());
			}
			E = Double.parseDouble(br.readLine());
			edges = new ArrayList<>();
			for (int i = 0; i < N-1; i++) {
				for (int j = i+1; j < N; j++) {
					edges.add(new Edge(i, j, Math.pow(islandX[i]-islandX[j], 2) + Math.pow(islandY[i]-islandY[j], 2)));
				}
			}
			
			Collections.sort(edges);
			make();
			int cnt = 0; double cost = 0;
			for (Edge edge : edges) {
				if (union(edge.start, edge.end)) {
					cost += edge.weight;
					if(++cnt == N-1) break;
				}
			}
			System.out.println("#" + tc + " " + (long)Math.floor(E * cost+0.5));
		}
	}
	static void make() {
		parents = new int[N];
		for (int i = 0; i < N; i++) {
			parents[i] = -1;
		}
	}
	static int find(int a) {
		if (parents[a] < 0) return a;
		return parents[a] = find(parents[a]);
	}
	static boolean union(int a, int b) {
		int aRoot = find(a);
		int bRoot = find(b);
		if (aRoot == bRoot) return false;
		parents[aRoot] = bRoot;
		return true;
	}
	static class Edge implements Comparable<Edge> {
		int start,end; double weight;
		public Edge(int start, int end, double weight) {
			this.start = start;
			this.end = end;
			this.weight = weight;
		}
		@Override
		public int compareTo(Edge o) {
			return Double.compare(this.weight, o.weight);
		}
	}
}
