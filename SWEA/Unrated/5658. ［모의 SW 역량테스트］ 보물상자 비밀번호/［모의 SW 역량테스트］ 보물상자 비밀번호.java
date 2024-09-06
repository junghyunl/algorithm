import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Iterator;
import java.util.StringTokenizer;
import java.util.TreeSet;

public class Solution {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(st.nextToken());
			int K = Integer.parseInt(st.nextToken());
			int[] numbers = new int[N];
			TreeSet<Long> ts = new TreeSet<>((a,b) -> Long.compare(b, a));
			
			
			String[] str = br.readLine().split("");
			for (int i = 0; i < N; i++) {
				numbers[i] = Integer.parseInt(str[i], 16);
			}
			
			for (int i = 0; i < N; i++) {
				long value = 0;
				for (int j = 0; j < N/4; j++) {
					value += numbers[(j+i)%N]*Math.pow(16, N/4-j-1);
				}
				ts.add(value);
			}
			
			Iterator it = ts.iterator();
			for (int i = 0; i < K-1; i++) {
				it.next();
			}
			long ans = (long)it.next();
			
			sb.append("#").append(tc).append(" ").append(ans).append("\n");
		}
		System.out.println(sb);
	}
}