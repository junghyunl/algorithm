import java.util.Scanner;

public class Main {
	static int N;
	static int maxValue;
	static int[] input;

	public static void permutation(int depth) {
		if (depth == N) {
			calculate();
			return;
		}
		
		for (int i = depth; i < N; i++) {
			swap(i,depth);
			permutation(depth+1);
			swap(i,depth);
		}
	}
	
	public static void swap(int i, int depth) {
		int temp = input[i];
		input[i] = input[depth];
		input[depth] = temp;
	}
	
	public static void calculate() {
		int total = 0;
		for (int i = 0; i < N-1; i++) {
			total += Math.abs(input[i]-input[i+1]);
		}
		maxValue = Math.max(maxValue, total);
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		input = new int[N];
		for (int i = 0; i < N; i++) {
			input[i] = scan.nextInt();
		}

		permutation(0);
		System.out.println(maxValue);
	}
	
}