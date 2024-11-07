import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	static int L, W, H, N, ans;
	static boolean pos = true;
	static int[] cube;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		L = Integer.parseInt(st.nextToken());
		W = Integer.parseInt(st.nextToken());
		H = Integer.parseInt(st.nextToken());
		
		N = Integer.parseInt(br.readLine());
		cube = new int[20];
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			int A = Integer.parseInt(st.nextToken());
			int B = Integer.parseInt(st.nextToken());
			cube[A] = B;
		}
		
		int len = findMaxLen(19, Math.min(L, Math.min(W, H)));
		dfs(L, W, H, len);
		System.out.println(!pos ? -1 : ans);
		
	}
	static void dfs(int length, int width, int height, int len) {
		if (!pos || length == 0 || width == 0 || height == 0) return;
		int minLen = Math.min(length, Math.min(width, height));
		int cubeLen = findMaxLen(len, minLen);
		if (cubeLen == -1) {
			pos = false;
			return;
		}
		int cnt = 1;
		int cur = (int)Math.pow(2, cubeLen);
		while (cnt*8 <= cube[cubeLen] && cur*2 <= minLen) {
			cur *= 2;
			cnt *= 8;
		}
		
		ans+=cnt;
		cube[cubeLen]-=cnt;
		
		dfs(length-cur, cur, height, cubeLen);
		dfs(cur, width-cur, height, cubeLen);
		dfs(length-cur, width-cur, height, cubeLen);
		dfs(cur, cur, height-cur, cubeLen);
	}
	static int findMaxLen(int len, int minLen) {
		for (int i = len; i >= 0; i--) {
			if (cube[i] > 0 && (int)Math.pow(2, i) <= minLen) return i;
		}
		return -1;
	}
}
