import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder ans = new StringBuilder();
		
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		List<Integer>[] list = new ArrayList[N+1];
		int[] inDegree = new int[N+1];
		Queue<Integer> q = new PriorityQueue<>((a,b) -> Integer.compare(a, b));
		for (int i = 0; i < N+1; i++) {
			list[i] = new ArrayList<>();
		}
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			list[from].add(to);
			inDegree[to]++;
		}
		for (int i = 1; i < N+1; i++) {
			if (inDegree[i] == 0) q.offer(i);
		}
		while (!q.isEmpty()) {
			int cur = q.poll();
			ans.append(cur).append(" ");
			
			for (int num : list[cur]) {
				inDegree[num]--;
				if (inDegree[num] == 0) {
					q.offer(num);
				}
			}
		}
		
		System.out.println(ans);
	}

}
