import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
	
	static int N, M;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		int N = Integer.parseInt(br.readLine());
		int[] aArr = new int[N+1];
		st = new StringTokenizer(br.readLine());
		for (int i = 1; i < N+1; i++) {
			aArr[i] = Integer.parseInt(st.nextToken()) + aArr[i-1];
		}
		
		int M = Integer.parseInt(br.readLine());
		int[] bArr = new int[M+1];
		st = new StringTokenizer(br.readLine());
		for (int i = 1; i < M+1; i++) {
			bArr[i] = Integer.parseInt(st.nextToken()) + bArr[i-1];
		}
		
		Map<Integer, Integer> aMap = new HashMap<>();
		Map<Integer, Integer> bMap = new HashMap<>();
		for (int i = 0; i < N; i++) {
			for (int j = i+1; j < N+1; j++) {
				int sum = aArr[j] - aArr[i];
				aMap.put(sum, aMap.containsKey(sum) ? aMap.get(sum) + 1 : 1);
			}
		}
		for (int i = 0; i < M; i++) {
			for (int j = i+1; j < M+1; j++) {
				int sum = bArr[j] - bArr[i];
				bMap.put(sum, bMap.containsKey(sum) ? bMap.get(sum) + 1 : 1);
			}
		}
		
		Set<Integer> aKeys = aMap.keySet();
		long ans = 0;
		for (int key : aKeys) {
			if (bMap.containsKey(T-key)) ans += (long)aMap.get(key) * (long)bMap.get(T-key);
		}
		
		System.out.println(ans);
	}
}