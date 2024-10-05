import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static int[] numbers;
	static int[] check;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		numbers = new int[N];
		for (int i = 0; i < N; i++) {
			numbers[i] = Integer.parseInt(st.nextToken());
		}
		
		check = new int[N];
		int size = 0;
		check[size++] = numbers[0];
		
		for (int i = 1; i < N; i++) {
			int tmp = binarySearch(size, numbers[i]);
			tmp = Math.abs(tmp)-1;
			check[tmp] = numbers[i];
			if (tmp == size) {
				size++;
			}
		}
		System.out.println(size);
	}
	static int binarySearch(int to, int target) {
		int start = 0;
		int end = to-1;
		while (start <= end) {
			int mid = (start+end)/2;
			if (check[mid] == target) return mid+1;
			else if (check[mid] < target) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return -(start+1);
	}
}
