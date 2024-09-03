import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int N, ans;
	static int[][] cave;
	static int[] dy = {-1,1,0,0};
	static int[] dx = {0,0,-1,1};

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int tc = 0;
		while (true) {
			N = Integer.parseInt(br.readLine());
			if (N == 0) break;
			
			cave = new int[N][N];
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					cave[i][j] = Integer.parseInt(st.nextToken());
				}
			}
			
			ans = getMinRupoor();
			sb.append("Problem ").append(++tc).append(": ").append(ans).append("\n");
		}
		
		System.out.println(sb);
	}
	static int getMinRupoor() {
		int[][] minRupoor = new int[N][N];
		PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[2]-b[2]);
		
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				minRupoor[i][j] = Integer.MAX_VALUE;
			}
		}
		minRupoor[0][0] = cave[0][0];
		pq.add(new int[] {0,0,minRupoor[0][0]});
		
		while (!pq.isEmpty()) {
			int[] stopOver = pq.poll();
			int y = stopOver[0];
			int x = stopOver[1];
			int totalRupoor = stopOver[2];
			
			if (totalRupoor > minRupoor[y][x]) continue;
			
			for (int i = 0; i < 4; i++) {
				int ny = y + dy[i];
				int nx = x + dx[i];
				if (ny > -1 && ny < N && nx > -1 && nx < N && totalRupoor+cave[ny][nx] < minRupoor[ny][nx]) {
					minRupoor[ny][nx] = totalRupoor+cave[ny][nx];
					pq.offer(new int[] {ny, nx, minRupoor[ny][nx]});
				}
			}
		}
		return minRupoor[N-1][N-1];
	}
}