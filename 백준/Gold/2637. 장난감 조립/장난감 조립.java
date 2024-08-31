import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M;
	static int[] inDegree;
	static int[][] cnt;
	static boolean[] checked;
	static ArrayList<Integer>[] up, down;
	static ArrayList<Integer> base;
	static Queue<Integer> q;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder("");
		StringTokenizer st;
		N = Integer.parseInt(br.readLine());
		M = Integer.parseInt(br.readLine());
		cnt = new int[N+1][N+1];
		checked = new boolean[N+1];
		
		up = new ArrayList[N+1];	
		down = new ArrayList[N+1];
		inDegree = new int[N+1];
		q = new LinkedList<>();
		
		for (int i = 1; i < N+1; i++) {
			up[i] = new ArrayList<>();
			down[i] = new ArrayList<>();
		}
		base = new ArrayList<>();
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			cnt[from][to] = Integer.parseInt(st.nextToken());
			down[from].add(to);
			up[to].add(from);
			inDegree[from]++;
		}
		for (int i = 1; i < N+1; i++) {
			if(inDegree[i] == 0) {
				for (int ad : up[i]) {
					q.offer(ad);
				}
				checked[i] = true;
				cnt[i][i] = 1;
				base.add(i);
			}
		}
				
		while(!q.isEmpty()) {
			int cur = q.poll();
			
			if (checked[cur]) continue;
			if (!check(cur)) q.add(cur);
			else {
				checked[cur] = true;
				baseCount(cur);
				for (int ad : up[cur]) {
					q.offer(ad);
				}
			}
		}
			
		for (int b : base) {
			sb.append(b + " " + cnt[N][b] + "\n");
		}
		System.out.println(sb);
	}
	static void baseCount(int cur) {
		for (int ad : down[cur]) {
			if (base.contains(ad)) continue;
			for (int b : base) {
				cnt[cur][b] += cnt[cur][ad]*cnt[ad][b];
			}
			cnt[cur][ad] = 0;
		}
	}
	static boolean check(int cur) { // 체크된 부품인지
		for (int ad : down[cur]) {
			if (!checked[ad]) return false;
		}
		return true;
	}
}
