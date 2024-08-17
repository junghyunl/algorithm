import java.util.Scanner;

public class Main {
	
	static int N;
	static String answer = "";
	
	public static boolean isPrime(int num) {
		if (num == 1) return false;
		if (num == 2) return true;
		if (num%2 == 0) return false;
		for (int i = 3; i <= (int)Math.pow(num, 0.5); i+=2) {
			if (num%i == 0) return false;
		}
		return true;
	}
	
	public static void permutation(int depth, int num) {
		if (depth == N) {
			if (isPrime(num)) answer += num + "\n";
			return;
		}
		for (int i = 1; i < 10; i++) {
			if (isPrime(num*10+i)) permutation(depth+1, num*10+i);
		}
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		
		permutation(0,0);
		System.out.println(answer);
	}
	
}
