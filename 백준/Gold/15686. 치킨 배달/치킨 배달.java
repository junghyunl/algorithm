import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
	static int N;
	static int M;
	static List<int[]> house;
	static List<int[]> chicken;
	static int[][] saveChicken;
	static int answer;
	
	public static void combi(int depth, int start) {
		if (depth == M) {
			int total = 0;
			for (int[] h : house) {
				int min = 2*N;
				for (int[] c : saveChicken) {
					min = Math.min(min, Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]));
				}
				total += min;
			}
			answer = Math.min(answer, total);
			return;
		}
		
		for (int i = start; i < chicken.size(); i++) {
			saveChicken[depth] = chicken.get(i);
			combi(depth+1, i+1);
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		M = scan.nextInt();
		house = new ArrayList<>();
		chicken = new ArrayList<>();
		saveChicken = new int[M][2];
		answer = 4*N*N;
		
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				int info = scan.nextInt();
				if (info == 1) {
					int[] cordi = new int[2];
					cordi[0] = i;
					cordi[1] = j;
					house.add(cordi);
				}else if (info == 2) {
					int[] cordi = new int[2];
					cordi[0] = i;
					cordi[1] = j;
					chicken.add(cordi);
				}
			}
		}
		
		combi(0,0);
		System.out.println(answer);
	}
}
