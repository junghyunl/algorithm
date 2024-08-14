import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
	
	static int N;
	static int K;
	static Set<Character>[] words;
	static Set<Character> myWords;
	static int answer;
	
	public static void combi(int depth, int start) {
		if (depth == K-5) {
			int cnt = 0;
			for (Set<Character> word : words) {
				if (myWords.containsAll(word)) cnt++;
			}
			answer = Math.max(answer, cnt);
			return;
		}
		
		for (int i = start; i < 26; i++) {
			if('a' != 'a' + i && 'n' != 'a' + i && 't' != 'a' + i && 'i' != 'a' + i && 'c' != 'a' + i){
				myWords.add((char) ('a'+i));
	            combi(depth+1, i+1);
	            myWords.remove((char) ('a'+i));
	        }
		}
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		N = scan.nextInt();
		K = scan.nextInt();
		words = new Set[N];
		myWords = new HashSet<>();
		scan.nextLine();
		
		for (int i = 0; i < N; i++) {
			words[i] = new HashSet<>();
			String input = scan.nextLine();
			for (int j = 4; j < input.length()-4; j++) {
				words[i].add(input.charAt(j));
			}
		}
		
		myWords.add('a');
		myWords.add('n');
		myWords.add('t');
		myWords.add('i');
		myWords.add('c');
		combi(0, 0);
		
		System.out.println(answer);
		
	}
}

