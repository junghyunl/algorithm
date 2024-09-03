import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	
	static int[] sushi, cnt;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int d = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		int c = Integer.parseInt(st.nextToken());
		boolean coupon = false;
		sushi = new int[N];
		cnt = new int[d+1];
		int sum = 0, max = 0;
		
		for (int i = 0; i < N; i++) {
			sushi[i] = Integer.parseInt(br.readLine());
		}
		
		for (int i = 0; i < k; i++) {
			if (cnt[sushi[i]] == 0) sum++;
			cnt[sushi[i]]++;
			
		}
		max = sum;
		if (cnt[c] == 0) coupon = true;
		if (coupon) max++;
		
		for (int i = 0; i < N-k; i++) {
			cnt[sushi[i]]--;
			if (cnt[sushi[i]] == 0) sum--;
			if (cnt[sushi[i+k]] == 0) sum++;
			cnt[sushi[i+k]]++;
			
			if (cnt[c] == 0) coupon = true;
			else coupon = false;
			max = Math.max(max, coupon? sum+1 : sum);
		}
		
		for (int i = N-k; i < N; i++) {
			cnt[sushi[i%N]]--;
			if (cnt[sushi[i%N]] == 0) sum--;
			if (cnt[sushi[(i+k)%N]] == 0) sum++;
			cnt[sushi[(i+k)%N]]++;
			
			if (cnt[c] == 0) coupon = true;
			else coupon = false;
			max = Math.max(max, coupon? sum+1 : sum);
		}
		
		System.out.println(max);
	}
}