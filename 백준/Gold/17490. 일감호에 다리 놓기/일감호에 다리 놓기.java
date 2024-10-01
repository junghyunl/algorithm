import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static int[] dx = {-1,1};

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		long K = Long.parseLong(st.nextToken());
		
		if (M < 2) System.out.println("YES");
		else {
			List<Node> list = new ArrayList<>();
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < N; i++) {
				list.add(new Node(i, Integer.parseInt(st.nextToken())));
			}
			Collections.sort(list, (a,b) -> Long.compare(a.weight, b.weight));
			
			boolean[][] check = new boolean[N][2];
			for (int i = 0; i < M; i++) {
				st = new StringTokenizer(br.readLine());
				int j = Integer.parseInt(st.nextToken())-1;
				int k = Integer.parseInt(st.nextToken())-1;
				if ((j == 0 && k == N-1) || (k == 0 && j == N-1)) {
					check[0][0] = true;
					check[N-1][1] = true;
				}else if (j < k){
					check[k][0] = true;
					check[j][1] = true;
				}else {
					check[j][0] = true;
					check[k][1] = true;
				}
			}
			long ans = prim(list, check);
			System.out.println(ans > K ? "NO" : "YES");
		}
	}
	static long prim(List<Node> list, boolean[][] check) {
		long[] dist = new long[N];
		Arrays.fill(dist, Long.MAX_VALUE);
		long totalDist = 0;
		
		for (int i = 0; i < N; i++) {
			Node cur = list.get(i);
			
			if (dist[cur.to] < Long.MAX_VALUE) continue;
			totalDist += cur.weight;
			dist[cur.to] = totalDist;
			
			for (int j = 0; j < 2; j++) {
				int x = cur.to;
				int nx = (x+dx[j]+N)%N;
				while (!check[x][j]) {
					dist[nx] = totalDist;
					x = nx;
					nx = (nx+dx[j]+N)%N;
				}
			}
		}
		return totalDist;
	}
	static class Node{
		int to; long weight;
		public Node(int to, long weight) {
			this.to = to;
			this.weight = weight;
		}
	}
}
