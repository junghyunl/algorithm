import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken());
		int L = Integer.parseInt(st.nextToken()); 
		int D = Integer.parseInt(st.nextToken()); 
		int ans = Integer.MAX_VALUE;
		boolean[] connectTime = new boolean[(L+5)*N];

		for (int i = 1; i < N+1; i++) {
			for (int j = 1; j <= 5; j++) {
				connectTime[i*(L+5)-j] = true;
			}
		}
		
		int cnt = 1;
		while (cnt*D < (L+5)*N) {
			if (connectTime[cnt*D]) {
				ans = cnt*D;
				break;
			}
			cnt++;
		}
		
		System.out.println(Math.min(ans, cnt*D));
	}
}