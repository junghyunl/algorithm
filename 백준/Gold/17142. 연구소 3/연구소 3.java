import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M, V, ans = Integer.MAX_VALUE;
	static int[][] lab;
	static List<Virus> virus;
	static int[] dy = {-1,1,0,0};
	static int[] dx = {0,0,-1,1};
	static int[] input, numbers;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		lab = new int[N][N];
		virus = new ArrayList<>();
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				lab[i][j] = Integer.parseInt(st.nextToken());
				if (lab[i][j] == 2) virus.add(new Virus(i, j, 0));
			}
		}
		V = virus.size();
		input = new int[V];
		numbers = new int[M];
		for (int i = 0; i < V; i++) {
			input[i] = i;
		}
		combi(0,0);
		System.out.println(ans == Integer.MAX_VALUE ? -1 : ans);
	}
	static int bfs(int[] viruses) {
		int[][] copyLab = new int[N][N];
		for (int i = 0; i < N; i++) {
			copyLab[i] = Arrays.copyOfRange(lab[i], 0, N);
		}
		
		Queue<Virus> q = new LinkedList<>();
		for(int i : viruses) {
			q.offer(virus.get(i));
		}
		
		int totalTime = 0;
		while (!q.isEmpty()) {
			Virus cur = q.poll();
			int y = cur.y;
			int x = cur.x;
			
			for (int i = 0; i < 4; i++) {
				int ny = y + dy[i];
				int nx = x + dx[i];
				if (ny < 0 || ny >= N || nx < 0 || nx >= N || copyLab[ny][nx] == 1) continue;
				if (copyLab[ny][nx] == 0) totalTime = cur.time+1;
				copyLab[ny][nx] = 1;
				q.add(new Virus(ny, nx, cur.time+1));
			}
		}
		
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				if (copyLab[i][j] == 0) return Integer.MAX_VALUE;
			}
		}
		return totalTime;
	}
	static void combi(int depth, int start) {
		if (depth == M) {
			ans = Math.min(ans, bfs(numbers));
			return;
		}
		for (int i = start; i < V; i++) {
			numbers[depth] = input[i];
			combi(depth+1, i+1);
		}
	}
	static class Virus {
		int y, x, time;
		public Virus(int y, int x, int time) {
			this.y = y;
			this.x = x;
			this.time = time;
		}	
	}
}