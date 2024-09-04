import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int N = Integer.parseInt(br.readLine());
		long[][][] pipes = new long[N][N][3];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				pipes[i][j][0] = -Integer.parseInt(st.nextToken());
			}
		}
		if (pipes[N-1][N-1][0] == -1) System.out.println(0);
		else {
			for (int i = 1; i < N; i++) {
				if (pipes[0][i][0] == -1) break;
				pipes[0][i][0] = 1;
			}
			
			for (int i = 1; i < N; i++) {
				for (int j = 2; j < N; j++) {
					if (pipes[i][j][0] == -1) continue;
					if (pipes[i][j-1][0] != -1) pipes[i][j][0] = pipes[i][j-1][0] + pipes[i][j-1][1];
					if (pipes[i-1][j][0] != -1) pipes[i][j][2] = pipes[i-1][j][2] + pipes[i-1][j][1];
					if (pipes[i-1][j][0] != -1 && pipes[i][j-1][0] != -1 && pipes[i-1][j-1][0] != -1) pipes[i][j][1] = pipes[i-1][j-1][0] + pipes[i-1][j-1][1] + pipes[i-1][j-1][2];
				}
			}
			System.out.println(pipes[N-1][N-1][0] + pipes[N-1][N-1][1] + pipes[N-1][N-1][2]);
		}
	}
}