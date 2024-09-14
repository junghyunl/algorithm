import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int N = Integer.parseInt(br.readLine());
		int[][][] game = new int[N][3][2];
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < 3; j++) {
				game[i][j][0] = game[i][j][1] = Integer.parseInt(st.nextToken());
			}
		}
		
		for (int i = 1; i < N; i++) {
			game[i][0][0] += Math.min(game[i-1][0][0], game[i-1][1][0]);
			game[i][0][1] += Math.max(game[i-1][0][1], game[i-1][1][1]);
			
			game[i][1][0] += Math.min(game[i-1][0][0], Math.min(game[i-1][1][0], game[i-1][2][0]));
			game[i][1][1] += Math.max(game[i-1][0][1], Math.max(game[i-1][1][1], game[i-1][2][1]));
			
			game[i][2][0] += Math.min(game[i-1][1][0], game[i-1][2][0]);
			game[i][2][1] += Math.max(game[i-1][1][1], game[i-1][2][1]);
		}
		
		int maxValue = Math.max(game[N-1][0][1], Math.max(game[N-1][1][1], game[N-1][2][1]));
		int minValue = Math.min(game[N-1][0][0], Math.min(game[N-1][1][0], game[N-1][2][0]));
		System.out.println(maxValue + " " + minValue);
	}
}
