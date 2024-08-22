import java.util.StringTokenizer;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
     static int N, B, answer;
     static int[] heights;
    public static void main(String[] args) throws IOException {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			B = Integer.parseInt(st.nextToken());
			answer = Integer.MAX_VALUE;
			heights = new int[N];
			
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < N; i++) {
				heights[i] = Integer.parseInt(st.nextToken());
			}
			
			subSet(0,0);
			System.out.println("#" + tc + " " + (answer-B));
		}
    }
    
    public static void subSet(int depth, int total) {
		if (depth == N) {
			if (total < B) return;
			answer = Math.min(answer, total);
			return;
		}
		subSet(depth+1, total+heights[depth]);
		subSet(depth+1, total);
	}
}
