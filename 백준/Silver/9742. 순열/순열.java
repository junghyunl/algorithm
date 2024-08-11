import java.util.Scanner;

public class Main {
	static int N;
	static int count;
	static String[] input;
	static String[] word;
	static boolean[] used;
	
	public static void permutation(int depth) {
		if (depth == N) {
			count--;
			if (count == 0) {
				System.out.print(String.join("", word));
			}
			return;
		}
		
		for (int i = 0; i < N; i++) {
			if (used[i]) continue;
			word[depth] = input[i];
			used[i] = true;
			permutation(depth+1);
			used[i] = false;
		}
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		while(scan.hasNext()) {
			input = scan.next().split("");
			count = scan.nextInt();
			scan.nextLine();
			
			System.out.print(String.join("", input) + " " + count + " = ");
			N = input.length;
			used = new boolean[N];
			word = new String[N];
			
			permutation(0);
			if (count > 0) System.out.print("No permutation");
			System.out.println(); 
		}
	}
}