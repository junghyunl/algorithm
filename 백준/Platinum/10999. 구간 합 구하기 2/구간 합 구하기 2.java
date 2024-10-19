import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	static long[] numbers, tree, updateTree;

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
		updateTree = new long[N*4];
		init(0, N-1, 1);
		for (int i = 0; i < M+K; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			int c = Integer.parseInt(st.nextToken());
			
			if (a == 1) {
				long d = Long.parseLong(st.nextToken());
				update(0, N-1, 1, b-1, c-1, d);
			} else if (a == 2) {
				ans.append(sum(0, N-1, 1, b-1, c-1)).append("\n");
			}
		}
		System.out.println(ans);
		
	}
	static long init(int start, int end, int node) {
		if (start == end) return tree[node] = numbers[start];
		int mid = (start+end)/2;
		return tree[node] = init(start, mid, node*2) + init(mid+1, end, node*2+1);
	}
	static long sum(int start, int end, int node, int left, int right) {
		down(start, end, node);
		if (left > end || right < start) return 0;
		if (left <= start && right >= end) return tree[node];
		int mid = (start+end)/2;
		return sum(start, mid, node*2, left, right) + sum(mid+1, end, node*2+1, left, right);
	}
	static void update(int start, int end, int node, int left, int right, long value) {
		down(start, end, node);
	    if (end < left || start > right) return;

	    if (start >= left && end <= right) {
	        tree[node] += (end - start + 1)*value;
	        if (start != end) {
	            updateTree[node*2] += value;
	            updateTree[node*2+1] += value;
	        }
	        return;
	    }

	    int mid = (start+end)/2;
	    update(start, mid, node*2, left, right, value);
	    update(mid+1, end, node*2+1, left, right, value);
	    tree[node] = tree[node*2] + tree[node*2+1];
	}
	static void down(int start, int end, int node) {
	    if (updateTree[node] != 0) {
	        tree[node] += (end - start + 1)*updateTree[node];

	        if (start != end) {
	            updateTree[node*2] += updateTree[node];
	            updateTree[node*2+1] += updateTree[node];
	        }
	        updateTree[node] = 0;
	    }
	}
}
