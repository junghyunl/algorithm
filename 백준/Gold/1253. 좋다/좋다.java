import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {

	static int N, answer;
	static int[] numbers;
    public static void main(String[] args) throws IOException {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		numbers = new int[N];
		Set<Integer> goodNumber = new HashSet<>();
    	
    	StringTokenizer st = new StringTokenizer(br.readLine());
    	for (int i = 0; i < N; i++) {
    		numbers[i] = Integer.parseInt(st.nextToken());
		}
    	
    	Arrays.sort(numbers);
    	for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				if (goodNumber.contains(numbers[i])) {
					answer++;
					break;
				}
				if (i == j) continue;
				int index = Arrays.binarySearch(numbers, numbers[i]-numbers[j]);
				if (index == j || index == i) continue;
				if (index > -1) {
					goodNumber.add(numbers[i]);
					answer++;
					break;
				}
			}
		}
    	System.out.println(answer);
	}
}