import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		long[] numbers = new long[N];
		int[] ans = new int[3];
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		for (int i = 0; i < N; i++) {
			numbers[i] = Long.parseLong(st.nextToken());
		}
		Arrays.sort(numbers);
		
		long gap = Long.MAX_VALUE;
		
		for (int i = 0; i < N-2; i++) {
			int end = N;
			for (int j = i+1; j < end-1; j++) {
				end = Arrays.binarySearch(numbers, j+1, end, -(numbers[i]+numbers[j]));
				if (end < 0) end = -end-1;
				
				if (end == N) end--;
				else if (end > j+1 && Math.abs(numbers[i]+numbers[j]+numbers[end-1]) < Math.abs(numbers[i]+numbers[j]+numbers[end])) {
					end--;
				}
				
				if (Math.abs(numbers[i]+numbers[j]+numbers[end]) < gap) {
					gap = Math.abs(numbers[i]+numbers[j]+numbers[end]);
					ans[0] = i;
					ans[1] = j;
					ans[2] = end;
				}
			}
		}
		
		System.out.println(numbers[ans[0]] + " " + numbers[ans[1]] + " " + numbers[ans[2]]);
		
	}
	
}
