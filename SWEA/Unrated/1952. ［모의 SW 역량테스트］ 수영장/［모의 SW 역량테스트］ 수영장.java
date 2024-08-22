import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

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
			
			bt(0,0);
			System.out.println("#" + tc + " " + answer);
		}
	}
	
	public static void bt(int depth, int price) {
		if (price >= answer) return;
		else if (depth >= 12) {
			answer = Math.min(answer, price);
			return;
		}
		if (month[depth] == 0) bt(depth+1, price);
		else {
			bt(depth+1, price + Math.min(month[depth]*fee[0], fee[1]));
			bt(depth+3, price + fee[2]);
		}
	}
}