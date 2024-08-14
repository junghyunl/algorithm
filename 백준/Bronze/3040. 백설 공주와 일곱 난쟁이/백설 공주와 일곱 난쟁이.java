import java.util.Scanner;

public class Main {
	static final int N = 9;
	static final int R = 7;
	static int[] input;
	static int[] numbers;
	
	public static void combi(int depth, int start, int total) {
		if (depth == R) {
			if (total == 100) {
				for (int i = 0; i < R; i++) {
					System.out.println(numbers[i]);
				}
			}
			return;
		}
		for (int i = start; i < N; i++) {
			numbers[depth] = input[i];
			combi(depth+1, i+1, total+input[i]);
		}
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		input = new int[N];
		numbers = new int[R];
		
		for (int i = 0; i < N; i++) {
			input[i] = scan.nextInt();
		}
		
		combi(0,0,0);
	}
}
