import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		long N = Long.parseLong(st.nextToken())+1;
		int K = Integer.parseInt(st.nextToken());
		
		long idx = 1;
		while (countFive(N) < K) {
			N += idx;
			if (N%(idx*10)/idx == 5) idx*=10;
		}
		
		System.out.println(N);
	}
	
	static int countFive(long num) {
		int cnt = 0;
		while (num > 0) {
			if (num%10 == 5) cnt++;
			num /= 10;
		}
		return cnt;
	}
	
}
