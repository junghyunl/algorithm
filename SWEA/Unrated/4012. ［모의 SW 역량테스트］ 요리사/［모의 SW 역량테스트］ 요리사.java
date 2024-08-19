import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	static int N, answer;
	static int[][] synergy;
	static int[] foodA, foodB;
	
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			answer = Integer.MAX_VALUE;
			synergy = new int[N][N];
			foodA = new int[N/2];
			foodB = new int[N/2];
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					synergy[i][j] = Integer.parseInt(st.nextToken());
				}
			}
			
			combi(0,0);
			System.out.println("#" + tc + " " +answer);
		}
	}
	
	public static void combi(int depth, int start) {
		if (depth == N/2) {
			answer = Math.min(answer, calGap());
			return;
		}
		for (int i = start; i < N; i++) {
			foodA[depth] = i;
			combi(depth+1, i+1);
		}
	}
	
	public static int calGap() {
		int indexA = 0, indexB = 0;
		for (int i = 0; i < N; i++) {
			if (indexA < N/2 && foodA[indexA] == i) {
				indexA++;
			}else {
				foodB[indexB++] = i;
			}
		}
		return Math.abs(taste(foodA) - taste(foodB));
	}
	
	public static int taste(int[] ingredients) {
		int res = 0;
		for (int i = 0; i < N/2-1; i++) {
			for (int j = i+1; j < N/2; j++) {
				res += synergy[ingredients[i]][ingredients[j]] + synergy[ingredients[j]][ingredients[i]];
			}
		}
		return res;
	}
}
