import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {

	static int N, M, C, y, x;
	static int[] rowMax;
	static int[][] map, colMax;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;

		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			M = Integer.parseInt(st.nextToken());
			C = Integer.parseInt(st.nextToken());
			rowMax = new int[N];
			map = new int[N][N];
			colMax = new int[N][N-M+1];
			int ans = 0;
			
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
				}
			}
			
			for (int i = 0; i < N; i++) {
				y = i;
				for (int j = 0; j < N-M+1; j++) {
					x = j;
					collectHoney(0, 0, 0);
					rowMax[i] = Math.max(rowMax[i], colMax[i][j]);
				}
			}
			
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N-M+1; j++) {
					int r = getRowMax(i);
					for (int k = j+M; k < N-M+1; k++) {
						r = Math.max(r, colMax[i][k]);
					}
					ans = Math.max(ans, r+colMax[i][j]);
				}
			}
			
			sb.append("#").append(tc).append(" ").append(ans).append("\n");
		}
		System.out.println(sb);
	}
	static int getRowMax(int row) {
		int max = 0;
		for (int i = 0; i < N; i++) {
			if (i == row) continue;
			max = Math.max(max, rowMax[i]);
		}
		return max;
	}
	static void collectHoney(int depth, int amount, int price) {
		if (amount > C) return;
		if (depth == M) {
			colMax[y][x] = Math.max(colMax[y][x], price);
			return;
		}
		collectHoney(depth+1, amount+map[y][x+depth], price+map[y][x+depth]*map[y][x+depth]);
		collectHoney(depth+1, amount, price);
	}
}
