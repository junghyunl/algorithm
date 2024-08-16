
import java.util.Scanner;

public class Main {
	static int N;
	static int[] sour;
	static int[] bitter;
	static int gap = 1000000000;

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		sour = new int[N];
		bitter = new int[N];
		
		for (int i = 0; i < N; i++) {
			sour[i] = scan.nextInt();
			bitter[i] = scan.nextInt();
		}
		
		subSet(0,0,1,0);
		System.out.println(gap);
	}
	
	public static void subSet(int depth, int len, int sourTaste, int bitterTaste) {
		if (depth == N) {
			if (bitterTaste > 0) gap = Math.min(gap, Math.abs(sourTaste-bitterTaste));
			return;
		}
		
		subSet(depth+1, len+1, sourTaste*sour[depth], bitterTaste+bitter[depth]);
		subSet(depth+1, len, sourTaste, bitterTaste);
	}
}
