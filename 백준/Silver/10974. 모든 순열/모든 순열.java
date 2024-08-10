import java.util.Scanner;

public class Main {
	static int N;
	static int[] input;
	static int[] number;
	static boolean[] isSelected;
	
	public static void permutation(int depth) {
		if(depth == N) {
			for (int i = 0; i < N; i++) {
				System.out.print(number[i] + " ");
			}
			System.out.println();
			return;
		}
		
		for (int i = 0; i < N; i++) {
			if (isSelected[i]) continue;
			number[depth] = input[i];
			isSelected[i] = true;
			permutation(depth + 1);
			isSelected[i] = false;
		}
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		input = new int[N];
		number = new int[N];
		isSelected = new boolean[N];
		
		for (int i = 0; i < N; i++) {
			input[i] = i+1;
		}
		
		permutation(0);
		
	}
}