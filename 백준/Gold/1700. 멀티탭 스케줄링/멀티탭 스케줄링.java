import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		int[] numbers = new int[K];
		Queue<Integer>[] index = new ArrayDeque[K+1];
		for (int i = 0; i < K+1; i++) {
			index[i] = new ArrayDeque<>();
		}
		List<Integer> multiTap = new ArrayList<>();
		
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < K; i++) {
			numbers[i] = Integer.parseInt(st.nextToken());
			index[numbers[i]].add(i);
		}
		
		int ans = 0;
		int i = 0;
		while (multiTap.size() < N && i < K) {
			index[numbers[i]].poll();
			if (multiTap.contains(numbers[i])) {
				i++;
				continue;
			}
			multiTap.add(numbers[i++]);
		}
		for (int j = i; j < K; j++) {
			if (multiTap.contains(numbers[j])) {
				index[numbers[j]].poll();
				continue;
			}
			int last = -1;
			int plug = -1;
			boolean plugOut = false;
			for (int k = 0; k < N; k++) {
				if (index[multiTap.get(k)].size() == 0) {
					multiTap.set(k, numbers[j]);
					index[numbers[j]].poll();
					plugOut = true;
					ans++;
					break;
				}else {
					if (index[multiTap.get(k)].peek() > last) {
						last = index[multiTap.get(k)].peek();
						plug = k;
					}
				}
			}
			if (plugOut) continue;
			index[numbers[j]].poll();
			multiTap.set(plug, numbers[j]);
			ans++;
		}
		System.out.println(ans);
	}
}
