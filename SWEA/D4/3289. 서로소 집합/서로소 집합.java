import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, M, op, a, b;
	static String ans;
	static int[] parents;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			M = Integer.parseInt(st.nextToken());
			ans = "";
			
			make();
			for (int i = 0; i < M; i++) {
				st = new StringTokenizer(br.readLine());
				op = Integer.parseInt(st.nextToken());
				a = Integer.parseInt(st.nextToken())-1;
				b = Integer.parseInt(st.nextToken())-1;
				if (op == 0) {
					union(a, b);
				}else {
					if (findSet(a) == findSet(b)) ans += "1";
					else ans += "0";
				}
			}
			
			System.out.println("#" + tc + " " + ans);
		}
	}
	public static void make() {
		parents = new int[N];
		for (int i = 0; i < N; i++) {
			parents[i] = i;
		}
	}
	public static int findSet(int a) {
		if (a == parents[a]) return a;
		return parents[a] = findSet(parents[a]);
	}
	public static boolean union(int a, int b) {
		int ar = findSet(a);
		int br = findSet(b);
		if (ar == br) return false;
		parents[br] = ar;
		return true;
	}
}
