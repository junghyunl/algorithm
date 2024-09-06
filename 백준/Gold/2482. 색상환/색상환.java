import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	static int N , K;
	static int[][] d;
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			N = Integer.parseInt(br.readLine());
			K = Integer.parseInt(br.readLine());
			d = new int[N+1][N+1];
			for(int i=1; i<N+1; i++) {
				d[i][0] = 1;
				d[i][1] = i;
			}
			for(int i=3; i<N+1; i++) {
				for(int j=2; j<=i/2; j++) {
					d[i][j] = (d[i-2][j-1] + d[i-1][j])%1000000003;
				}
			}

			System.out.println((d[N-2][K-1] + d[N-1][K])%1000000003);
	}
}