import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
/*
 * 메모리: 26,380 kb		실행시간: 116 ms
 */
public class Solution {
	static int[] fee, month;
	static int answer;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			fee = new int[3];
			month = new int[12];
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < 3; i++) {
				fee[i] = Integer.parseInt(st.nextToken());
			}
			answer = Integer.parseInt(st.nextToken());
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < 12; i++) {
				month[i] = Integer.parseInt(st.nextToken());
			}
			
			combi(0,0);

			System.out.println("#" + tc + " " + answer);
		}
	}
	
	public static void combi(int depth, int price) {
		if (depth >= 12) {
			answer = Math.min(answer, price);
			return;
		}
		if (month[depth] == 0) combi(depth+1, price);
		else {
			combi(depth+1, price + Math.min(month[depth]*fee[0], fee[1]));
			combi(depth+3, price + fee[2]);
		}
	}
}