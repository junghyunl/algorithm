import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	static long[] numbers, tree;
	static final long MOD = 1000000007;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder ans = new StringBuilder();
		
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		
		numbers = new long[N];
		for (int i = 0; i < N; i++) {
			numbers[i] = Long.parseLong(br.readLine());
		}
		
		tree = new long[N*4];
		init(0, N-1, 1);
		
		for (int i = 0; i < M+K; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			int c = Integer.parseInt(st.nextToken());
			
			if (a == 1) {
				numbers[b-1] = c;
				update(0, N-1, 1, b-1);
			} else if (a == 2) {
				ans.append(sum(0, N-1, 1, b-1, c-1)).append("\n");
			}
		}
		System.out.println(ans);
		
	}
	static long init(int start, int end, int node) {
		if (start == end) return tree[node] = numbers[start];
		int mid = (start+end)/2;
		return tree[node] = (init(start, mid, node*2)*init(mid+1, end, node*2+1))%MOD; 
	}
	static long sum(int start, int end, int node, int left, int right) {
		if (start > right || end < left) return 1;
		if (start >= left && end <= right) return tree[node];
		int mid = (start+end)/2;
		return (sum(start, mid, node*2, left, right)*sum(mid+1, end, node*2+1, left, right))%MOD; 
	}
	static long update(int start, int end, int node, int index) {
		if (start > index || end < index) return tree[node];
		if (start == end && start == index) return tree[node] = numbers[start];
		int mid = (start+end)/2;
		return tree[node] = (update(start, mid, node*2, index)*update(mid+1, end, node*2+1, index))%MOD;     
	}
}
