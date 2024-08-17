import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, M, a, b, answer;
	static int[] foodCombi;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
	
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			M = Integer.parseInt(st.nextToken());
			answer = 0;
			foodCombi = new int[N];
			
			for (int i = 0; i < M; i++) {
				st = new StringTokenizer(br.readLine());
				a = Integer.parseInt(st.nextToken())-1;
				b = Integer.parseInt(st.nextToken())-1;
				
				foodCombi[a] |= 1 << b;
				foodCombi[b] |= 1 << a;
			}
			
			subSet(0,0);
			
			System.out.println("#" + tc + " " + answer);
		}
	}
	
	public static void subSet(int depth, int flag) {
		if (depth == N) {
			answer++;
			return;
		}
		
		if ((foodCombi[depth] & flag) == 0) subSet(depth+1, flag | 1 << depth);
		subSet(depth+1, flag);
	}
	
}