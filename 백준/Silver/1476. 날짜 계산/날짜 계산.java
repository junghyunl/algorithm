import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int E = sc.nextInt();
		int S = sc.nextInt();
		int M = sc.nextInt();
		int cnt = 1;
		while (E > 1 || S > 1 || M > 1) {
			E = (E+13)%15+1;
			S = (S+26)%28+1;
			M = (M+17)%19+1;
			cnt++;
		}
		System.out.println(cnt);
	}
}
