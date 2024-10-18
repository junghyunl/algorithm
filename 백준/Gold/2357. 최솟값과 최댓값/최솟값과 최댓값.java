import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M;
	static int[] numbers, minTree, maxTree;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		numbers = new int[N];
		minTree = new int[N*4];
		maxTree = new int[N*4];
		
		for (int i = 0; i < N; i++) {
			numbers[i] = Integer.parseInt(br.readLine());
		}
		minInit(0,N-1,1);
		maxInit(0,N-1,1);
		
		StringBuilder ans = new StringBuilder();
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken())-1;
			int b = Integer.parseInt(st.nextToken())-1;
			ans.append(minValue(0,N-1,1,a,b)).append(" ").append(maxValue(0,N-1,1,a,b)).append("\n");
		}

		System.out.println(ans);
	}
	static int minInit(int start, int end, int node) {
		if (start == end) return minTree[node] = numbers[start];
		int mid = (start+end)/2;
		return minTree[node] = Math.min(minInit(start, mid, node*2), minInit(mid+1, end, node*2+1));
	}
	static int maxInit(int start, int end, int node) {
		if (start == end) return maxTree[node] = numbers[start];
		int mid = (start+end)/2;
		return maxTree[node] = Math.max(maxInit(start, mid, node*2), maxInit(mid+1, end, node*2+1));
	}
	static int minValue(int start, int end, int node, int left, int right) {
		if (end < left || start > right) return Integer.MAX_VALUE;
		if (start >= left && end <= right) return minTree[node]; 
		int mid = (start+end)/2;
		return Math.min(minValue(start, mid, node*2, left, right), minValue(mid+1, end, node*2+1,left, right));
	}
	static int maxValue(int start, int end, int node, int left, int right) {
		if (end < left || start > right) return 0;
		if (start >= left && end <= right) return maxTree[node]; 
		int mid = (start+end)/2;
		return Math.max(maxValue(start, mid, node*2, left, right), maxValue(mid+1, end, node*2+1,left, right));
	}
}
