import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	static int P, S, answer;
	static String str;
	static int[] appear = new int[4];
	static int[] count = new int[4];
	
	public static int findIndex(char c) {
		if (c == 'A') return 0;
		if (c == 'C') return 1;
		if (c == 'G') return 2;
		return 3;
	}
	
	public static void check() {
		for (int i = 0; i < 4; i++) {
			if (count[i] < appear[i]) return;
		}
		answer++;
	}
	
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
	
		P = Integer.parseInt(st.nextToken());
		S = Integer.parseInt(st.nextToken());
		str = br.readLine();
		
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < 4; i++) {
			appear[i] = Integer.parseInt(st.nextToken());
		}
		for (int i = 0; i < S; i++) {
			count[findIndex(str.charAt(i))]++;
		}
		check();
		for (int i = S; i < P; i++) {
			count[findIndex(str.charAt(i))]++;
			count[findIndex(str.charAt(i-S))]--;
			check();
		}
		System.out.println(answer);
	}
	
}